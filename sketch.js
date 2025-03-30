function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  textSize(30);
  text("X:"+mouseX+"Y:"+mouseY,55,55);
  strokeWeight(3)
  ellipse(width/2,height/2,300)//臉


  push()//左右眼
  fill(142,229,238)
  ellipse(width/2+55,height/2-50,50,65)
  ellipse(width/2-55,height/2-50,50,65)
  pop()


  push()//下瞳孔
  noStroke()
  fill(187,255,255)
  ellipse(width/2+55,height/2-30,30,19)
  ellipse(width/2-55,height/2-30,30,19)
  pop()


  push()//瞳孔
  strokeWeight(0.2)
  fill(0,205,205)
  ellipse(width/2+55+(mouseX/500),height/2-50,25,30)
  ellipse(width/2-55+(mouseX/500),height/2-50,25,30)
  pop()


  push()//眼白
  noStroke()
  ellipse(width/2+63+(mouseX/500),height/2-65,16,8)
  ellipse(width/2-47+(mouseX/500),height/2-65,16,8)
  pop()

  //鼻子
  line(width/2,height/2-20,width/2-25,height/2+15)
  line(width/2-25,height/2+15,width/2,height/2+25)

  
  push()
  //noFill()
  //strokeWeight(0.6)
  //stroke(255,0,0)
  arc(width/2+60,height/2-85,40,25,195,340)
  arc(width/2-60,height/2-85,40,25,195,0)
  pop()


  push()//嘴巴
  if(mouseIsPressed){
  stroke(0.3)
  fill(235,0,0)
  arc(width/2,height/2+85,100,50,0,180)
  }
  else{
  arc(width/2,height/2+85,115,30,0,180)
  }
  pop()
}
