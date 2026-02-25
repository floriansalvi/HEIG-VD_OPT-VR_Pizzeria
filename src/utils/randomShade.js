function randomShade(baseColor, hueRange = 5, lightRange = 0.05) {
  const color = new THREE.Color(baseColor);

  const hsl = {};
  color.getHSL(hsl);

  hsl.h += (Math.random() - 0.5) * (hueRange / 360);
  hsl.l += (Math.random() - 0.5) * lightRange;

  hsl.h = (hsl.h + 1) % 1;
  hsl.l = Math.min(1, Math.max(0, hsl.l));

  color.setHSL(hsl.h, hsl.s, hsl.l);

  return `#${color.getHexString()}`;
}

export default randomShade;