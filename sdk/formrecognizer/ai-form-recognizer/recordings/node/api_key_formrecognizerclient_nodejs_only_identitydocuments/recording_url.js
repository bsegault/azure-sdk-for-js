let nock = require('nock');

module.exports.hash = "5607da2650d845ca6de45b0fa0e5053f";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/documentModels/prebuilt-idDocument:analyze', {"urlSource":"https://storageaccount/testingdata/license.jpg?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/d3b23008-cf08-409f-a11f-3b2bf62a27d4?api-version=2021-09-30-preview',
  'x-envoy-upstream-service-time',
  '86',
  'apim-request-id',
  'd3b23008-cf08-409f-a11f-3b2bf62a27d4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:44 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/d3b23008-cf08-409f-a11f-3b2bf62a27d4')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2021-10-04T18:23:45Z","lastUpdatedDateTime":"2021-10-04T18:23:45Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  'e7fc6fd7-5048-49c9-b385-e1109d87e714',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:45 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/d3b23008-cf08-409f-a11f-3b2bf62a27d4')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2021-10-04T18:23:45Z","lastUpdatedDateTime":"2021-10-04T18:23:45Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  '4fe0e17b-1e13-4c42-8ed2-44b44013fe6b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:45 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-idDocument/analyzeResults/d3b23008-cf08-409f-a11f-3b2bf62a27d4')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2021-10-04T18:23:45Z","lastUpdatedDateTime":"2021-10-04T18:23:46Z","analyzeResult":{"apiVersion":"2021-09-30-preview","modelId":"prebuilt-idDocument","stringIndexType":"textElements","content":"USA WASHINGTON\nWA\n20 1234567XX1101\nDRIVER LICENSE\nFEDERAL LIMITS APPLY\n4dLIC#WDLABCD456DG 9CLASS\nDONOR\n1 TALBOT\n2 LIAM R.\n3 DOB 01/06/1958\n4a ISS 01/06/2015\n8 123 STREET ADDRESS\nYOUR CITY WA 99999-1234\n15 SEX M\n16 HGT 5'-08\"\n18 EYES BLU\n17 WGT 165 lb\n12 RESTRICTIONS 9a END L\nB\n4b EXP 08/12/2020\n5 DDWDLABCD456DG 1234567XX1101\nVeteran\nREV 07/01/2018","pages":[{"pageNumber":1,"angle":-0.2823,"width":450,"height":294,"unit":"pixel","words":[{"content":"USA","boundingBox":[18,34,38,31,38,48,18,49],"confidence":0.997,"span":{"offset":0,"length":3}},{"content":"WASHINGTON","boundingBox":[42,31,221,25,221,48,42,48],"confidence":0.992,"span":{"offset":4,"length":10}},{"content":"WA","boundingBox":[18,24,36,25,36,37,17,36],"confidence":0.999,"span":{"offset":15,"length":2}},{"content":"20","boundingBox":[10,173,10,162,21,161,21,173],"confidence":0.987,"span":{"offset":18,"length":2}},{"content":"1234567XX1101","boundingBox":[10,155,10,82,21,82,21,155],"confidence":0.993,"span":{"offset":21,"length":13}},{"content":"DRIVER","boundingBox":[275,27,328,28,328,43,275,43],"confidence":0.994,"span":{"offset":35,"length":6}},{"content":"LICENSE","boundingBox":[332,28,398,28,397,43,332,43],"confidence":0.997,"span":{"offset":42,"length":7}},{"content":"FEDERAL","boundingBox":[259,50,318,50,318,64,259,63],"confidence":0.988,"span":{"offset":50,"length":7}},{"content":"LIMITS","boundingBox":[321,50,364,50,364,63,321,64],"confidence":0.997,"span":{"offset":58,"length":6}},{"content":"APPLY","boundingBox":[368,50,411,49,411,63,368,63],"confidence":0.995,"span":{"offset":65,"length":5}},{"content":"4dLIC#WDLABCD456DG","boundingBox":[151,70,306,68,307,84,152,85],"confidence":0.855,"span":{"offset":71,"length":18}},{"content":"9CLASS","boundingBox":[316,69,363,71,363,84,316,84],"confidence":0.679,"span":{"offset":90,"length":6}},{"content":"DONOR","boundingBox":[380,70,422,69,423,83,380,84],"confidence":0.994,"span":{"offset":97,"length":5}},{"content":"1","boundingBox":[150,86,156,86,156,100,150,100],"confidence":0.83,"span":{"offset":103,"length":1}},{"content":"TALBOT","boundingBox":[159,86,212,85,212,99,159,100],"confidence":0.997,"span":{"offset":105,"length":6}},{"content":"2","boundingBox":[151,102,155,102,155,116,151,116],"confidence":0.995,"span":{"offset":112,"length":1}},{"content":"LIAM","boundingBox":[158,102,190,102,190,116,158,116],"confidence":0.988,"span":{"offset":114,"length":4}},{"content":"R.","boundingBox":[197,102,215,102,215,116,197,116],"confidence":0.997,"span":{"offset":119,"length":2}},{"content":"3","boundingBox":[151,135,154,135,155,149,152,149],"confidence":0.995,"span":{"offset":122,"length":1}},{"content":"DOB","boundingBox":[158,134,183,133,183,149,158,149],"confidence":0.998,"span":{"offset":124,"length":3}},{"content":"01/06/1958","boundingBox":[186,133,272,132,272,148,186,149],"confidence":0.988,"span":{"offset":128,"length":10}},{"content":"4a","boundingBox":[314,135,323,135,324,149,315,149],"confidence":0.995,"span":{"offset":139,"length":2}},{"content":"ISS","boundingBox":[326,135,343,134,344,149,327,149],"confidence":0.806,"span":{"offset":142,"length":3}},{"content":"01/06/2015","boundingBox":[346,133,431,132,431,148,347,149],"confidence":0.993,"span":{"offset":146,"length":10}},{"content":"8","boundingBox":[151,151,155,151,156,165,152,165],"confidence":0.802,"span":{"offset":157,"length":1}},{"content":"123","boundingBox":[158,151,179,151,180,165,158,165],"confidence":0.998,"span":{"offset":159,"length":3}},{"content":"STREET","boundingBox":[181,151,233,151,234,164,182,165],"confidence":0.997,"span":{"offset":163,"length":6}},{"content":"ADDRESS","boundingBox":[236,151,300,151,300,165,237,164],"confidence":0.997,"span":{"offset":170,"length":7}},{"content":"YOUR","boundingBox":[157,164,193,164,193,177,158,176],"confidence":0.994,"span":{"offset":178,"length":4}},{"content":"CITY","boundingBox":[197,164,228,164,229,177,198,177],"confidence":0.991,"span":{"offset":183,"length":4}},{"content":"WA","boundingBox":[231,164,251,164,251,177,231,177],"confidence":0.997,"span":{"offset":188,"length":2}},{"content":"99999-1234","boundingBox":[254,164,327,163,327,177,255,177],"confidence":0.993,"span":{"offset":191,"length":10}},{"content":"15","boundingBox":[186,191,195,191,195,202,186,202],"confidence":0.994,"span":{"offset":202,"length":2}},{"content":"SEX","boundingBox":[197,191,220,190,220,201,197,202],"confidence":0.998,"span":{"offset":205,"length":3}},{"content":"M","boundingBox":[225,190,232,190,233,201,226,201],"confidence":0.995,"span":{"offset":209,"length":1}},{"content":"16","boundingBox":[186,203,196,203,196,214,185,214],"confidence":0.991,"span":{"offset":211,"length":2}},{"content":"HGT","boundingBox":[198,203,222,202,222,214,198,214],"confidence":0.997,"span":{"offset":214,"length":3}},{"content":"5'-08\"","boundingBox":[225,202,263,200,263,213,225,214],"confidence":0.94,"span":{"offset":218,"length":6}},{"content":"18","boundingBox":[294,190,303,190,304,202,294,202],"confidence":0.989,"span":{"offset":225,"length":2}},{"content":"EYES","boundingBox":[306,190,335,189,335,202,306,202],"confidence":0.99,"span":{"offset":228,"length":4}},{"content":"BLU","boundingBox":[337,189,362,188,362,201,337,202],"confidence":0.998,"span":{"offset":233,"length":3}},{"content":"17","boundingBox":[294,203,304,203,304,215,294,215],"confidence":0.995,"span":{"offset":237,"length":2}},{"content":"WGT","boundingBox":[306,203,333,202,333,214,306,215],"confidence":0.998,"span":{"offset":240,"length":3}},{"content":"165","boundingBox":[335,202,357,201,357,214,335,214],"confidence":0.998,"span":{"offset":244,"length":3}},{"content":"lb","boundingBox":[359,201,371,201,371,214,359,214],"confidence":0.63,"span":{"offset":248,"length":2}},{"content":"12","boundingBox":[186,217,195,217,195,229,186,229],"confidence":0.998,"span":{"offset":251,"length":2}},{"content":"RESTRICTIONS","boundingBox":[197,217,280,216,280,228,197,229],"confidence":0.994,"span":{"offset":254,"length":12}},{"content":"9a","boundingBox":[291,216,305,216,305,228,291,228],"confidence":0.909,"span":{"offset":267,"length":2}},{"content":"END","boundingBox":[307,216,330,215,330,228,307,228],"confidence":0.998,"span":{"offset":270,"length":3}},{"content":"L","boundingBox":[335,215,342,215,342,228,335,228],"confidence":0.994,"span":{"offset":274,"length":1}},{"content":"B","boundingBox":[231,229,238,229,238,241,231,240],"confidence":0.996,"span":{"offset":276,"length":1}},{"content":"4b","boundingBox":[294,232,303,231,303,245,294,245],"confidence":0.917,"span":{"offset":278,"length":2}},{"content":"EXP","boundingBox":[306,231,327,230,327,245,306,245],"confidence":0.997,"span":{"offset":281,"length":3}},{"content":"08/12/2020","boundingBox":[330,230,415,228,415,244,330,245],"confidence":0.996,"span":{"offset":285,"length":10}},{"content":"5","boundingBox":[153,262,158,262,158,274,153,274],"confidence":0.907,"span":{"offset":296,"length":1}},{"content":"DDWDLABCD456DG","boundingBox":[160,262,269,261,269,274,160,274],"confidence":0.988,"span":{"offset":298,"length":14}},{"content":"1234567XX1101","boundingBox":[272,261,355,261,356,274,272,274],"confidence":0.915,"span":{"offset":313,"length":13}},{"content":"Veteran","boundingBox":[390,259,433,260,433,271,390,271],"confidence":0.997,"span":{"offset":327,"length":7}},{"content":"REV","boundingBox":[366,275,383,275,383,285,366,285],"confidence":0.994,"span":{"offset":335,"length":3}},{"content":"07/01/2018","boundingBox":[386,275,434,275,434,285,385,285],"confidence":0.995,"span":{"offset":339,"length":10}}],"lines":[{"content":"USA WASHINGTON","boundingBox":[17,25,232,22,233,47,17,49],"spans":[{"offset":0,"length":14}]},{"content":"WA","boundingBox":[17,24,39,25,39,37,18,36],"spans":[{"offset":15,"length":2}]},{"content":"20 1234567XX1101","boundingBox":[10,173,10,81,21,81,21,173],"spans":[{"offset":18,"length":16}]},{"content":"DRIVER LICENSE","boundingBox":[274,27,401,27,401,42,274,43],"spans":[{"offset":35,"length":14}]},{"content":"FEDERAL LIMITS APPLY","boundingBox":[258,49,414,49,414,62,259,63],"spans":[{"offset":50,"length":20}]},{"content":"4dLIC#WDLABCD456DG 9CLASS","boundingBox":[150,67,366,67,365,84,150,84],"spans":[{"offset":71,"length":25}]},{"content":"DONOR","boundingBox":[376,69,431,69,431,83,377,84],"spans":[{"offset":97,"length":5}]},{"content":"1 TALBOT","boundingBox":[149,85,212,85,213,99,149,99],"spans":[{"offset":103,"length":8}]},{"content":"2 LIAM R.","boundingBox":[150,101,215,101,215,116,150,116],"spans":[{"offset":112,"length":9}]},{"content":"3 DOB 01/06/1958","boundingBox":[151,133,274,131,274,147,151,149],"spans":[{"offset":122,"length":16}]},{"content":"4a ISS 01/06/2015","boundingBox":[313,133,435,131,435,147,313,149],"spans":[{"offset":139,"length":17}]},{"content":"8 123 STREET ADDRESS","boundingBox":[151,151,303,150,303,164,151,164],"spans":[{"offset":157,"length":20}]},{"content":"YOUR CITY WA 99999-1234","boundingBox":[157,163,327,163,327,176,157,176],"spans":[{"offset":178,"length":23}]},{"content":"15 SEX M","boundingBox":[185,190,240,189,240,201,185,202],"spans":[{"offset":202,"length":8}]},{"content":"16 HGT 5'-08\"","boundingBox":[185,202,265,199,266,212,185,215],"spans":[{"offset":211,"length":13}]},{"content":"18 EYES BLU","boundingBox":[293,189,368,188,368,200,293,202],"spans":[{"offset":225,"length":11}]},{"content":"17 WGT 165 lb","boundingBox":[293,202,374,200,375,213,294,215],"spans":[{"offset":237,"length":13}]},{"content":"12 RESTRICTIONS 9a END L","boundingBox":[185,216,345,214,346,227,185,229],"spans":[{"offset":251,"length":24}]},{"content":"B","boundingBox":[231,229,241,229,241,241,231,240],"spans":[{"offset":276,"length":1}]},{"content":"4b EXP 08/12/2020","boundingBox":[293,230,417,228,418,243,293,245],"spans":[{"offset":278,"length":17}]},{"content":"5 DDWDLABCD456DG 1234567XX1101","boundingBox":[152,261,355,260,355,273,152,274],"spans":[{"offset":296,"length":30}]},{"content":"Veteran","boundingBox":[389,258,437,259,436,271,389,270],"spans":[{"offset":327,"length":7}]},{"content":"REV 07/01/2018","boundingBox":[366,274,436,274,436,284,366,285],"spans":[{"offset":335,"length":14}]}],"spans":[{"offset":0,"length":349}]}],"documents":[{"docType":"prebuilt:idDocument:driverLicense","boundingRegions":[{"pageNumber":1,"boundingBox":[0,0,450,0,450,294,0,294]}],"fields":{"Address":{"type":"string","valueString":"123 STREET ADDRESS YOUR CITY WA 99999-1234","content":"123 STREET ADDRESS YOUR CITY WA 99999-1234","boundingRegions":[{"pageNumber":1,"boundingBox":[157,151,327,151,327,177,157,177]}],"confidence":0.841,"spans":[{"offset":159,"length":42}]},"CountryRegion":{"type":"countryRegion","valueCountryRegion":"USA","confidence":0.995},"DateOfBirth":{"type":"date","valueDate":"1958-01-06","content":"01/06/1958","boundingRegions":[{"pageNumber":1,"boundingBox":[186,133,272,132,272,148,186,149]}],"confidence":0.985,"spans":[{"offset":128,"length":10}]},"DateOfExpiration":{"type":"date","valueDate":"2020-08-12","content":"08/12/2020","boundingRegions":[{"pageNumber":1,"boundingBox":[330,230,415,228,415,244,330,245]}],"confidence":0.985,"spans":[{"offset":285,"length":10}]},"DocumentNumber":{"type":"string","valueString":"WDLABCD456DG","content":"4dLIC#WDLABCD456DG","boundingRegions":[{"pageNumber":1,"boundingBox":[151,70,306,68,307,84,152,85]}],"confidence":0.973,"spans":[{"offset":71,"length":18}]},"Endorsements":{"type":"string","valueString":"L","content":"L","boundingRegions":[{"pageNumber":1,"boundingBox":[335,215,342,215,342,228,335,228]}],"confidence":0.98,"spans":[{"offset":274,"length":1}]},"FirstName":{"type":"string","valueString":"LIAM R.","content":"LIAM R.","boundingRegions":[{"pageNumber":1,"boundingBox":[158,102,215,102,215,116,158,116]}],"confidence":0.815,"spans":[{"offset":114,"length":7}]},"LastName":{"type":"string","valueString":"TALBOT","content":"TALBOT","boundingRegions":[{"pageNumber":1,"boundingBox":[159,86,212,85,212,99,159,100]}],"confidence":0.875,"spans":[{"offset":105,"length":6}]},"Locale":{"type":"string","valueString":"en-US","confidence":1},"Region":{"type":"string","valueString":"Washington","confidence":0.99},"Restrictions":{"type":"string","valueString":"B","content":"B","boundingRegions":[{"pageNumber":1,"boundingBox":[231,229,238,229,238,241,231,240]}],"confidence":0.964,"spans":[{"offset":276,"length":1}]},"Sex":{"type":"string","valueString":"M","content":"M","boundingRegions":[{"pageNumber":1,"boundingBox":[225,190,232,190,233,201,226,201]}],"confidence":0.988,"spans":[{"offset":209,"length":1}]}},"confidence":0.995,"spans":[{"offset":0,"length":349}]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '39',
  'apim-request-id',
  '148cd389-8369-4ae4-8b04-b4da6a44dfde',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:23:50 GMT'
]);
