var r0 = 150;
var j = 0;

function setup() {
    let renderer = createCanvas(windowWidth, windowHeight);
    renderer.position(0, 0);
    background(234, 198, 161);
    stroke(95, 53, 10);
    strokeWeight(4); 
    noFill()
    noiseSeed();

}

function draw() {
    translate(width/2, height/2);

    beginShape()
    for (var i = 0; i < TWO_PI; i += radians(1)) {
        let scaledX = map(cos(i), 0, TWO_PI, 2, 6);
        let scaledY = map(sin(i), 0, TWO_PI, 2, 6);
        var n = noise(scaledX, scaledY);
        let scaledNoise = map(n, 0, 1, -30, 30);
        r = r0 + scaledNoise;
        console.log(scaledNoise)
        vertex(r * cos(i), r * sin(i))
    }
    endShape(CLOSE)

    r0--;
    j += 0.1;
    strokeWeight(1); 
    stroke(97, 55, 12, 255*map(noise(j), 0, 1, 0.5, 1));

    if (r0 < 0) noLoop()
}
