export function radsToCartesian(rads, radius, center) {
  let y = radius * Math.sin(rads);
  let x = radius * Math.cos(rads);

  return {
    x: x + center.x,
    y: y + center.y
  }
}

export function pythagorean(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}