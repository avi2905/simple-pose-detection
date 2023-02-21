let capture;
let posenet;
let pose1,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);



}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        pose1 = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(57,255,20);

    if(pose1){
        for(let i=0; i<pose1.keypoints.length; i++){
            ellipse(pose1.keypoints[i].position.x, pose1.keypoints[i].position.y,10);
        }
        stroke(255,255,255);
        strokeWeight(2);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }


        
    }

    

}
