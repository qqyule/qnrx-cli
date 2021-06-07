const shell = require('shelljs')

module.exports = (name) => {
	shell.exec(`
    yarn create @vitejs/app ${name} --template vue
    cd ${name} && yarn
    `)
}
