let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  // angleMode(DEGREES);
  frameRate(30);
  num = 2000;
  for(let i = 0; i < num; i++){
      let pos1 = random(0, height*2); 
      let pos2 = random(0, height *2); 
      let pos3 = random(0, height *2); 
      let pos4 = random(0, height *2); 
      let end1 = random(0, width)* 0.01;
      let end2 = random(0, width)* 0.01;
      let end3 = random(0, width)* 0.01;
      let end4 = random(0, width)* 0.01;

      arr1[i] = [pos1, end1];
      arr2[i] = [pos2, end2];
      arr3[i] = [pos3, end3];
      arr4[i] = [pos3, end3];

    
  }
}

function draw() {
  var d = new Date(); 
  var milli = d.getMilliseconds();
  var p_milli = milli/1000 + .001;
  var s = d.getSeconds() + p_milli;
  var p_s = s/60 + .001;
  var m = d.getMinutes() + p_s;
  var p_m = m/60 + .001;
  var h = d.getHours() + p_m;
  var p_h = h%12/12 + .001;
  // print(p_s);
  let hr = hour();
  let mn = minute();
  let sc = second();
  let disc = dist(width/2, height/2, mouseX, mouseY);
  // let pos = random(0,350); 
  // let end = random(0, 10)* 0.01;
  let cent = map(disc, 0, dist(width/2, height/2, width, height), 0 , 1);
  let centi = map(cent, 0, 1, 1, 0);
  background(0);
  translate(width/2, height/2);
  let time = hr + ":" + mn + ":" + sc;
  push();
  if(cent > 1){
     centi = 0;
  }
  strokeWeight(1 * centi);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(time, 0, 0);
  pop();
  rotate(-PI/2);

  strokeWeight(5);
  
  // stroke(0, 185, 255);
  // arc(0, 0, 320, 320, p_milli*2*PI - 0.1, p_milli*2*PI);

  
  stroke(255, 100, 150);
  noFill();
  // let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, p_s*2*PI - 0.1, p_s*2*PI);
  // arc(0, 0, 300, 300, p_s*2*PI - 0.1, p_s*2*PI);


  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, p_m*2*PI - 0.1, p_m*2*PI);


  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, p_h*2*PI - 0.1, p_h*2*PI);
  
  let temp = cent;
  for(let i = 0; i < num; i++){
      push();
      strokeWeight(5 * cent);
      stroke(255, 100, 150);
      arc(0, 0, arr1[i][0], arr1[i][0], p_s*2*PI - 0.1 + arr1[i][1], p_s*2*PI +arr1[i][1]);
      stroke(150, 100, 255);
      arc(0, 0, arr2[i][0], arr2[i][0], p_m*2*PI - 0.1 + arr2[i][1], p_m*2*PI +arr2[i][1]);
      stroke(150, 255, 100);
      arc(0, 0, arr3[i][0], arr3[i][0], p_h*2*PI - 0.1 + arr3[i][1], p_h*2*PI +arr3[i][1]);
      // stroke(0, 185, 255);
      // arc(0, 0, arr4[i][0], arr4[i][0], p_milli*2*PI - 0.1 + arr4[i][1], p_milli*2*PI + arr4[i][1]);
      pop();
  }
//   push();
//   rotate(secondAngle);
//   stroke(255, 100, 150);
//   line(0, 0, 100, 0);
//   pop();

//   push();
//   rotate(minuteAngle);
//   stroke(150, 100, 255);
//   line(0, 0, 75, 0);
//   pop();

//   push();
//   rotate(hourAngle);
//   stroke(150, 255, 100);
//   line(0, 0, 50, 0);
//   pop();

//   stroke(255);
//   point(0, 0);

  //  fill(255);
  //  noStroke();
  //  text(hr + ':' + mn + ':' + sc, 10, 200);


}