export default class DayCounter {
  constructor(config) {
    this.day = 0;
    this.parentContainer = config.container;
    this.parent = config.parent;
  }

  init() {
    this._build();
  }

  incrementDay() {
    this.day += 1;
    this.numericDisplay.innerText = this.day;
  }

  _build() {
    this.counterElement = document.createElement('div');
    this.counterElement.style.position = 'absolute';
    this.counterElement.style.top = '1em';
    this.counterElement.style.right = '1em';
    this.parentContainer.appendChild(this.counterElement);

    this.numericDisplay = document.createElement('div');
    this.numericDisplay.style.fontSize = '3em';
    this.numericDisplay.style.color = '#eeeeee';
    this.numericDisplay.style.fontFamily = 'arial';
    
    this.counterElement.appendChild(this.numericDisplay);
    this.numericDisplay.innerText = this.day;

    this.labelElement = document.createElement('div');
    this.labelElement.style.fontSize = '1.5em';
    this.labelElement.style.color = '#e0e0e0';
    this.labelElement.style.fontFamily = 'arial';

    this.labelElement.innerText = 'days';
    this.counterElement.appendChild(this.labelElement);
  }
}