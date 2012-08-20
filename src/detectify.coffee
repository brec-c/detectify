# Determine environment: NodeJS vs Browser
hasDetermined = false
isNodeJS      = false
isBrowser     = false
context       = @

determine = (nodeJS = true) ->
	hasDetermined = true
	isNodeJS = nodeJS
	isBrowser = not isNodeJS
	context = if isBrowser then window else @

# If we're in NodeJS then just return the real EventEmitter
# if typeof _coffeeVarAssumption is 'undefined'
if typeof exports isnt 'undefined'
	if typeof module isnt 'undefined' and module.exports
		determine()
		
unless hasDetermined then determine false

module.exports = {hasDetermined, isNodeJS, isBrowser, context}
