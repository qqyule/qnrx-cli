const shell = require('shelljs')
const ora = require('ora')

module.exports = (name) => {
	const process = ora('部署中....')
	process.start()
	shell.exec(`yarn create @vitejs/app ${name} --template vue`)
	process.succeed()
	shell.cd(name)
	shell.exec('yarn')
	shell.exit(1)
}
