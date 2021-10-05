let nock = require('nock');

module.exports.hash = "7be4312c075d7f9d8134cc91a8aac11e";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/documentModels/prebuilt-businessCard:analyze', {"urlSource":"https://storageaccount/testingdata/businessCard.png?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/de516b70-dade-4f99-9e19-07fe0aab6733?api-version=2021-09-30-preview',
  'x-envoy-upstream-service-time',
  '780',
  'apim-request-id',
  'de516b70-dade-4f99-9e19-07fe0aab6733',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:13 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/de516b70-dade-4f99-9e19-07fe0aab6733')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2021-10-04T18:23:14Z","lastUpdatedDateTime":"2021-10-04T18:23:14Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  '73b68634-1cc5-46d0-b2a5-81f8c520a107',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:14 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/de516b70-dade-4f99-9e19-07fe0aab6733')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2021-10-04T18:23:14Z","lastUpdatedDateTime":"2021-10-04T18:23:14Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '15',
  'apim-request-id',
  '07b329c7-2f9b-4a7a-ad83-3615e3ad1129',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:14 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-businessCard/analyzeResults/de516b70-dade-4f99-9e19-07fe0aab6733')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2021-10-04T18:23:14Z","lastUpdatedDateTime":"2021-10-04T18:23:17Z","analyzeResult":{"apiVersion":"2021-09-30-preview","modelId":"prebuilt-businessCard","stringIndexType":"textElements","content":"Dr. Avery Smith\nSenior Researcher\nCloud & Al Department\navery.smith@contoso.com\nhttps://www.contoso.com/\nmob: +44 (0) 7911 123456\ntel: +44 (0) 20 9876 5432\nfax: +44 (0) 20 6789 2345\nContoso\n2 Kingdom Street\nPaddington, London, W2 6BD","pages":[{"pageNumber":1,"angle":-16.2216,"width":4032,"height":3024,"unit":"pixel","words":[{"content":"Dr.","boundingBox":[422,1161,641,1114,661,1216,441,1258],"confidence":0.998,"span":{"offset":0,"length":3}},{"content":"Avery","boundingBox":[661,1109,1104,1006,1128,1113,682,1212],"confidence":0.995,"span":{"offset":4,"length":5}},{"content":"Smith","boundingBox":[1159,992,1566,888,1591,993,1182,1100],"confidence":0.995,"span":{"offset":10,"length":5}},{"content":"Senior","boundingBox":[450,1317,757,1240,773,1310,465,1383],"confidence":0.997,"span":{"offset":16,"length":6}},{"content":"Researcher","boundingBox":[771,1236,1305,1108,1321,1175,786,1307],"confidence":0.993,"span":{"offset":23,"length":10}},{"content":"Cloud","boundingBox":[475,1414,732,1351,749,1423,493,1483],"confidence":0.995,"span":{"offset":34,"length":5}},{"content":"&","boundingBox":[778,1340,819,1330,836,1401,795,1411],"confidence":0.994,"span":{"offset":40,"length":1}},{"content":"Al","boundingBox":[888,1313,998,1286,1015,1358,905,1385],"confidence":0.704,"span":{"offset":42,"length":2}},{"content":"Department","boundingBox":[1012,1282,1585,1142,1600,1208,1028,1354],"confidence":0.996,"span":{"offset":45,"length":10}},{"content":"avery.smith@contoso.com","boundingBox":[2107,938,2901,714,2915,762,2119,984],"confidence":0.983,"span":{"offset":56,"length":23}},{"content":"https://www.contoso.com/","boundingBox":[2121,1006,2990,762,3004,822,2137,1070],"confidence":0.991,"span":{"offset":80,"length":24}},{"content":"mob:","boundingBox":[2243,1103,2415,1048,2432,1112,2259,1163],"confidence":0.993,"span":{"offset":105,"length":4}},{"content":"+44","boundingBox":[2428,1045,2547,1008,2563,1072,2444,1108],"confidence":0.988,"span":{"offset":110,"length":3}},{"content":"(0)","boundingBox":[2559,1004,2658,973,2674,1039,2575,1069],"confidence":0.997,"span":{"offset":114,"length":3}},{"content":"7911","boundingBox":[2670,970,2823,923,2839,988,2687,1035],"confidence":0.989,"span":{"offset":118,"length":4}},{"content":"123456","boundingBox":[2835,919,3062,852,3078,914,2851,984],"confidence":0.993,"span":{"offset":123,"length":6}},{"content":"tel:","boundingBox":[2338,1165,2451,1128,2468,1189,2355,1219],"confidence":0.991,"span":{"offset":130,"length":4}},{"content":"+44","boundingBox":[2464,1124,2586,1084,2602,1150,2481,1185],"confidence":0.983,"span":{"offset":135,"length":3}},{"content":"(0)","boundingBox":[2598,1080,2692,1051,2708,1119,2614,1147],"confidence":0.997,"span":{"offset":139,"length":3}},{"content":"20","boundingBox":[2704,1047,2782,1023,2798,1091,2720,1115],"confidence":0.983,"span":{"offset":143,"length":2}},{"content":"9876","boundingBox":[2798,1018,2958,969,2973,1035,2814,1086],"confidence":0.991,"span":{"offset":146,"length":4}},{"content":"5432","boundingBox":[2970,966,3126,920,3141,978,2985,1031],"confidence":0.992,"span":{"offset":151,"length":4}},{"content":"fax:","boundingBox":[2375,1244,2510,1202,2527,1267,2392,1304],"confidence":0.983,"span":{"offset":156,"length":4}},{"content":"+44","boundingBox":[2522,1198,2640,1161,2658,1228,2540,1263],"confidence":0.997,"span":{"offset":161,"length":3}},{"content":"(0)","boundingBox":[2652,1157,2749,1127,2767,1194,2670,1224],"confidence":0.997,"span":{"offset":165,"length":3}},{"content":"20","boundingBox":[2761,1123,2841,1098,2860,1165,2780,1190],"confidence":0.988,"span":{"offset":169,"length":2}},{"content":"6789","boundingBox":[2858,1093,3017,1042,3036,1107,2876,1160],"confidence":0.983,"span":{"offset":172,"length":4}},{"content":"2345","boundingBox":[3030,1038,3185,989,3204,1050,3049,1103],"confidence":0.983,"span":{"offset":177,"length":4}},{"content":"Contoso","boundingBox":[1144,1902,2246,1596,2302,1747,1206,2107],"confidence":0.997,"span":{"offset":182,"length":7}},{"content":"2","boundingBox":[1234,2141,1287,2124,1315,2209,1261,2224],"confidence":0.984,"span":{"offset":190,"length":1}},{"content":"Kingdom","boundingBox":[1303,2119,1685,1991,1713,2074,1331,2204],"confidence":0.997,"span":{"offset":192,"length":7}},{"content":"Street","boundingBox":[1738,1973,2023,1873,2051,1942,1766,2054],"confidence":0.997,"span":{"offset":200,"length":6}},{"content":"Paddington,","boundingBox":[1277,2262,1843,2069,1871,2158,1305,2350],"confidence":0.995,"span":{"offset":207,"length":11}},{"content":"London,","boundingBox":[1860,2063,2220,1936,2247,2019,1888,2152],"confidence":0.997,"span":{"offset":219,"length":7}},{"content":"W2","boundingBox":[2236,1930,2380,1879,2408,1958,2264,2013],"confidence":0.998,"span":{"offset":227,"length":2}},{"content":"6BD","boundingBox":[2396,1873,2556,1814,2584,1888,2424,1951],"confidence":0.997,"span":{"offset":230,"length":3}}],"lines":[{"content":"Dr. Avery Smith","boundingBox":[421,1158,1612,875,1638,989,444,1258],"spans":[{"offset":0,"length":15}]},{"content":"Senior Researcher","boundingBox":[450,1315,1316,1105,1333,1172,465,1383],"spans":[{"offset":16,"length":17}]},{"content":"Cloud & Al Department","boundingBox":[475,1414,1592,1139,1609,1209,492,1483],"spans":[{"offset":34,"length":21}]},{"content":"avery.smith@contoso.com","boundingBox":[2107,932,2937,704,2952,754,2120,984],"spans":[{"offset":56,"length":23}]},{"content":"https://www.contoso.com/","boundingBox":[2120,1006,2988,762,3004,822,2136,1069],"spans":[{"offset":80,"length":24}]},{"content":"mob: +44 (0) 7911 123456","boundingBox":[2242,1101,3076,846,3094,908,2259,1163],"spans":[{"offset":105,"length":24}]},{"content":"tel: +44 (0) 20 9876 5432","boundingBox":[2337,1160,3134,917,3151,979,2356,1219],"spans":[{"offset":130,"length":25}]},{"content":"fax: +44 (0) 20 6789 2345","boundingBox":[2375,1244,3196,985,3216,1051,2394,1304],"spans":[{"offset":156,"length":25}]},{"content":"Contoso","boundingBox":[1144,1902,2319,1577,2373,1749,1204,2106],"spans":[{"offset":182,"length":7}]},{"content":"2 Kingdom Street","boundingBox":[1233,2141,2024,1872,2051,1953,1263,2224],"spans":[{"offset":190,"length":16}]},{"content":"Paddington, London, W2 6BD","boundingBox":[1276,2263,2572,1807,2601,1894,1307,2350],"spans":[{"offset":207,"length":26}]}],"spans":[{"offset":0,"length":233}]}],"documents":[{"docType":"prebuilt:businesscard","boundingRegions":[{"pageNumber":1,"boundingBox":[0,0,4032,0,4032,3024,0,3024]}],"fields":{"Addresses":{"type":"array","valueArray":[{"type":"string","valueString":"2 Kingdom Street Paddington, London, W2 6BD","content":"2 Kingdom Street Paddington, London, W2 6BD","boundingRegions":[{"pageNumber":1,"boundingBox":[1230,2142,2509,1680,2588,1899,1309,2361]}],"confidence":0.959,"spans":[{"offset":190,"length":43}]}]},"CompanyNames":{"type":"array","valueArray":[{"type":"string","valueString":"Contoso","content":"Contoso","boundingRegions":[{"pageNumber":1,"boundingBox":[1144,1902,2246,1596,2302,1747,1206,2107]}],"confidence":0.61,"spans":[{"offset":182,"length":7}]}]},"ContactNames":{"type":"array","valueArray":[{"type":"object","valueObject":{"FirstName":{"type":"string","valueString":"Avery","content":"Avery","boundingRegions":[{"pageNumber":1,"boundingBox":[661,1109,1104,1006,1128,1113,682,1212]}],"spans":[{"offset":4,"length":5}]},"LastName":{"type":"string","valueString":"Smith","content":"Smith","boundingRegions":[{"pageNumber":1,"boundingBox":[1159,992,1566,888,1591,993,1182,1100]}],"spans":[{"offset":10,"length":5}]}},"content":"Dr. Avery Smith","boundingRegions":[{"pageNumber":1,"boundingBox":[416,1149,1567,888,1594,1007,443,1269]}],"confidence":0.977,"spans":[{"offset":0,"length":15}]}]},"Departments":{"type":"array","valueArray":[{"type":"string","valueString":"Cloud & Al Department","content":"Cloud & Al Department","boundingRegions":[{"pageNumber":1,"boundingBox":[475,1413,1585,1142,1603,1215,492,1486]}],"confidence":0.989,"spans":[{"offset":34,"length":21}]}]},"Emails":{"type":"array","valueArray":[{"type":"string","valueString":"avery.smith@contoso.com","content":"avery.smith@contoso.com","boundingRegions":[{"pageNumber":1,"boundingBox":[2107,938,2901,714,2915,762,2119,984]}],"confidence":0.99,"spans":[{"offset":56,"length":23}]}]},"Faxes":{"type":"array","valueArray":[{"type":"phoneNumber","content":"+44 (0) 20 6789 2345","boundingRegions":[{"pageNumber":1,"boundingBox":[2519,1197,3185,989,3206,1057,2541,1265]}],"confidence":0.99,"spans":[{"offset":161,"length":20}]}]},"JobTitles":{"type":"array","valueArray":[{"type":"string","valueString":"Senior Researcher","content":"Senior Researcher","boundingRegions":[{"pageNumber":1,"boundingBox":[448,1314,1305,1106,1322,1177,465,1385]}],"confidence":0.99,"spans":[{"offset":16,"length":17}]}]},"Locale":{"type":"string","valueString":"en-US","confidence":1},"MobilePhones":{"type":"array","valueArray":[{"type":"phoneNumber","content":"+44 (0) 7911 123456","boundingRegions":[{"pageNumber":1,"boundingBox":[2425,1045,3061,849,3081,914,2444,1109]}],"confidence":0.99,"spans":[{"offset":110,"length":19}]}]},"Websites":{"type":"array","valueArray":[{"type":"string","valueString":"https://www.contoso.com/","content":"https://www.contoso.com/","boundingRegions":[{"pageNumber":1,"boundingBox":[2121,1006,2990,762,3004,822,2137,1070]}],"confidence":0.99,"spans":[{"offset":80,"length":24}]}]},"WorkPhones":{"type":"array","valueArray":[{"type":"phoneNumber","content":"+44 (0) 20 9876 5432","boundingRegions":[{"pageNumber":1,"boundingBox":[2462,1122,3125,917,3146,984,2482,1189]}],"confidence":0.987,"spans":[{"offset":135,"length":20}]}]}},"confidence":1,"spans":[{"offset":0,"length":233}]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '26',
  'apim-request-id',
  'c19f68e1-bd4f-4c4a-bc99-58f017c1953a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:19 GMT'
]);
