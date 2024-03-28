-- Delete existing data from all tables
-- DELETE FROM OrderItems;
-- DELETE FROM Orders;
-- DELETE FROM Products;
-- DELETE FROM Vouchers;
-- DELETE FROM Accounts;
-- DELETE FROM Users;
-- DELETE FROM Categories;
-- DELETE FROM AppSettings;

-- Insert sample data into AppSettings table
INSERT INTO AppSettings (Id, ReferenceKey, Value, Description, Type)
VALUES
    ('87b65b62-3d1e-4e7a-9fb0-8b4b2e7482f1', 'ThemeColor', '#4CAF50', 'Theme Color', 'Color'),
    ('a48c1d9b-d4bc-4a5a-8f8e-b0cc27fe16f4', 'Currency', 'USD', 'Currency Type', 'Currency'),
    ('c38b37b7-8c18-4e30-b09a-7cfef06269e9', 'DefaultLanguage', 'English', 'Default Language', 'Language'),
    ('f5c99d3d-d1fc-4e25-a72e-615e2eb5c105', 'MaxSearchResults', '50', 'Max Results', 'Integer');

-- Insert sample data into Categories table
INSERT INTO Categories (Name, Description, BaseCategoryId)
VALUES
    ('Fruits', 'Various types of fruits', NULL),
    ('Vegetables', 'Different kinds of vegetables', NULL),
    ('Grains', 'Different types of grains', NULL),
    ('Dairy Products', 'Milk, cheese, yogurt, etc.', NULL),
    ('Meat', 'Various types of meat', NULL),
    ('Seafood', 'Fish, shrimp, lobster, etc.', NULL);

-- Insert sample data into Users table
INSERT INTO Users (Id, FullName, Gender, DateOfBirth, Email, PhoneNumber, AvatarUrl, AddressJson)
VALUES
    ('725a95ab-0e89-4fc4-a39c-42e414a0fd29', 'John Doe', 1, '1985-10-15T00:00:00+00:00', 'john.doe@example.com', '+1234567890', '/avatars/john.png', '{"street":"123 Main St","city":"City","state":"State","zip":"12345"}'),
    ('83673b2f-8c62-4f7f-9a6f-326dc60f52a3', 'Alice Smith', 2, '1990-05-25T00:00:00+00:00', 'alice.smith@example.com', '+1987654321', '/avatars/alice.png', '{"street":"456 Elm St","city":"Town","state":"State","zip":"67890"}'),
    ('587d2a54-9e12-4b8c-b906-7d673aa2f3fe', 'Bob Johnson', 1, '1988-03-20T00:00:00+00:00', 'bob.johnson@example.com', '+1122334455', '/avatars/bob.png', '{"street":"789 Oak St","city":"Village","state":"State","zip":"45678"}'),
    ('f8942f62-4bc7-4e07-a4ec-924b44e2a5c5', 'Emma Williams', 2, '1992-07-08T00:00:00+00:00', 'emma.williams@example.com', '+9988776655', '/avatars/emma.png', '{"street":"101 Pine St","city":"Hamlet","state":"State","zip":"90123"}');

-- Insert sample data into Accounts table (continued)
INSERT INTO Accounts (Id, Type, UserName, Password, UserId, AdditionalPropertiesJson, AccessFailedCount, ConcurrencyStamp, Email, EmailConfirmed, LockoutEnabled, LockoutEnd, NormalizedEmail, NormalizedUserName, PasswordHash, PhoneNumber, PhoneNumberConfirmed, SecurityStamp, TwoFactorEnabled)
VALUES
    ('8be8a9a4-9ff3-44c3-b902-17d77493254d', 1, 'johndoe', 'correcthorsebatterystaple', '725a95ab-0e89-4fc4-a39c-42e414a0fd29', '', 0, NULL, 'john.doe@example.com', 0, 0, NULL, NULL, 'johndoe', 'correcthorsebatterystaple', '+1234567890', 0, NULL, 0),
    ('05f2b6cb-5b8e-4a3b-8bc8-7ebf13e8361e', 1, 'alices', 'password123', '83673b2f-8c62-4f7f-9a6f-326dc60f52a3', '', 0, NULL, 'alice.smith@example.com', 0, 0, NULL, NULL, 'alices', 'password123', '+1987654321', 0, NULL, 0),
    ('b3f034a2-942d-4e7f-a863-51d6c9e4bea7', 1, 'bobj', 'qwerty', '587d2a54-9e12-4b8c-b906-7d673aa2f3fe', '', 0, NULL, 'bob.johnson@example.com', 0, 0, NULL, NULL, 'bobj', 'qwerty', '+1122334455', 0, NULL, 0),
    ('f2cc5d54-0aa6-42d2-b342-7cb0afad69df', 1, 'emmaw', 'letmein', 'f8942f62-4bc7-4e07-a4ec-924b44e2a5c5', '', 0, NULL, 'emma.williams@example.com', 0, 0, NULL, NULL, 'emmaw', 'letmein', '+9988776655', 0, NULL, 0);

