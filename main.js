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


function gotPoses(){
    if (results.length > 0)
    {
        console.log(results);

    }
}


function draw(){
    background("blue");

}