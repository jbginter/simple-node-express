const express = require('express')
const middleware = express.Router()
const helmet = require('helmet')()
const compression = require('compression')()

/*
						***WARNING***
	This is used before ANY route is hit and is intended to ONLY
	be run before anything else happens. Make sure anything added
	is for use globally and not specific. Also make sure any custom
	functions you add ie. `.use((req, res, next) => { data... })` has
	`next()` called at the end, or directs elsewhere. Otherwise you
	will find all pages loading forever as there's no direction.
*/

middleware.use(compression)
	.use(helmet)
	.use((req, res, next) => {
		// Custom function run on each page
		console.log('global middleware hit')
		next()
	})

module.exports = middleware;