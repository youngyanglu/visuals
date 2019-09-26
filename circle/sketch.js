var points = [];
var velocities = [];
var circRad;
var colors = [];
var count = 0;

function insideOfCircle(x, y, rad = circRad) {
    return sqrt(x**2  + y**2) < rad
}

function newAngle(x, y) {
    switch(true) {
        case x > 0 && y > 0:
            return random(190, 260);
        case x < 0 && y > 0:
            return random(280, 350);
        case x < 0 && y < 0:
            return random(10, 80);
        case x > 0 && y < 0:
            return random(100, 170);
    }
}

function setup() {
    let renderer = createCanvas(windowWidth, windowHeight);
    renderer.position(0, 0);
    circRad = min(width, height) * .6 * 0.5;
    strokeWeight(0.3);
    for (var i = 0; i < 15; i++) {
        let x = random(-circRad / sqrt(2), circRad / sqrt(2))
        let y = random(-circRad / sqrt(2), circRad / sqrt(2))
        points.push(createVector(x, y));
        x = random(-2, 2)
        y = random(-2, 2)
        velocities.push(createVector(x, y));
        colors.push(random());
    }
    angleMode(DEGREES)

}

function draw() {
    if (count % 2) {
        blendMode(LIGHTEST);
    } else {
        blendMode(DARKEST);
    }
    count++
    translate(width/2, height/2);
    points.forEach((point, index) => {
        stroke(lerpColor(color('pink'), color("salmon"), colors[index]));
        points.forEach((point2, index2) => {
            if (index2 % 5) {
                line(point.x, point.y, point2.x, point2.y)
            }
        })
        if (!insideOfCircle(point.x, point.y, circRad - 3)) {
            let magnitude = sqrt(velocities[index].x **2 + velocities[index].y ** 2);
            let angle = newAngle(point.x, point.y);
            velocities[index].x = cos(angle) * magnitude;
            velocities[index].y = sin(angle) * magnitude; 
        }
        point.x += velocities[index].x
        point.y += velocities[index].y
    })
}
