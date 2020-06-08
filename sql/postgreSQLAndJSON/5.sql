SELECT
  jsondata ->> 'customer'
AS customer,
  jsondata -> 'items' ->> 'product' AS product
FROM
	testData
WHERE
	jsondata -> 'items' ->> 'product' = 'Diaper'