import Game from './modules/Game';

const container = document.getElementById('container');
const game = new Game({ container });
game.init();