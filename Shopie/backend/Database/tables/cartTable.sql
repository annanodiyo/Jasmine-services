CREATE TABLE cart(
id VARCHAR(200) PRIMARY KEY,
productID VARCHAR (200) NOT NULL FOREIGN KEY REFERENCES products(id),
quantity INT DEFAULT 1 NOT NULL,
userID VARCHAR(200) NOT NULL FOREIGN KEY REFERENCES users(id)
)

-- SELECT * FROM cart