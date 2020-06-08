SELECT
  jsondata -> 'items'
->> 'product' as product
FROM
	testData
ORDER BY
	product;