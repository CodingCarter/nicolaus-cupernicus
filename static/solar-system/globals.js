const globalSettings = {
  earthYearsPast: 0,
  scale: 0.001,
  speedMultiplier: 1000,
  modelOffset: -25,
};

function getScaled(r) {
  return r * globalSettings.scale;
}
