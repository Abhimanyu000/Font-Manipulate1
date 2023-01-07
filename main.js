LW=0;
RW=0;
DIFF=0;

function draw(){
    background("#fe8960");
    textSize(DIFF);
    fill("#020f33");
    text("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10, 100);
}

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 550);

    canvas=createCanvas(500, 550);
    canvas.position(1000, 100);

    PN=ml5.poseNet(video ,modelLoaded);
    PN.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("MODEL LOADED");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        LW=results[0].pose.leftWrist.x;
        RW=results[0].pose.rightWrist.x;
        DIFF=floor(LW-RW);
    }
}