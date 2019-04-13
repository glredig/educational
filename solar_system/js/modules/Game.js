import Sun from './Sun';
import Planet from './Planet';

const PLANETS = [
  {
    name: 'Mercury',
    radius: 50,
    speed: 1,
    color: '#ffaaaa',
    rads: 0,
    info: 'Some cool stuff here',
    size: 4,
    period: 88.0,
    diameter: 3031.9
  },
  {
    name: 'Venus',
    radius: 70,
    speed: 1,
    color: '#ffffaa',
    rads: 0,
    info: 'Some cool stuff here',
    size: 3,
    period: 224.7,
    diameter: 7520.8
  },
  {
    name: 'Earth',
    radius: 90,
    speed: 1,
    color: '#aaaaff',
    rads: 0,
    info: 'Some cool stuff here',
    size: 5,
    period: 365.2,
    diameter: 7917.5
  },
  {
    name: 'Mars',
    radius: 110,
    speed: 1,
    color: '#ff9999',
    rads: 0,
    info: 'Some cool stuff here',
    size: 4,
    period: 687.0,
    diameter: 4212.3
  },
  {
    name: 'Jupiter',
    radius: 130,
    speed: 1,
    color: '#ff99ff',
    rads: 0,
    info: 'Some cool stuff here',
    size: 6,
    period: 4331.0,
    diameter: 86881
  },
  {
    name: 'Saturn',
    radius: 150,
    speed: 1,
    color: '#ffff99',
    rads: 0,
    info: 'Some cool stuff here',
    size: 6,
    period: 10747.0,
    diameter: 72367
  },
  {
    name: 'Uranus',
    radius: 170,
    speed: 1,
    color: '#ff99ff',
    rads: 0,
    info: 'Some cool stuff here',
    size: 5,
    period: 30589.0,
    diameter: 31518
  },
  {
    name: 'Neptune',
    radius: 190,
    speed: 1,
    color: '#9999ff',
    rads: 0,
    info: 'Some cool stuff here',
    size: 5,
    period: 59800.0,
    diameter: 30599
  }
]

export default class Game {
    constructor(config) {
      this.container = config.container || document.querySelector('body');
      this.framecount = 0;
      this.day = 0;
    }

    init() {
      this.board = document.createElement('canvas');
      this.height = 700;
      this.width = 700;
      this.board.height = this.height;
      this.board.width = this.width;
      this.center = {
        x: this.width / 2,
        y: this.height / 2
      };
      this.ctx = this.board.getContext('2d');
      this.container.appendChild(this.board);
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, 700, 700);
      this.planets = [];
      this.populatePlanets();
      this.sun = new Sun({ game: this });
      this.sun.init();
      this.step();
    }

    step() {
      debugger;
      this.framecount += 1;
      this.day += 1;
      this.update(this.day);
      this.draw();
      
      requestAnimationFrame(() => this.step());
    }

    update() {
      const day = this.day;
      this.planets.forEach((planet) => {
        planet.update(day);
      });
    }

    draw() {
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, 700, 700);
      this.sun.draw();

      this.planets.forEach((planet) => {
        planet.draw();
      });
    }

    populatePlanets() {
      PLANETS.forEach((planet, i) => {
        let radius = 100 + 30 * i;
        let newPlanet = new Planet({ 
          ...planet, 
          radius,
          game: this 
        });

        newPlanet.init();
        this.planets.push(newPlanet);
      });
    }
}