-- Insert sample data into Vouchers table
INSERT INTO Vouchers (Id, Code, Description, Discount, StartDate, EndDate, Active, UsageLimit)
VALUES
    ('0137322d-dce3-4b18-bfeb-ff13e90a1f8f', 'SPRING25', 'Spring Sale - 25% Off', 25, '2024-03-01T00:00:00+00:00', '2024-03-31T23:59:59+00:00', 1, 100),
    ('6ac7471b-574f-4fe3-83eb-20f3c1f8c04b', 'SUMMER15', 'Summer Promotion - 15% Off', 15, '2024-06-01T00:00:00+00:00', '2024-06-30T23:59:59+00:00', 1, 50);

-- Insert sample data into Products table with CategoryId retrieved from Categories table
INSERT INTO Products (Id, Name, Description, BaseUnitPrice, DateCreated, DateModified, CategoryId, VendorId, VoucherId)
SELECT
    '4e32c8b9-7c36-48e4-9cc5-12ed9fc1581d', 'Apple', 'Fresh red apples', 1.50, '2024-03-26T00:00:00+00:00', '2024-03-26T00:00:00+00:00', c.Id, '725a95ab-0e89-4fc4-a39c-42e414a0fd29', NULL
FROM Categories c
WHERE c.Name = 'Fruits';

INSERT INTO Products (Id, Name, Description, BaseUnitPrice, DateCreated, DateModified, CategoryId, VendorId, VoucherId)
SELECT
    'a2bbf342-593b-4e0e-b0b1-55e41e0b27ec', 'Tomato', 'Ripe tomatoes', 2.00, '2024-03-26T00:00:00+00:00', '2024-03-26T00:00:00+00:00', c.Id, '83673b2f-8c62-4f7f-9a6f-326dc60f52a3', NULL
FROM Categories c
WHERE c.Name = 'Vegetables';

INSERT INTO Products (Id, Name, Description, BaseUnitPrice, DateCreated, DateModified, CategoryId, VendorId, VoucherId)
SELECT
    '0b40a6c7-aeab-4a19-8a89-9b84d5b4f7e8', 'Banana', 'Fresh bananas', 1.20, '2024-03-27T00:00:00+00:00', '2024-03-27T00:00:00+00:00', c.Id, '725a95ab-0e89-4fc4-a39c-42e414a0fd29', NULL
FROM Categories c
WHERE c.Name = 'Fruits';

INSERT INTO Products (Id, Name, Description, BaseUnitPrice, DateCreated, DateModified, CategoryId, VendorId, VoucherId)
SELECT
    'b0a92d2e-5c36-4ec2-a241-21ed32b10268', 'Potato', 'Farm-fresh potatoes', 1.80, '2024-03-27T00:00:00+00:00', '2024-03-27T00:00:00+00:00', c.Id, '83673b2f-8c62-4f7f-9a6f-326dc60f52a3', NULL
FROM Categories c
WHERE c.Name = 'Vegetables';

INSERT INTO Products (Id, Name, Description, BaseUnitPrice, DateCreated, DateModified, CategoryId, VendorId, VoucherId)
SELECT
    '0d61c728-3a19-49eb-b1ff-6c05cf60b623', 'Wheat', 'Whole wheat grains', 2.50, '2024-03-28T00:00:00+00:00', '2024-03-28T00:00:00+00:00', c.Id, '83673b2f-8c62-4f7f-9a6f-326dc60f52a3', NULL
