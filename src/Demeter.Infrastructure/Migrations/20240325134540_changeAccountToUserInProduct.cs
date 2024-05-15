using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Demeter.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class changeAccountToUserInProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Accounts_VendorId",
                table: "Products");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Users_VendorId",
                table: "Products",
                column: "VendorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Users_VendorId",
                table: "Products");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Accounts_VendorId",
                table: "Products",
                column: "VendorId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
