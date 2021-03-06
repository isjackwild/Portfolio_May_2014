cv = document.getElementById 'artwork'
cv.width = window.innerWidth
cv.height = window.innerHeight
ctx = cv.getContext('2d')

# generationColour = "rgba(33,143,255,0.2)"

w = cv.width
h = cv.height
artworkShapes = []
throttle = 100
maxSpeed = 1

coverArtworkEngine = null

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

		if @_anchor is "horizontal"
			@_moveOne.x -= @_speedOne
			@_moveTwo.x += @_speedTwo
			if @_moveOne.x < 0 or @_moveOne.x > w
					@_speedOne *= -1
			if @_moveTwo.x < 0 or @_moveTwo.x > w
					@_speedTwo *= -1
		else if @_anchor is "vertical"
			@_moveOne.y -= @_speedOne
			@_moveTwo.y += @_speedTwo
			if @_moveOne.y < 0 or @_moveOne.y > h
				@_speedOne *= -1
			if @_moveTwo.y < 0 or @_moveTwo.y > h
				@_speedTwo *= -1

		if Math.random() > 0.995
			@_speedOne *= -1
			@_speedTwo *= -1

		@_ctx.fill(); #could this just go once in the render?? test it.

class artworkEngine
	_artworkShapes: null
	_throttle: 100
	_maxSpeed: 0.7

	constructor: (ctx, w, h) ->
		@_ctx = ctx
		@w = w
		@h = h

	init: () =>
		@_ctx.fillStyle = window.generationColour
		@generateShapes()
		@render()


	generateShapes: ()=>
		@_ctx.clearRect 0,0,@w,@h
		@_artworkShapes = []
		
		@_artworkShapes.push new artworkShape @_ctx, {x:0,y:0}, {x:0,y:@h}, {x:Math.random()*@w,y:@h}, {x:Math.random()*@w, y:0}, "horizontal", true, Math.random()*maxSpeed, Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: @w, y: 0}, {x: @w, y: @h}, {x: Math.random()*@w, y:@h}, {x:Math.random()*@w, y: 0}, "horizontal", true, -Math.random()*maxSpeed, -Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: 0, y: @h}, {x: @w, y: @h}, {x: @w, y: @h/2+Math.random()*@w/2}, {x: 0, y: Math.random()*@_h/2}, "vertical", true, Math.random()*maxSpeed, Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: 0, y: 0}, {x: @w, y: 0}, {x: @w, y: Math.random()*@h/2}, {x: 0, y: @h/2+Math.random()*@_h/2}, "vertical", true, -Math.random()*maxSpeed, -Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x:0,y:0}, {x:0,y:@h}, {x:Math.random()*@w,y:h}, {x:Math.random()*@w, y:0}, "horizontal", true, Math.random()*maxSpeed, Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: @w, y: 0}, {x: w, y: @h}, {x: Math.random()*@w, y:@h}, {x:Math.random()*@w, y: 0}, "horizontal", true, -Math.random()*maxSpeed, -Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: 0, y: @h}, {x: @w, y: @h}, {x: @w, y: @h/2+Math.random()*@w/2}, {x: 0, y: Math.random()*@h/2}, "vertical", true, Math.random()*maxSpeed, Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: 0, y: 0}, {x: @w, y: 0}, {x: @w, y: Math.random()*@h/2}, {x: 0, y: @h/2+Math.random()*@h/2}, "vertical", true, -Math.random()*maxSpeed, -Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x:0,y:0}, {x:0,y:h}, {x:Math.random()*@w,y:h}, {x:Math.random()*@w, y:0}, "horizontal", true, Math.random()*maxSpeed, Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: @w, y: 0}, {x: @w, y: @h}, {x: Math.random()*@w, y:@h}, {x:Math.random()*@w, y: 0}, "horizontal", true, -Math.random()*maxSpeed, -Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: 0, y: @h}, {x: @w, y: @h}, {x:@w, y: @h/2+Math.random()*@w/2}, {x: 0, y: Math.random()*@h/2}, "vertical", true, Math.random()*maxSpeed, Math.random()*maxSpeed
		@_artworkShapes.push new artworkShape @_ctx, {x: 0, y: 0}, {x: @w, y: 0}, {x: @w, y: Math.random()*@h/2}, {x: 0, y: @h/2+Math.random()*@h/2}, "vertical", true, -Math.random()*maxSpeed, -Math.random()*maxSpeed


	render: ()=>
		@_ctx.clearRect 0,0,@w,@h

		for shape in @_artworkShapes
			shape.draw()

		that = @
		setTimeout ->
			window.requestAnimationFrame that.render
		,throttle


$(window).load =>
	coverArtworkEngine = new artworkEngine ctx, w, h
	coverArtworkEngine.init();

$(window).resize =>
	coverArtworkEngine.generateShapes()