FROM Categories c
WHERE c.Name = 'Grains';

INSERT INTO Products (Id, Name, Description, BaseUnitPrice, DateCreated, DateModified, CategoryId, VendorId, VoucherId)
SELECT
    'cd9b5b5a-3506-45a2-b37a-0d27e9ee6c47', 'Milk', 'Fresh dairy milk', 3.00, '2024-03-28T00:00:00+00:00', '2024-03-28T00:00:00+00:00', c.Id, '83673b2f-8c62-4f7f-9a6f-326dc60f52a3', NULL
FROM Categories c
WHERE c.Name = 'Dairy Products';

-- Insert sample data into Orders table
INSERT INTO Orders (OrderId, TotalPrice, AccountId)
VALUES
    ('64ee849d-6e7f-4b22-af39-438eea399609a', 250, '8be8a9a4-9ff3-44c3-b902-17d77493254d'),
    ('84dc1106-7783-42c8-b031-bd5e89074a60', 150, '05f2b6cb-5b8e-4a3b-8bc8-7ebf13e8361e'),
    ('f8a5e178-cb15-4a79-b5d3-3b0dcaeff2ac', 180, 'b3f034a2-942d-4e7f-a863-51d6c9e4bea7'),
    ('26b1d13d-11f7-4b90-8056-b7bb6ee2d20b', 120, 'f2cc5d54-0aa6-42d2-b342-7cb0afad69df');

-- Insert sample data into OrderItems table
INSERT INTO OrderItems (Quantity, DateCreated, ProductId, OrderId)
VALUES
    (10, '2024-03-26T00:00:00+00:00', '4e32c8b9-7c36-48e4-9cc5-12ed9fc1581d', '64ee849d-6e7f-4b22-af39-438eea399609a'),
    (5, '2024-03-26T00:00:00+00:00', 'a2bbf342-593b-4e0e-b0b1-55e41e0b27ec', '84dc1106-7783-42c8-b031-bd5e89074a60'),
    (6, '2024-03-27T00:00:00+00:00', '0b40a6c7-aeab-4a19-8a89-9b84d5b4f7e8', 'f8a5e178-cb15-4a79-b5d3-3b0dcaeff2ac'),
    (8, '2024-03-27T00:00:00+00:00', 'b0a92d2e-5c36-4ec2-a241-21ed32b10268', 'f8a5e178-cb15-4a79-b5d3-3b0dcaeff2ac'),
    (7, '2024-03-28T00:00:00+00:00', '0d61c728-3a19-49eb-b1ff-6c05cf60b623', '26b1d13d-11f7-4b90-8056-b7bb6ee2d20b'),
    (3, '2024-03-28T00:00:00+00:00', 'cd9b5b5a-3506-45a2-b37a-0d27e9ee6c47', '26b1d13d-11f7-4b90-8056-b7bb6ee2d20b');

-- Insert sample data into Prices table
INSERT INTO Prices (UnitPrice, StartDate, EndDate, ProductId)
VALUES
    (1.50, '2024-03-26T00:00:00+00:00', '2024-12-31T23:59:59+00:00', '4e32c8b9-7c36-48e4-9cc5-12ed9fc1581d'),
    (2.00, '2024-03-26T00:00:00+00:00', '2024-12-31T23:59:59+00:00', 'a2bbf342-593b-4e0e-b0b1-55e41e0b27ec'),
    (1.20, '2024-03-27T00:00:00+00:00', '2024-12-31T23:59:59+00:00', '0b40a6c7-aeab-4a19-8a89-9b84d5b4f7e8'),
    (1.80, '2024-03-27T00:00:00+00:00', '2024-12-31T23:59:59+00:00', 'b0a92d2e-5c36-4ec2-a241-21ed32b10268'),
    (2.50, '2024-03-28T00:00:00+00:00', '2024-12-31T23:59:59+00:00', '0d61c728-3a19-49eb-b1ff-6c05cf60b623'),
    (3.00, '2024-03-28T00:00:00+00:00', '2024-12-31T23:59:59+00:00', 'cd9b5b5a-3506-45a2-b37a-0d27e9ee6c47');
