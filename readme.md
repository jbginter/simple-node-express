# Simple Node Server

Very basic setup for spinning up a simple node server. Has some personal preferences for packages to use to make setup easier. Must have Node and Node Package Manager (npm) installed to run. [Link to Node](https://nodejs.org/en/download/) and [link to npm](https://www.npmjs.com/package/npm)

## Setup

Make sure to use `npm install` to setup all required packages. This setup uses the `dotenv` npm module to easily setup certain server requirements. Make sure to create a new .env file if you want to set variables to use on your server. Some examples of this are database logins, tokens, etc. Variables are easy to setup and just require a name and then the value afterwards.

Example: `VAR_NAME=data`

You can reference values setup using `process.env.VALUE_NAME` where VALUE_NAME is replaced with whatever variable you want to access. You can also use .env-example to see some basic setups for how this works. You can also read the documentation for dotenv [here](https://github.com/motdotla/dotenv) in the repo.

To spin up the server, simply type `node app.js` from your root directory after making sure your node modules are installed.

You can find documention for Express [here](https://github.com/expressjs/express)
Official [website](https://expressjs.com/)

### Chalk

Chalk is a great way to colorize the console logs sent from your server.

For Chalk info, read [here](https://github.com/chalk/chalk)

### Compression

Middleware used to compress the response body and increase the speed of the site. Not recommended for sites with high traffic, consider using a reverse proxy instead.

### Helmet

Recommended to use from expressjs.com site, full description below also found [here](http://expressjs.com/en/advanced/best-practice-security.html)

Helmet is actually just a collection of nine smaller middleware functions that set security-related HTTP headers:

- csp sets the Content-Security-Policy header to help prevent cross-site scripting attacks and other cross-site injections.
- hidePoweredBy removes the X-Powered-By header.
- hpkp Adds Public Key Pinning headers to prevent man-in-the-middle attacks with forged certificates.
- hsts sets Strict-Transport-Security header that enforces secure (HTTP over SSL/TLS) connections to the server.
- ieNoOpen sets X-Download-Options for IE8+.
- noCache sets Cache-Control and Pragma headers to disable client-side caching.
- noSniff sets X-Content-Type-Options to prevent browsers from MIME-sniffing a response away from the declared content-type.
- frameguard sets the X-Frame-Options header to provide clickjacking protection.
- xssFilter sets X-XSS-Protection to enable the Cross-site scripting (XSS) filter in most recent web browsers.