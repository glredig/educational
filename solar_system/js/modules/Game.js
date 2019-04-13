import Sun from './Sun';
import Planet from './Planet';
import DayCounter from './DayCounter';
import InfoBox from './InfoBox';
import { PLANETS } from './constants';
import { pythagorean } from './utils';

export default class Game {
    constructor(config) {
      this.container = config.container || document.querySelector('body');
      this.framecount = 0;
      this.day = 0;
      this.planets = [];
      this.cursorDistanceFromCenter = 0;
    }

    init() {
      this.height = 700;
      this.width = 700;
      this.center = {
        x: this.width / 2,
        y: this.height / 2
      };
      this._buildElements();
      this.ctx = this.board.getContext('2d');
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, 700, 700);
      this.populatePlanets();
      this.sun = new Sun({ game: this });
      this.sun.init();
      this.dayCounter = new DayCounter({
        container: this.container,
        parent: this
      });
      this.dayCounter.init();
      this.infoBox = new InfoBox({
        container: this.container,
        parent: this
      });
      this.infoBox.init();
      this._setupListeners();
      this.step();
    }

    setActivePlanet(planet) {
      this.infoBox.updatePlanet({
        name: planet.name,
        info: planet.info
      });
    }

    _buildElements() {
      this.board = document.createElement('canvas');
      this.board.height = this.height;
      this.board.width = this.width;
      this.container.appendChild(this.board);
    }

    _setupListeners() {
      this.board.addEventListener('mousemove', (e) => {
        const bounds = this.board.getBoundingClientRect();
        const posX = e.clientX - bounds.left;
        const posY = e.clientY - bounds.top;


        this.cursorDistanceFromCenter = pythagorean(this.center.x - posX, this.center.y - posY);
      });
    }

    step() {
      debugger;
      this.framecount += 1;
      this.day += 1;
      this.dayCounter.incrementDay();
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
        planet.drawOrbitPath();
      });

      this.planets.forEach((planet) => {
        planet.drawPlanet();
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