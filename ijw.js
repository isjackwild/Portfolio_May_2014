// Generated by CoffeeScript 1.6.2
(function() {
  var buzzWords, colours, leftQuote, randomColour, rightQuote, showSpinQuestion;

  leftQuote = ["How did a girl like you", "order order order", "Ignor", "I buy junk", "Lost dog, recently castrated", "The Ark: Designed by an amature", "Left.", "The Devil is in the", "I like my men like I like my tea", "", "Lonely.", "No mistakes", "All views expressed are", "My other car is"];

  rightQuote = ["end up in a place like this?", "DISORDER.", "(ed).", "and sell antiques.", "answers to name of 'Lucky'.", "The Titanic: Designed by an expert.", "Wrong.", "deta>:->ls.", "Ginger.", "Lost.", "", "undefined", "someone else's.", "the U7 to Südstern."];

  buzzWords = ["Photoshop", "Illustrator", "inDesign", "AfterEffects", "Final Cut Pro", "Processing", "Arduino", "HTML", "HTML Canvas", "CSS", "CSS Animation", "Spritesheet Animation", "Javascript", "CoffeeScript", "pen(cil) and paper", "paper prototyping", "design in code"];

  colours = ["orange", "red", "blue", "teal"];

  if (Modernizr.touch) {
    $('html').addClass('touch');
  }

  window.load = function() {
    var container, msnry;

    if (document.getElementById('buzzwordHere')) {
      getBuzzword();
    }
    getQuote();
    setInterval(function() {
      return getQuote();
    }, 10000);
    if (document.getElementById('hodgePodge')) {
      container = document.querySelector('#hodgePodge');
      msnry = new Masonry(container, {
        itemSelector: '.projectTile'
      });
      clearTimeout(showSpinQuestion);
      $('#hodgePodge').removeClass('hidden');
      $('#hodgeLoader').addClass('hidden');
      $('#spinQuestion').addClass('hidden');
      return setTimeout(function() {
        return $('#hodgeLoader').addClass('goAway');
      }, 800);
    }
  };

  $("#contactMobileButton").click = function() {
    console.log('??');
    return $('html, body').animate({
      scrollTop: $("#contactMobile").offset().top
    }, 500);
  };

  randomColour = function() {
    var generationColour, whichCol;

    whichCol = Math.ceil(Math.random() * colours.length - 1);
    if (whichCol === "orange") {
      generationColour = "rgba(58,143,255,0.2)";
    } else if (whichCol === "red") {
      generationColour = "rgba(24,171,118,0.2)";
    } else if (whichCol === "blue") {
      generationColour = "rgba(227,60,52,0.2)";
    } else if (whichCol === "teal") {
      generationColour = "rgba(255,94,22,0.2)";
    }
    return $('html').addClass(colours[whichCol]);
  };

  showSpinQuestion = setTimeout(function() {
    return $('#spinQuestion').removeClass('hidden');
  }, 800);

}).call(this);