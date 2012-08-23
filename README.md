[![build status](https://secure.travis-ci.org/brec-c/detectify.png)](http://travis-ci.org/brec-c/detectify)
#Detectify

Laughably simple module to test if the current environment is NodeJS or a Browser.  This could be expanded upon in the
future to include addition environment details, such as: NodeJS version, Browser agent-type, version, etc...

#Installation
Using [npm](http://npmjs.org/)  
npm install detectify

#Usage

Detectify currently returns an object with 3 properties: hasDetermined, isNodeJS, and isBrowser.  All of these are
 booleans.  To use, simply:


	detection = require 'detectify'
	
	unless detection.hasDetermined
		throw new Error "Can't continue.  Couldn't detect." 
	
	if detection.isBrowser
		console.log "We're in a browser."
	else
		console.log "We're in NodeJS.  Yay!"
