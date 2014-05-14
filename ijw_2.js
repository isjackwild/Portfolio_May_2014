var leftQuote = ["How did a girl like you", "order order order", "Ignor", "I buy junk", "Lost dog, recently castrated", "The Ark: Designed by an amature", "Left.", "The Devil is in the", "I like my men like I like my tea", "", "Lonely.", "No mistakes", "All views expressed are", "My other car is"]
var rightQuote = ["end up in a place like this?", "DISORDER.", "(ed).", "and sell antiques.", "answers to name of 'Lucky'.", "The Titanic: Designed by an expert.", "Wrong.", "deta>:->ls.", "Ginger.", "Lost.", "", "undefined", "someone else's.", "the U7 to Südstern."]

var buzzWords = ["Photoshop", "Illustrator", "inDesign", "AfterEffects", "Final Cut Pro", "Processing", "Arduino", "HTML", "HTML Canvas", "CSS", "CSS Animation", "Spritesheet Animation", "Javascript", "CoffeeScript", "pen(cil) and paper", "paper prototyping", "design in code"]

var colours = ["orange", "red", "blue", "teal"]

generationColour = "rgba(255,255,255,0)";

var lastQuote;
var whichQuote;
var whichBuzz;
var lastBuzz;
var whichCol

if (Modernizr.touch){
    $('html').addClass('touch');
}

$("#contactMobileButton").click(function() {
    console.log('??')
    $('html, body').animate({
        scrollTop: $("#contactMobile").offset().top
    }, 500);
});


randomColour();

function randomColour(){
    whichCol = Math.ceil(Math.random()*(colours.length))-1

    if (colours[whichCol] == "orange"){
      generationColour = "rgba(153,121,74,0.12)"
    } else if (colours[whichCol] == "red"){
      generationColour = "rgba(125,94,79,0.2)"
    } else if (colours[whichCol] == "blue"){
      generationColour = "rgba(70,61,153,0.2)"
    } else if (colours[whichCol] == "teal"){
      generationColour = "rgba(12,107,130,0.2)"
    }

    console.log(window.generationColour)
    $('html').addClass(colours[whichCol]);
}


var showSpinQuestion = setTimeout(function(){
  $('#spinQuestion').removeClass('hidden');
},800);


$(window).load(function(){
    if (document.getElementById('buzzwordHere')){
        getBuzzword();
    }
    getQuote();
    setInterval(function(){
        getQuote();
    }, 10000);

    if(document.getElementById('hodgePodge')){

      var container = document.querySelector('#hodgePodge');
      var msnry = new Masonry( container, {
        itemSelector: '.projectTile'
      });

      clearTimeout(showSpinQuestion);
      $('#hodgePodge').removeClass('hidden');
      $('#hodgeLoader').addClass('hidden');
      $('#spinQuestion').addClass('hidden');
      setTimeout(function(){
            $('#hodgeLoader').addClass('goAway');
      }, 800)

    }
})


function getQuote(){
     $('#leftQuote').addClass('faded');
     $('#rightQuote').addClass('faded');

     whichQuote = Math.ceil(Math.random()*(leftQuote.length))-1

     if (whichQuote == lastQuote) {
        getQuote();
     } else {
        setTimeout(function(){
            document.getElementById('leftQuote').innerHTML = leftQuote[whichQuote]
            document.getElementById('rightQuote').innerHTML = rightQuote[whichQuote]
            $('#leftQuote').removeClass('faded');
            $('#rightQuote').removeClass('faded');
            lastQuote = whichQuote;
        }, 1000)
     }

}

$("#buzzwords").click(function(){
    getBuzzword();
})

function getBuzzword(){
     $('#buzzwordPara').addClass('faded');

     whichBuzz = Math.ceil(Math.random()*(buzzWords.length))-1

     if (whichBuzz == lastBuzz){
        getBuzzword();
     } else {
        setTimeout(function(){
            document.getElementById('buzzwordHere').innerHTML = buzzWords[whichBuzz]
            $('#buzzwordPara').removeClass('faded');
            lastBuzz = whichBuzz;
        }, 500)
        
     }
}


if(document.getElementById('coverPic')){
    var src = document.getElementById('coverPic').className;
    var coverImage = $( '<img src="images/' + src + '.jpg">' );

    if (src != "homeCover"){
      coverImage.bind( 'load', function(){
          clearTimeout(showSpinQuestion);

          setTimeout(function(){
              $('.duck').removeClass('duck');
              $('.coverImageLoader').addClass('hidden');
          }, 200)

          setTimeout(function(){
              $('#spinQuestion').addClass('hidden');
          }, 800)

          $('#coverPic').css( 'background-image', 'url(images/' + src + '.jpg)' );
      });

      if(coverImage[0].width ){
          coverImage.trigger('load');
      }
    } else if (src == "homeCover") {

      $(window).load(function(){
        clearTimeout(showSpinQuestion);

        setTimeout(function(){
            $('.duck').removeClass('duck');
            $('.coverImageLoader').addClass('hidden');
        }, 200)

        setTimeout(function(){
            $('#spinQuestion').addClass('hidden');
        }, 800)
      })
    }

}




