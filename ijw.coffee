leftQuote = ["How did a girl like you", "order order order", "Ignor", "I buy junk", "Lost dog, recently castrated", "The Ark: Designed by an amature", "Left.", "The Devil is in the", "I like my men like I like my tea", "", "Lonely.", "No mistakes", "All views expressed are", "My other car is"]
rightQuote = ["end up in a place like this?", "DISORDER.", "(ed).", "and sell antiques.", "answers to name of 'Lucky'.", "The Titanic: Designed by an expert.", "Wrong.", "deta>:->ls.", "Ginger.", "Lost.", "", "undefined", "someone else's.", "the U7 to Südstern."]
buzzwords = ["Photoshop", "Illustrator", "inDesign", "AfterEffects", "Final Cut Pro", "Processing", "Arduino", "HTML", "HTML Canvas", "CSS", "CSS Animation", "Spritesheet Animation", "Javascript", "CoffeeScript", "pen(cil) and paper", "paper prototyping", "design in code"]
colours = ["orange", "red", "blue", "teal"]

lastQuote = null
lastBuzz = null

window.generationColour = "rgba(255,255,255,0)"


removeLoader = ()->
	console.log 'Oh hai!'

	clearTimeout showSpinQuestion
	setTimeout ->
		$('.duck').removeClass 'duck'
		$('.coverImageLoader').addClass 'hidden'
	, 200
	setTimeout ->
		$('#showSpinQuestion').addClass 'hidden'
	, 800


randomColour = ()=>
	whichCol = Math.ceil Math.random()*(colours.length)-1
	if colours[whichCol] is "orange"
      window.generationColour = "rgba(153,121,74,0.2)"
    else if colours[whichCol]  is "red"
      window.generationColour = "rgba(125,94,79,0.2)"
    else if colours[whichCol]  is "blue"
      window.generationColour = "rgba(70,61,153,0.2)"
    else if colours[whichCol]  is "teal"
      window.generationColour = "rgba(12,107,130,0.2)"

    $('html').addClass colours[whichCol];


getQuote = ()->
	$('#leftQuote').addClass 'faded'
	$('#rightQuote').addClass 'faded'

	whichQuote = Math.ceil(Math.random()*leftQuote.length)-1

	if whichQuote is lastQuote
		getQuote()
	else
		setTimeout ->
			document.getElementById('leftQuote').innerHTML = leftQuote[whichQuote]
			document.getElementById('rightQuote').innerHTML = rightQuote[whichQuote]
			$('#leftQuote').removeClass 'faded'
			$('#rightQuote').removeClass 'faded'
			lastQuote = whichQuote
		, 1000


getBuzzword = () ->
	$('#buzzwordPara').addClass 'faded'

	whichBuzz = Math.ceil(Math.random()*buzzwords.length)-1

	if whichBuzz is lastBuzz
		getBuzzword()
	else
		setTimeout ->
			document.getElementById('buzzwordHere').innerHTML = buzzwords[whichBuzz]
			$('#buzzwordPara').removeClass 'faded'
			lastBuzz = whichBuzz
		, 500


if (Modernizr.touch)
    $('html').addClass 'touch'


randomColour()


$("#contactMobileButton").click ->
    $('html, body').animate({
        scrollTop: $("#contactMobile").offset().top
    }, 500);


$('#buzzwords').click ->
	getBuzzword();


showSpinQuestion = setTimeout ->
	$('#spinQuestion').removeClass 'hidden'
,800


$(window).load ->
	if document.getElementById 'buzzwordHere'
		getBuzzword();

	getQuote();

	setInterval ->
		getQuote()
	, 10000

	if document.getElementById 'hodgePodge'
		container = document.querySelector '#hodgePodge'
		msnry = new Masonry container, {itemSelector: '.projectTile'}

		clearTimeout showSpinQuestion

		$('#hodgePodge').removeClass 'hidden'
		$('#hodgeLoader').addClass 'hidden'
		$('#spinQuestion').addClass 'hidden'

		setTimeout ->
			$('#hodgeLoader').addClass 'goAway'
		, 800


if $('#coverPic')
	src = document.getElementById('coverPic').className
	coverImage = $('<img src="images/' + src + '.jpg">')

	if src != "homeCover"
		coverImage.bind 'load', ->
			removeLoader()
			$('#coverPic').css 'background-image', 'url(images/' + src + '.jpg)'
		if coverImage[0].width
			coverImage.trigger 'load'

	else if src is 'homeCover'
		$(window).load ->
			removeLoader()

