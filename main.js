function preload() {
    // no assets to load
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
    console.log("AI is setup")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("nosex = " + results[0].pose.nose.x)
        console.log("nosey = " + results[0].pose.nose.y)
        image(video, 0, 0, 400, 300)
        fill(120, 50, 0)
        stroke(120, 50, 0)
        rect(nosex-25, nosey, 50, 5)
    }
}
function draw() {
    // I couldn't do anything in draw, so I had to do it all in gotPoses    
}
function yeetintofolder() {
    save("filter.png")
}