cv = document.getElementById 'artwork'
cv.width = window.innerWidth
cv.height = window.innerHeight
ctx = cv.getContext('2d')

ctx.fillStyle = "rgba(0,0,0,0.2)"

w = cv.width
h = cv.height

artworkShapes = []

maxSpeed = 0.08

class artworkShape

	constructor: (ctx, fixedOne, fixedTwo, moveOne, moveTwo, anchor, direction, speedOne, speedTwo) ->
		@_ctx = ctx
		@_fixedOne = fixedOne
		@_fixedTwo = fixedTwo
		@_moveOne = moveOne
		@_moveTwo = moveTwo
		@_direction = direction
		@_anchor = anchor
		@_speedOne = speedOne
		@_speedTwo = speedTwo

	draw: ->
		@_ctx.beginPath()
		@_ctx.moveTo @_fixedOne.x, @_fixedOne.y
		@_ctx.lineTo @_fixedTwo.x, @_fixedTwo.y
		@_ctx.lineTo @_moveOne.x, @_moveOne.y
		@_ctx.lineTo @_moveTwo.x, @_moveTwo.y
		@_ctx.closePath()

		if @_anchor is "vertical"
			@_moveOne.x -= @_speedOne
			@_moveTwo.x += @_speedTwo
			if @_moveOne.x < 0 or @_moveOne.x > w
				@_speedOne *= -1
			if @_moveTwo.x < 0 or @_moveTwo.x > w
				@_speedTwo *= -1
		else if @_anchor is "horizontal"
			@_moveOne.y -= @_speedOne
			@_moveTwo.y += @_speedTwo
			if @_moveOne.y < 0 or @_moveOne.y > h
				@_speedOne *= -1
			if @_moveTwo.y < 0 or @_moveTwo.y > h
				@_speedTwo *= -1

		@_ctx.fill(); #could this just go once in the render?? test it.


init = ()->
	console.log "init"
	generateShapes()
	render()

generateShapes = ()->
	artworkShapes = []
	artworkShapes.push new artworkShape ctx, {x: 0, y: 0}, {x: 0, y: h}, {x: w/2+Math.random()*w/2, y:h}, {x: Math.random()*w/2, y: 0}, "vertical", true, Math.random()*maxSpeed, Math.random()*maxSpeed
	artworkShapes.push new artworkShape ctx, {x: w, y: 0}, {x: w, y: h}, {x: Math.random()*w/2, y:h}, {x: w/2+Math.random()*w/2, y: 0}, "vertical", true, Math.random()*maxSpeed, Math.random()*maxSpeed
	artworkShapes.push new artworkShape ctx, {x: 0, y: h}, {x: w, y: h}, {x: w, y: h/2+Math.random()*w/2}, {x: 0, y: Math.random()*h/2}, "horizontal", true, Math.random()*maxSpeed, Math.random()*maxSpeed
	artworkShapes.push new artworkShape ctx, {x: 0, y: 0}, {x: w, y: 0}, {x: w, y: Math.random()*h/2}, {x: 0, y: h/2+Math.random()*h/2}, "horizontal", true, -Math.random()*maxSpeed, -Math.random()*maxSpeed

render = ()->
	ctx.clearRect 0,0,w,h

	for shape in artworkShapes
		shape.draw()

	window.webkitRequestAnimationFrame render

window.onresize = ()->
	# ctx.clearRect 0,0,w,h
	generateShapes()

init()
