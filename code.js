var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(200, 350, 55, 10);
var computer = createSprite(200, 45, 55, 10);
var ball = createSprite(200, 50, 10, 10);
var goal1 = createSprite(200, 373, 220, 15);
var wall1 = createSprite(390, 200, 10, 400);
var wall2 = createSprite(10, 200, 10, 400);
var wall3 = createSprite(200, 390, 400, 10)
var wall4 = createSprite(200, 10, 400, 10);
player.shapeColor = "black";
computer.shapeColor = "black";
ball.shapeColor = "white";
goal1.shapeColor = "yellow";
wall1.shapeColor = "white";
wall2.shapeColor = "white";
wall3.shapeColor = "white";
wall4.shapeColor = "white";
var score=0
var score1=5
var gamestate="start";
function draw() {
  background("green");
  stroke("white");
  fill("white");
  textSize(20);
  text("score="+score, 30, 40);
  fill("white");
  textSize(20);
  text("lives="+score1, 300, 40);
  drawSprites();
  createEdgeSprites();
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(wall4);
  ball.bounceOff(computer);
  computer.x=ball.x
  for (var i = 0; i < 400; i=i+20) {
    line(i, 200, i+10, 200);
     }
  if (gamestate=="start") {
    fill("white");
    stroke("white");
    textSize(20);
    text("Press ENTER to start ", 100, 200);
    if (keyDown("enter")) {
      ball.setVelocity(6, -7);
      gamestate="play"
    }
  }
  if (gamestate=="play") {
    if (keyDown("d")) {
    player.x=player.x+15
}
    if (keyDown("a")) {
    player.x=player.x-15
    }
  }
  if (player.isTouching(wall1)) {
    player.bounceOff(wall1);
  }
  if (player.isTouching(wall2)) {
    player.bounceOff(wall2);
  }
  if (computer.isTouching(wall1)) {
    computer.bounceOff(wall1);
  }
  if (computer.isTouching(wall2)) {
    computer.bounceOff(wall2);
  }
  if (ball.isTouching(goal1)) {
     ball.bounceOff(goal1);
     score1=score1-1
   }
  if (ball.isTouching(player)) {
    ball.bounceOff(player);
    score=score+1
  }
  if (score1<1) {
    ball.setVelocity(0, 0);
    ball.x = 200;
    ball.y = 50;
    player.setVelocity(0, 0);
    player.x = 200;
    player.y = 350;
    fill("red");
    stroke("red");
    textSize(30);
    text("Game Over !", 100, 200);
    fill("white");
    stroke("white");
    textSize(30);
    text("Your Score: "+score, 100, 235);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
