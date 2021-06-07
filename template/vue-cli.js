const shell = require('shelljs')

module.exports = (name) => {
	shell.exec(`
    vue create ${name} 
    `)
}
