export default class Sun {
  constructor(config) {
    this.game = config.game;
    this.radius = config.radius || 20;
  }

  init() {
    this.x = this.game.board.width / 2;
    this.y = this.game.board.height / 2;
    this.ctx = this.game.ctx;
    this.draw();
  }

  update() {

  }

  draw() {
    this.ctx.fillStyle = 'yellow';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}