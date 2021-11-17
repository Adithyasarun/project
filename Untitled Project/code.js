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

var boundry1 = createSprite(200,100,400,6)
var boundry2 = createSprite(200,250,400,6)

var sam = createSprite(25,175,15,15)
sam.shapeColor="green"

var car1 = createSprite(100,115,10,10)
car1.shapeColor="red"
var car2 = createSprite(175,240,10,10)
car2.shapeColor="red"
var car3 = createSprite(225,115,10,10)
car3.shapeColor="red"
var car4 = createSprite(300,240,10,10)
car4.shapeColor="red"

var score=0


car1.velocityY=9;
car2.velocityY=-9;
car3.velocityY=9;
car4.velocityY=-9



function draw() {
  background("white")
  
  textSize(20)
  text("lives : "+score,190,50)
  
  
  
  
  noStroke()
  fill("#ADD8E6")
  rect(0,100,50,150)
  
  
  fill("yellow")
  rect(350,100,50,150)
  
 
  car1.bounceOff(boundry2)
  car1.bounceOff(boundry1)
  car2.bounceOff(boundry2)
  car2.bounceOff(boundry1)
  car3.bounceOff(boundry2)
  car3.bounceOff(boundry1)
  car4.bounceOff(boundry2)
  car4.bounceOff(boundry1)
  
  
  
  if(keyDown("left")){
    sam.x-=2
  }
  if(keyDown("RIGHT_ARROW")){
    sam.x+=2
  }
  
  
  if(sam.isTouching(car1)||
  sam.isTouching(car2)||
  sam.isTouching(car3)||
  sam.isTouching(car4)){
    
    sam.x=25
    sam.y=175
    
    score++
  }
  
createEdgeSprites()
  
  sam.bounceOff(edges)
  
  if (sam.isTouching(rightEdge)){
    
    textSize(25)
    text("You Win",150,200)
    
  }
  
  
  
 drawSprites() 
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
