using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Demeter.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddCart : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AccountId",
                table: "OrderItems",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AdditionalPropertiesJson",
                table: "Accounts",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_AccountId",
                table: "OrderItems",
                column: "AccountId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Accounts_AccountId",
                table: "OrderItems",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Accounts_AccountId",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_AccountId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "AdditionalPropertiesJson",
                table: "Accounts");
        }
    }
}
