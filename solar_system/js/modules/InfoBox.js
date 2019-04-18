export default class InfoBox {
  constructor(config) {
    this.container = config.container;
    this.parent = config.parent;
    this.planet = null;
  }

  init() {
    this._build();
  }

  updatePlanet(planet) {
    if (!planet) {
      this.infoContainer.style.display = 'none';
      return false;
    }

    this.planetName.innerText = planet.name;
    this.orbitInfo.innerHTML = `<strong>Orbit:</strong> ${planet.info.orbit} days`;
    this.dayInfo.innerHTML = `<strong>Day:</strong> ${planet.info.day} days`;
    this.diameterInfo.innerHTML = `<strong>Diameter:</strong> ${planet.info.diameter} miles`;
    this.infoContainer.style.display = 'block';
  }

  _build() {
    this.infoContainer = document.createElement('div');
    this.infoContainer.style.width = '300px';
    this.infoContainer.style.height = '500px';
    this.infoContainer.style.border = '1px solid #666666';
    this.infoContainer.style.color = '#aaaaaa';
    this.infoContainer.style.padding = '1em';
    this.infoContainer.style.fontFamily = 'arial';
    this.infoContainer.style.borderRadius = '2px';
    this.infoContainer.style.position = 'absolute';
    this.infoContainer.style.right = '1em';
    this.infoContainer.style.bottom = '1em';

    this.planetName = document.createElement('h2');
    this.planetName.style.textAlign = 'center';
    this.infoContainer.appendChild(this.planetName);

    this.planetInfo = document.createElement('article');
    this.infoContainer.appendChild(this.planetInfo);

    this.orbitInfo = document.createElement('span');
    this.infoContainer.appendChild(this.orbitInfo);
    this.infoContainer.appendChild(document.createElement('br'));

    this.dayInfo = document.createElement('span');
    this.infoContainer.appendChild(this.dayInfo);
    this.infoContainer.appendChild(document.createElement('br'));

    this.diameterInfo = document.createElement('span');
    this.infoContainer.appendChild(this.diameterInfo);
    this.infoContainer.appendChild(document.createElement('br'));

    this.infoContainer.style.display = 'none';
    this.container.appendChild(this.infoContainer);
  }
}