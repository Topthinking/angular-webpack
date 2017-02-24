let fs = require('fs');
let path = require('path')

module.exports = function() {
  let data = { home_edit: [] ,home_add:[]};
  data.home_edit.push(JSON.parse(fs.readFileSync(path.join(__dirname, 'home/edit.json'))));
  data.home_add.push(JSON.parse(fs.readFileSync(path.join(__dirname, 'home/add.json'))));
  return data
}