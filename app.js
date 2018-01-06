const express = require('express')
const app = express()
const chalk = require('chalk')
const router = require('./routes/index.js')
let console_log

/* 
	Sets env file used for debugging by starting your server with
	`NODE_ENV=staging` as an example. This automatically sets the
	environment to development if not specified. Feel free to update the 
	filenames to whatever is useful by updating the returned path.

							**WARNING**
	.env are never a good idea to commit, and having multiple
	can lead to having open information in your repo. Make sure
	to add any additional .env files to your .gitignore file
	as to not accidentally commit private information.
*/

const envPath = function() {
	switch(process.env.NODE_ENV) {
		case 'production':
			console_log = '*** Using '+ chalk.green('Production') +' ENV \n'
			return {path: './.env_prod'}
		case 'staging':
			console_log = '*** Using '+ chalk.green('Staging') +' ENV \n'
			return {path: './.env_staging'}
		default:
			console_log = '*** Using '+ chalk.green('Development') +' ENV \n'
			return {path: './.env'}
	}
}

// Sets up .env file
require('dotenv').config(envPath())

// Sets up view engine if one is specified in .env
if (process.env.VIEW_ENGINE) {
	app.set('view engine', process.env.VIEW_ENGINE)
		.set('views', './views')

	console_log += '*** View Engine set to: ' + chalk.green(process.env.VIEW_ENGINE) +'\n'
} else {
	console_log += chalk.yellow('View Engine not set, .render() won\'t be usable \n')
}

/*
	Sets /public folder for use for locally referenced files ex. ./scripts/main.js in index.html
	Sets routes from ./routes/ folder
*/

app.use(express.static('public/'))
	.use(router)

// Sets port to 3000 by default if PORT var not found in .env file
app.set('port', (process.env.PORT || 3000))

// Spin up the server
app.listen(app.get('port'), () => {
	console_log += '*** running on port: ' + chalk.green(app.get('port'))
	console.log(console_log)
})