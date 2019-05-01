function setup() {
createCanvas(500, 500);
strokeWeight(1)
}
function draw() {
background(205, 23, 209);
fill(232,163,138)
ellipse(250,255,140,180);
fill (8,8,8)


//glasses
fill(240, 202, 189);
strokeJoin(ROUND); // Round the stroke corners
rect(220, 220, 20, 20);//left eye
strokeJoin(BEVEL); // Bevel the stroke corners
rect(260, 220, 20, 20);//right eye

strokeCap(SQUARE); // Square the line endings
line(220, 230, 200,230);//left glss leg
strokeCap(ROUND); // Round the line endings
line(300, 230, 280, 230);//right glss leg
line(259, 230, 240, 230);//middle glss 

//eyes
fill(252,252,252);
ellipse (270,230,10,4)
ellipse (230,230,10,4)
fill(116, 43, 19);;
ellipse(270,229,6,2)
ellipse(230,229,6,2)

//hair
fill(82,26,26);
rect(180,149,130,60);//bangs
fill(82,26,26);
rect(145,149,50,300);
fill(82,26,26);
rect(300,149,50,300);

//neck
 fill(232,163,138);
  rect(245,345,10,20);

//shirt
fill(52, 173, 101);
rect(180,355,140,220);

//mouth
fill(250, 242, 245);
rect(240,310,20,10);
//nose
fill(247, 221, 155, )
  ellipse(250,266,2,0)
  ellipse(255,266,2,0)

}
