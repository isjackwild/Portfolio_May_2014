// Generated by CoffeeScript 1.6.2
(function() {
  var buzzwords, colours, coverImage, getBuzzword, getQuote, lastBuzz, lastQuote, leftQuote, randomColour, removeLoader, rightQuote, showSpinQuestion, src,
    _this = this;

  leftQuote = ["How did a girl like you", "order order order", "Ignor", "I buy junk", "Lost dog, recently castrated", "The Ark: Designed by an amature", "Left.", "The Devil is in the", "I like my men like I like my tea", "", "Lonely.", "No mistakes", "All views expressed are"];

  rightQuote = ["end up in a place like this?", "DISORDER.", "(ed).", "and sell antiques.", "answers to name of 'Lucky'.", "The Titanic: Designed by an expert.", "Wrong.", "deta>:->ls.", "Ginger.", "Lost.", "", "undefined", "someone else's."];

  buzzwords = ["Photoshop", "Illustrator", "inDesign", "AfterEffects", "Final Cut Pro", "Processing", "Arduino", "HTML", "HTML Canvas", "CSS", "CSS Animation", "Spritesheet Animation", "Javascript", "CoffeeScript", "pen(cil) and paper", "paper prototyping", "responsive design", "design in code", "SVG Animation"];

  colours = ["orange", "red", "blue", "teal"];

  lastQuote = null;

  lastBuzz = null;

  window.generationColour = "rgba(255,255,255,0)";

  removeLoader = function() {
    console.log('Oh hai!');
    clearTimeout(showSpinQuestion);
    setTimeout(function() {
      $('.duck').removeClass('duck');
      return $('.coverImageLoader').addClass('hidden');
    }, 200);
    return setTimeout(function() {
      return $('#showSpinQuestion').addClass('hidden');
    }, 800);
  };

  randomColour = function() {
    var whichCol;

    whichCol = Math.ceil(Math.random() * colours.length - 1);
    if (colours[whichCol] === "orange") {
      window.generationColour = "rgba(0,77,53,0.2)";
    } else if (colours[whichCol] === "red") {
      window.generationColour = "rgba(99,55,55,0.2)";
    } else if (colours[whichCol] === "blue") {
      window.generationColour = "rgba(70,61,153,0.2)";
    } else if (colours[whichCol] === "teal") {
      window.generationColour = "rgba(10,80,137,0.2)";
    }
    return $('html').addClass(colours[whichCol]);
  };

  getQuote = function() {
    var whichQuote;

    $('#leftQuote').addClass('faded');
    $('#rightQuote').addClass('faded');
    whichQuote = Math.ceil(Math.random() * leftQuote.length) - 1;
    if (whichQuote === lastQuote) {
      return getQuote();
    } else {
      return setTimeout(function() {
        document.getElementById('leftQuote').innerHTML = leftQuote[whichQuote];
        document.getElementById('rightQuote').innerHTML = rightQuote[whichQuote];
        $('#leftQuote').removeClass('faded');
        $('#rightQuote').removeClass('faded');
        return lastQuote = whichQuote;
      }, 1000);
    }
  };

  getBuzzword = function() {
    var whichBuzz;

    $('#buzzwordPara').addClass('faded');
    whichBuzz = Math.ceil(Math.random() * buzzwords.length) - 1;
    if (whichBuzz === lastBuzz) {
      return getBuzzword();
    } else {
      return setTimeout(function() {
        document.getElementById('buzzwordHere').innerHTML = buzzwords[whichBuzz];
        $('#buzzwordPara').removeClass('faded');
        return lastBuzz = whichBuzz;
      }, 500);
    }
  };

  $("#contactMobileButton").click(function() {
    return $('html, body').animate({
      scrollTop: $("#contactMobile").offset().top
    }, 500);
  });

  $('#buzzwords').click(function() {
    return getBuzzword();
  });

  showSpinQuestion = setTimeout(function() {
    return $('#spinQuestion').removeClass('hidden');
  }, 800);

  $(document).ready(function() {
    var query;

    query = window.location.search.substring(1);
    if (query === 'selectedCases') {
      $('html').addClass('selectedCasesOnly');
    }
    if (Modernizr.touch) {
      $('html').addClass('touch');
    }
    return randomColour();
  });

  $(window).load(function() {
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
  });

  if (document.getElementById('coverPic')) {
    src = document.getElementById('coverPic').className;
    coverImage = $('<img src="images/' + src + '.jpg">');
    if (src !== "homeCover") {
      coverImage.bind('load', function() {
        removeLoader();
        return $('#coverPic').css('background-image', 'url(images/' + src + '.jpg)');
      });
      if (coverImage[0].width) {
        coverImage.trigger('load');
      }
    } else if (src === 'homeCover') {
      $(window).load(function() {
        return removeLoader();
      });
    }
  }

}).call(this);
