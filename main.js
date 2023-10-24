difference=0;
rwx=0;
lwx=0;

function setup(){
    canvas  =createCanvas(550, 450);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotPoses);

}



function modelLoaded(){
    console.log("poseNET is LOADED");

}


function gotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        difference=floor(lwx-rwx);
        console.log(difference);
    }
}


function draw(){
    background("blue");

    fill("red");
    text("navdeep singh", 50, 400);
    textSize(difference);

}
