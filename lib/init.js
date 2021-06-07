const inquirer = require('inquirer')
const vite = require('../template/vite')
const vueCli = require('../template/vue-cli')
module.exports = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				message: '请输入项目名称',
				name: 'name',
			},
			// {
			// 	type: 'confirm',
			// 	message: '项目初始化',
			// 	default: true,
			// 	name: 'init',
			// },
			{
				type: 'list',
				message: '请选择技术栈',
				choices: ['vite', 'vue-cli', 'egg'],
				name: 'type',
			},
			// {
			// 	type: 'checkbox',
			// 	message: '请选择技术栈',
			// 	choices: ['vite', 'vue-cli', 'egg'],
			// 	name: 'type2',
			// },
		])
		.then((project) => {
			console.log('项目名为：', project.name)
			console.log('项目选型为：', project.type)
			switch (project.type) {
				case 'vite':
					vite(project.name)
					break
				case 'vue-cli':
					vueCli(project.name)
					break
				default:
					vite(project.name)
					break
			}
		})
}
