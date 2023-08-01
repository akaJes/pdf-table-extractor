// Loading file from file system into typed array
var pdfPath = process.argv[2];
//const pdf2table = require('pdf-table-extractor-jes');
const pdf2table = require('./');
pdf2table(pdfPath, function (result) {
    console.log(JSON.stringify(result, 0, 2));
}, function (err) {
    console.error('Error: ' + err);
});

