import { radsToCartesian } from './utils.js';
import { PLANET_SIZE_MULTIPLIER } from './constants.js';

export default class Planet {
  constructor(config) {
    console.log('m', PLANET_SIZE_MULTIPLIER);
    this.name = config.name || 'Planet X';
    this.color = config.color || '#9999fa';
    this.speed = config.speed || 1;
    this.radius = config.radius || 200;
    this.info = config.info;
    this.game = config.game;
    this.rads = 0;
    this.diameter = 10;
    this.period = config.period;
  }

  init()  {
    this.ctx = this.game.ctx;

    // Make dynamic
    this.x = this.game.width / 2 + this.radius;
    this.y = this.game.height / 2;
    this.draw();
  }

  update(day) {
    let rads = parseFloat(day) * Math.PI / parseFloat(this.period);
    let { x, y } = radsToCartesian(rads, this.radius, this.game.center);
    this.x = x;
    this.y = y;
  }

  draw() {
    this.drawOrbitPath();
    this.drawPlanet();
  }

  drawOrbitPath() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'none';
    this.ctx.strokeStyle = '#eeeeee';
    this.ctx.arc(this.game.center.x, this.game.center.y, this.radius, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  drawPlanet() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.diameter, 0, Math.PI * 2);
    this.ctx.fill();
  }
}