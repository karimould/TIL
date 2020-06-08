SELECT
  json_object_keys (jsondata->'items')
FROM
  testData;