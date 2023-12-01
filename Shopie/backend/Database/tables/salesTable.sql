CREATE TABLE sales(
id VARCHAR(200) PRIMARY KEY,
productID VARCHAR (200) NOT NULL FOREIGN KEY REFERENCES products(id),
quantity INT DEFAULT 1 NOT NULL,
orderID VARCHAR(200) NOT NULL FOREIGN KEY REFERENCES orders(id),
price INT DEFAULT 0 NOT NULL
)

-- SELECT * FROM sales