DROP DATABASE IF EXISTS test_database;

create database test_database;

\c test_database;

CREATE TABLE testData
(
  ID serial NOT NULL PRIMARY KEY,
  jsonData json NOT NULL
);

INSERT INTO testData
  (jsonData)
VALUES
  (
    '{ "customer": "Lily Bush", "items": {"product": "Diaper","qty": 24}}'
	),
  (
    '{ "customer": "Josh William", "items": {"product": "Toy Car","qty": 1}}'
	),
  (
    '{ "customer": "Mary Clark", "items": {"product": "Toy Train","qty": 2}}'
	);