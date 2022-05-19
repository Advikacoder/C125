noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,170);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() 
{
    console.log('PoseNet Is Initialized!');
}

function draw() 
{
    background('#00FF01');

    document.getElementById("square_side").innerHTML = "Width And Height of a Text will be = " + difference +"px";
    fill('#0000FF');
    stroke('#JD6N5M');
    text('Advika', 50, 400)
    textSize(difference);
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
}