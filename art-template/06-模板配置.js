// 导入模板引擎
const template = require('art-template');
const path = require('path');
const moment = require('moment');

const views = path.join(__dirname, 'views', '06.art')

// 导入模板变量
template.defaults.imports.moment = moment;

const html = template(views, {
	time: new Date()
})

console.log(html);