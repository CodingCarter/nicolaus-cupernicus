class Planet {
  constructor(
    image,
    xOffset,
    size,
    earthDaysInYear,
    name,
    options = {},
    hasLabel = true
  ) {
    this.pos = createVector(xOffset, 74);
    this.size = getScaled(size);
    this.earthDaysInYear = earthDaysInYear;
    this.image = image;
    this.name = hasLabel ? name : "";
    this.options = options;
  }

  update() {
    push();

    if (this.pos.y >= 360 && this.name == "earth") {
      this.pos.y = 0;
      globalSettings.earthYearsPast++;
    }
    this.pos.y +=
      (365 / this.earthDaysInYear / 360) * globalSettings.speedMultiplier;

    rotate(this.pos.y);
    translate(
      this.options.isSun ? 0 : getScaled(sunData.radius) / 2 + this.pos.x,
      0
    );
    fill(`rgba(255, 255, 255, .9)`);
    textSize(this.size * 0.02 + 25);
    textAlign(LEFT, CENTER);
    text(this.name, this.size * 0.7 + 10, 0);
    image(this.image, 0, 0, this.size, this.size);
    pop();
  }
}
