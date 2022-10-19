function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);

    fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(35, 35, 70);
  circle(605, 35, 70);
  circle(35, 445, 70);
  circle(605, 445, 70);
}

function take_snapshot(){
save("foto_filtro.png");
}