const express = require('express')
const router = express.Router()
const chalk = require('chalk')
const middleware = require('./middleware/index')

// adds global middleware to be used on all pages
router.use(middleware)

// "homepage" - default URL link => localhost:3000/
router.get('/', (req, res) => {
	console.log('Server log')
	res.sendStatus(200)
})
// "/dev" route
router.get('/dev', (req, res) => {
	console.log('dev route for testing')
	res.sendFile('/views/index.html', {root: './'})
})

/* 
	-Used after routes are set as fallback, handlers in order
		@Error handler for critical errors
		@404 check
*/
router.use((err, req, res, next) => {
		console.log(err.stack);
		res.status(500)
			.send('There was a problem, please check the server logs')
	})
	.use((req, res, next) => {
		res.status(404)
			.sendFile('/views/404.html', {root: './'})
	})

module.exports = router;