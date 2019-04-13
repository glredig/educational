!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var r,n=i(1),a=(r=n)&&r.__esModule?r:{default:r};var o=document.getElementById("container");new a.default({container:o}).init()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),a=s(i(2)),o=s(i(3));function s(e){return e&&e.__esModule?e:{default:e}}var u=[{name:"Mercury",radius:50,speed:1,color:"#ffaaaa",rads:0,info:"Some cool stuff here",size:4,period:88,diameter:3031.9},{name:"Venus",radius:70,speed:1,color:"#ffffaa",rads:0,info:"Some cool stuff here",size:3,period:224.7,diameter:7520.8},{name:"Earth",radius:90,speed:1,color:"#aaaaff",rads:0,info:"Some cool stuff here",size:5,period:365.2,diameter:7917.5},{name:"Mars",radius:110,speed:1,color:"#ff9999",rads:0,info:"Some cool stuff here",size:4,period:687,diameter:4212.3},{name:"Jupiter",radius:130,speed:1,color:"#ff99ff",rads:0,info:"Some cool stuff here",size:6,period:4331,diameter:86881},{name:"Saturn",radius:150,speed:1,color:"#ffff99",rads:0,info:"Some cool stuff here",size:6,period:10747,diameter:72367},{name:"Uranus",radius:170,speed:1,color:"#ff99ff",rads:0,info:"Some cool stuff here",size:5,period:30589,diameter:31518},{name:"Neptune",radius:190,speed:1,color:"#9999ff",rads:0,info:"Some cool stuff here",size:5,period:59800,diameter:30599}],c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container||document.querySelector("body"),this.framecount=0,this.day=0}return n(e,[{key:"init",value:function(){this.board=document.createElement("canvas"),this.height=700,this.width=700,this.board.height=this.height,this.board.width=this.width,this.center={x:this.width/2,y:this.height/2},this.ctx=this.board.getContext("2d"),this.container.appendChild(this.board),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,700,700),this.planets=[],this.populatePlanets(),this.sun=new a.default({game:this}),this.sun.init(),this.step()}},{key:"step",value:function(){var e=this;this.framecount+=1,this.day+=1,this.update(this.day),this.draw(),requestAnimationFrame(function(){return e.step()})}},{key:"update",value:function(){var e=this.day;this.planets.forEach(function(t){t.update(e)})}},{key:"draw",value:function(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,700,700),this.sun.draw(),this.planets.forEach(function(e){e.draw()})}},{key:"populatePlanets",value:function(){var e=this;u.forEach(function(t,i){var n=100+30*i,a=new o.default(r({},t,{radius:n,game:e}));a.init(),e.planets.push(a)})}}]),e}();t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t.game,this.radius=t.radius||20}return r(e,[{key:"init",value:function(){this.x=this.game.board.width/2,this.y=this.game.board.height/2,this.ctx=this.game.ctx,this.draw()}},{key:"update",value:function(){}},{key:"draw",value:function(){this.ctx.fillStyle="yellow",this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()}}]),e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),n=i(4),a=i(5);var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("m",a.PLANET_SIZE_MULTIPLIER),this.name=t.name||"Planet X",this.color=t.color||"#9999fa",this.speed=t.speed||1,this.radius=t.radius||200,this.info=t.info,this.game=t.game,this.rads=0,this.diameter=10,this.period=t.period}return r(e,[{key:"init",value:function(){this.ctx=this.game.ctx,this.x=this.game.width/2+this.radius,this.y=this.game.height/2,this.draw()}},{key:"update",value:function(e){var t=parseFloat(e)*Math.PI/parseFloat(this.period),i=(0,n.radsToCartesian)(t,this.radius,this.game.center),r=i.x,a=i.y;this.x=r,this.y=a}},{key:"draw",value:function(){this.drawOrbitPath(),this.drawPlanet()}},{key:"drawOrbitPath",value:function(){this.ctx.beginPath(),this.ctx.fillStyle="none",this.ctx.strokeStyle="#eeeeee",this.ctx.arc(this.game.center.x,this.game.center.y,this.radius,0,2*Math.PI),this.ctx.stroke()}},{key:"drawPlanet",value:function(){this.ctx.beginPath(),this.ctx.fillStyle=this.color,this.ctx.arc(this.x,this.y,this.diameter,0,2*Math.PI),this.ctx.fill()}}]),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.radsToCartesian=function(e,t,i){var r=t*Math.sin(e);return{x:t*Math.cos(e)+i.x,y:r+i.y}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PLANET_SIZE_MULTIPLIER=5e-4}]);
//# sourceMappingURL=bundle.js.map