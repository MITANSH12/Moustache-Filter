noseX= 0;
noseY= 0;
function preload() {
moustache = loadImage("https://i.postimg.cc/Jzsv3Cw8/image-removebg-preview-5.png");
}
function setup () {
    canvas =  createCanvas(300 , 300);
    canvas.center();
 video =    createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw () {
image(video , 0 , 0 , 300 , 300 );
image(moustache , noseX , noseY , 40 , 40);
}
function modelLoaded () {
    console.log("poseNet is Initialized");
}
function gotPoses (results) {
    if (results.length > 0)
 {

    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);


 }
}
function save() {
    save("filter_name.png");
}
