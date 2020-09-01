let sun;
let planets;

function preload() {
  planetData = planetData.map((planet) => {
    planet.image = loadImage(`./img/${planet.name}.png`);
    return planet;
  });
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
  angleMode(DEGREES);
  noStroke();
  imageMode(CENTER);
  textFont("monospace");

  sun = new Planet(
    planetData[0].image,
    sunData.orbitalPeriod,
    sunData.radius,
    sunData.earthDaysInYear,
    sunData.name,
    {
      isSun: true,
    },
    (hasLabel = false)
  );

  planets = planetData.map(
    ({ image, distFromSun, radius, orbitalPeriod, name }) =>
      new Planet(image, distFromSun, radius, orbitalPeriod, name)
  );
}

function draw() {
  clear();

  push();
  translate(width / 2 + globalSettings.modelOffset, 500);

  sun.update();

  for (const planet of planets) {
    planet.update();
  }

  pop();

  // fill(255, 255, 255);
  // textSize(40);
  // textAlign(RIGHT, BOTTOM);

  // text(`Earth Years Past: ${globalSettings.earthYearsPast}`, width - 40, 40);
}
