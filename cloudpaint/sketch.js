var kNoiseDetail = 0.01;
var ox = 50;
var oy = 50;

function setup() {
    let renderer = createCanvas(600, 300);
    renderer.center();
    noiseDetail(5,.5);
    colorMode(HSB, 1);
}


function draw() {
    ox += noise(millis() * 0.01) * 0.03;
    oy += noise(millis() * 0.01) * 0.01;

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            let v = noise(ox+x*kNoiseDetail,oy+y*kNoiseDetail,millis()*.0002);
            // 3 dimensional perlin noise means the randomness is strongly determined by these three dimensions, and movement along these dimensions creates gradient/smooth randomness
            // dimensions: location on canvas (with speed which moves the same cloud pattern across canvas), time (which changes the pattern over time)
            // kNoiseDetail controls density of pattern --> if kNoiseDetail varies less then it takes more pixels for the pattern to span out

            set(x,y,color(lerp(0.08, 0, y/height), 0.75-v, 0.95));  
            // ^ this allows variation in sky color from top to bottom
            // ^ this changes the color of sky from blue to white as v increases
            //^ this value controls brightness 									
        }
    }
    updatePixels();
}


