function preload() {
    // how bout no
}
function setup() {
    var canva = createCanvas(400, 300)
    canva.center()
    video = createCapture(VIDEO)
    video.size(400, 300)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded() {
    console.log("AS is ready to be an artificial stupidity")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("nosex = " + results[0].pose.nose.x)
        console.log("nosey = " + results[0].pose.nose.y)
    }
}
function draw() {
    image(video, 0, 0, 400, 300)
}
function yeetintofolder() {
    save("getareamustachefool.png")
}