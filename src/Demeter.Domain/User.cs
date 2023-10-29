using Microsoft.AspNetCore.Http;

namespace Demeter.Domain
{
        public class User
    {
        public int idUser { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNo { get; set; }
        public string Avatar { get; set; }
        public string Address { get; set; }
 
    }

}