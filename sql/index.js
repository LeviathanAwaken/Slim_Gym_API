let fs = require('fs');
let employee = fs.readFileSync(__dirname + '/mockData/employee.sql').toString();
let payroll = fs.readFileSync(__dirname + '/mockData/payroll.sql').toString();

let sql = employee + payroll;

module.exports = sql;