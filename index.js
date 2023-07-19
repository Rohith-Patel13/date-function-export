//index.js
const addDays = require("date-fns/addDays");
const result = (num) => {
  const date = addDays(new Date(2020, 7, 22), num);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = result;
