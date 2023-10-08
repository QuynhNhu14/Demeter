using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data;
using Microsoft.Data.SqlClient;
// using Microsoft.Configuration;
using Demeter.Domain;
using Microsoft.Extensions.Configuration;
//using System.ComponentModel.DataAnnotations;
//using Demeter.Core.Services.AppSettings;

namespace Demeter.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

 
    public class UserController : ControllerBase
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DemeterCon"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da = null;

        [HttpPost]
        [Route("Registration")]
        public string Registration(User user)
        {
            string msg = string.Empty;
            try
            {
                cmd = new SqlCommand("usp_Registration", conn);
                cmd.CommandType = CommandType.StoreProcedure;
                cmd.Parameters.AddWithValue("@Name", user.Name);
                cmd.Parameters.AddWithValue("@Password", user.Password);
                cmd.Parameters.AddWithValue("@Email", user.Email);
                cmd.Parameters.AddWithValue("@Address", user.Address);
                cmd.Parameters.AddWithValue("@PhoneNo", user.PhoneNo);
                cmd.Parameters.AddWithValue("@Avatar", user.Avatar);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Data inserted.";
                }
                else
                {
                    msg = "Error.";
                }
            }
            catch(Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }

        [HttpPost]
        [Route("Login")]
        public string Login(User user)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("usp_Login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameter.AddWithValue("@Name", user.Name);
                da.SelectCommand.Parameter.AddWithValue("@Password", user.Password);
                DataTable dt = new DataTable();
                da.Fill(dt);

                if(dt.Rows.Count > 0){
                    msg = "User is Valid";
                }
                else
                {
                    msg = "User is Invalid";

                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }

    }
}