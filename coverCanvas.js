// Generated by CoffeeScript 1.6.2
(function() {
  var artworkShape, artworkShapes, ctx, cv, generateShapes, h, init, maxSpeed, render, setCanvasColour, throttle, w;

  cv = document.getElementById('artwork');

  cv.width = window.innerWidth;

  cv.height = window.innerHeight;

  ctx = cv.getContext('2d');

  w = cv.width;

  h = cv.height;

  artworkShapes = [];

  throttle = 100;

  maxSpeed = 0.66;

  artworkShape = (function() {
    function artworkShape(ctx, fixedOne, fixedTwo, moveOne, moveTwo, anchor, direction, speedOne, speedTwo) {
      this._ctx = ctx;
      this._fixedOne = fixedOne;
      this._fixedTwo = fixedTwo;
      this._moveOne = moveOne;
      this._moveTwo = moveTwo;
      this._direction = direction;
      this._anchor = anchor;
      this._speedOne = speedOne;
      this._speedTwo = speedTwo;
    }

    artworkShape.prototype.draw = function() {
      this._ctx.beginPath();
      this._ctx.moveTo(this._fixedOne.x, this._fixedOne.y);
      this._ctx.lineTo(this._fixedTwo.x, this._fixedTwo.y);
      this._ctx.lineTo(this._moveOne.x, this._moveOne.y);
      this._ctx.lineTo(this._moveTwo.x, this._moveTwo.y);
      this._ctx.closePath();
      if (this._anchor === "horizontal") {
        this._moveOne.x -= this._speedOne;
        this._moveTwo.x += this._speedTwo;
        if (this._moveOne.x < 0 || this._moveOne.x > w) {
          this._speedOne *= -1;
        }
        if (this._moveTwo.x < 0 || this._moveTwo.x > w) {
          this._speedTwo *= -1;
        }
      } else if (this._anchor === "vertical") {
        this._moveOne.y -= this._speedOne;
        this._moveTwo.y += this._speedTwo;
        if (this._moveOne.y < 0 || this._moveOne.y > h) {
          this._speedOne *= -1;
        }
        if (this._moveTwo.y < 0 || this._moveTwo.y > h) {
          this._speedTwo *= -1;
        }
      }
      if (Math.random() > 0.995) {
        console.log('swap');
        this._speedOne *= -1;
        this._speedTwo *= -1;
      }
      return this._ctx.fill();
    };

    return artworkShape;

  })();

  init = function() {
    ctx.fillStyle = generationColour;
    console.log(ctx.fillStyle);
    generateShapes();
    return render();
  };

  setCanvasColour = function(col) {
    return console.log(col);
  };

  generateShapes = function() {
    artworkShapes = [];
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: h
    }, {
      x: Math.random() * w,
      y: h
    }, {
      x: Math.random() * w,
      y: 0
    }, "horizontal", true, Math.random() * maxSpeed, Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: w,
      y: 0
    }, {
      x: w,
      y: h
    }, {
      x: Math.random() * w,
      y: h
    }, {
      x: Math.random() * w,
      y: 0
    }, "horizontal", true, -Math.random() * maxSpeed, -Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: h
    }, {
      x: w,
      y: h
    }, {
      x: w,
      y: h / 2 + Math.random() * w / 2
    }, {
      x: 0,
      y: Math.random() * h / 2
    }, "vertical", true, Math.random() * maxSpeed, Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: 0
    }, {
      x: w,
      y: 0
    }, {
      x: w,
      y: Math.random() * h / 2
    }, {
      x: 0,
      y: h / 2 + Math.random() * h / 2
    }, "vertical", true, -Math.random() * maxSpeed, -Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: h
    }, {
      x: Math.random() * w,
      y: h
    }, {
      x: Math.random() * w,
      y: 0
    }, "horizontal", true, Math.random() * maxSpeed, Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: w,
      y: 0
    }, {
      x: w,
      y: h
    }, {
      x: Math.random() * w,
      y: h
    }, {
      x: Math.random() * w,
      y: 0
    }, "horizontal", true, -Math.random() * maxSpeed, -Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: h
    }, {
      x: w,
      y: h
    }, {
      x: w,
      y: h / 2 + Math.random() * w / 2
    }, {
      x: 0,
      y: Math.random() * h / 2
    }, "vertical", true, Math.random() * maxSpeed, Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: 0
    }, {
      x: w,
      y: 0
    }, {
      x: w,
      y: Math.random() * h / 2
    }, {
      x: 0,
      y: h / 2 + Math.random() * h / 2
    }, "vertical", true, -Math.random() * maxSpeed, -Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: h
    }, {
      x: Math.random() * w,
      y: h
    }, {
      x: Math.random() * w,
      y: 0
    }, "horizontal", true, Math.random() * maxSpeed, Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: w,
      y: 0
    }, {
      x: w,
      y: h
    }, {
      x: Math.random() * w,
      y: h
    }, {
      x: Math.random() * w,
      y: 0
    }, "horizontal", true, -Math.random() * maxSpeed, -Math.random() * maxSpeed));
    artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: h
    }, {
      x: w,
      y: h
    }, {
      x: w,
      y: h / 2 + Math.random() * w / 2
    }, {
      x: 0,
      y: Math.random() * h / 2
    }, "vertical", true, Math.random() * maxSpeed, Math.random() * maxSpeed));
    return artworkShapes.push(new artworkShape(ctx, {
      x: 0,
      y: 0
    }, {
      x: w,
      y: 0
    }, {
      x: w,
      y: Math.random() * h / 2
    }, {
      x: 0,
      y: h / 2 + Math.random() * h / 2
    }, "vertical", true, -Math.random() * maxSpeed, -Math.random() * maxSpeed));
  };

  render = function() {
    var shape, _i, _len;

    ctx.clearRect(0, 0, w, h);
    for (_i = 0, _len = artworkShapes.length; _i < _len; _i++) {
      shape = artworkShapes[_i];
      shape.draw();
    }
    return setTimeout(function() {
      return window.webkitRequestAnimationFrame(render);
    }, throttle);
  };

  window.onresize = function() {
    return generateShapes();
  };

  window.onload = function() {
    return init();
  };

}).call(this);
