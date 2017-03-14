Topthinking([4],{34:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e,o){i(this,t),this.$http=e,this.$rootScope=o,n(35),this.slide1=n(37),this.slide2=n(38),this.slide3=n(39),this.name=this.$rootScope.user_name,this.text=""}return t.$inject=["$http","$rootScope"],o(t,[{key:"change_name",value:function(){""!=this.name?this.$http.post("/home/edit/",{name:this.name}).then(function(t){this.text=this.name+t.data.msg,this.$rootScope.$broadcast("changeName",this.name)}.bind(this)):this.text="请输入用户名"}},{key:"del_name",value:function(){this.name="",this.$rootScope.$broadcast("changeName",this.name),this.text="删除成功"}}]),t}();e.default=angular.module("home.edit.controller",[n(40).name]).controller("HomeEditController",s),t.exports=e.default},35:function(t,e,n){var i=n(36);"string"==typeof i&&(i=[[t.id,i,""]]);n(31)(i,{});i.locals&&(t.exports=i.locals)},36:function(t,e,n){e=t.exports=n(30)(),e.push([t.id,"#home_edit p{color:blue}#home_edit small{color:tomato}#home_edit #myCarousel{width:300px}",""])},37:function(t,e,n){t.exports=n.p+"/img/1.19c1a5.jpg"},38:function(t,e,n){t.exports=n.p+"/img/2.4ba57b.jpg"},39:function(t,e,n){t.exports=n.p+"/img/3.be2e83.jpg"},40:function(t,e,n){"use strict";function i(){return{scope:{helloData:"="},restrict:"E",template:n(41),replace:!0,link:function(t,e,i){n(42)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=angular.module("hello.directive",[]).directive("hello",i),t.exports=e.default},41:function(t,e){t.exports='<div>\r\n<canvas id="canvas" width="900" height="500"></canvas>\r\n</div>'},42:function(t,e,n){"use strict";function i(){s.canvas=document.getElementById("canvas"),s.canvas.width=s.Config.width,s.canvas.height=s.Config.height,s.background=new a,r.init(canvas),r.tick(function(t,e){s.background.update(t);var n=s.sprites.length,i=0;s.sprites.forEach(function(e){e.update(t),e.finished&&i++}),n>0&&i===n&&!s.background.exploded&&s.background.nodes.length<1&&(s.background.exploded=!0,s.sprites.forEach(function(t){t.explode()}))}),r.render(function(t){s.background.render(t),t.globalAlpha=.8,s.sprites.forEach(function(e){e.render(t)})}),r.input(function(t,e){if("Up"==t){var n=e.point;o(n.x,n.y,200)}}),r.start()}function o(t,e,n){n=n||1;for(var i=0;i<n;i++){if(s.background.nodes.length<1)return;var o=new c({x:t+s.randomInt(-5,5),y:e+s.randomInt(-5,5),v:s.randomInt(1,2)/16,color:s.colors[s.randomInt(0,6)]});s.sprites.push(o)}}var s=n(43),r=n(44),a=n(45),c=n(46);i()},43:function(t,e){"use strict";var n={width:900,height:500,FPS:55},i=void 0,o=[],s=void 0,r=["#ff2211","#ff9911","#ffff11","#11ff11","#11ffff","#1122ff","#ff33ff"],a=function(t,e){return(e-t+1)*Math.random()+t>>0};t.exports={Config:n,background:i,sprites:o,canvas:s,colors:r,randomInt:a}},44:function(t,e,n){"use strict";function i(t,e,n,i){3===arguments.length&&(i=n,n=e,e=document);var o=function(e){var e=e||window.event;i.call(t,e)};e.addEventListener(n,o,!1)}function o(t){var e={};for(var n in t)e[n]=t[n];return e}function s(t){t=o(t);var e;e="mousedown"==t.type||"touchstart"==t.type?"Down":"mouseup"==t.type||"touchend"==t.type?"Up":"Click",t.point={x:t.clientX-a.x+document.body.scrollLeft+document.documentElement.scrollLeft,y:t.clientY-a.y+document.body.scrollTop+document.documentElement.scrollTop},l._input(e,t)}var r,a,c=n(43),h=Date.now(),u=0,l={_cb:{tick:[],render:[],input:[]},extend:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])},init:function(t,e){this.canvas=t,this.context=t.getContext("2d"),this.width=t.width,this.height=t.height,a=l.DOM.inner(t),e&&e(t)},start:function(){var t=this;r=setInterval(function(){t.step()},1e3/c.Config.FPS),i(this,canvas,"touchend",s),i(this,canvas,"mouseup",s)},step:function(){var t=Date.now(),e=t-h;h=t,l._tick(e,u++),l._render(this.context)},stop:function(){},_tick:function(t,e){for(var n=this._cb.tick,i=0,o=n.length;i<o;++i)n[i](t,e)},tick:function(t){this._cb.tick.push(t)},_render:function(t){for(var e=this._cb.render,n=0,i=e.length;n<i;++n)e[n](t)},render:function(t){this._cb.render.push(t)},_input:function(t,e){for(var n=this._cb.input,i=0,o=n.length;i<o;++i)n[i](t,e)},input:function(t){this._cb.input.push(t)}};l.extend({DOM:{inner:function(t){var e=t.getBoundingClientRect(),n=e.left+(window.pageXOffset?window.pageXOffset:document.body.scrollTop),i=e.top+(window.pageYOffset?window.pageYOffset:document.body.scrollLeft),o=parseInt(this.getStyle(t,"border-left-width")||0,10)||parseInt(this.getStyle(t,"borderLeftWidth")||0,10)||0,s=parseInt(this.getStyle(t,"border-top-width")||0,10)||parseInt(this.getStyle(t,"borderTopWidth")||0,10)||0;return n+=o,i+=s,{x:n,y:i}},getStyle:function(t,e){var n;return t.currentStyle?n=t.currentStyle[this.camelize(e)]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(t,null).getPropertyValue(this.csselize(e))),n},camelize:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},csselize:function(t){return t.replace(/[A-Z]/g,function(t){return t?"-"+t.toLowerCase():""})}}}),t.exports=l},45:function(t,e,n){"use strict";function i(t){for(var e in t)this[e]=t[e];this.init()}var o=n(43);i.prototype={space:10,data:null,exploded:!1,init:function(){this.nodes=[],this.createNodes(s,50,50,"#000"),this.createNodes(r,500,50,"#ccc"),this.createNodes(a,120,300,"#339afe"),this.createNodes(c,570,300,"rgb(19,248,20)"),this.fullNodes=[],this.img=document.createElement("canvas"),this.img.width=canvas.width,this.img.height=canvas.height;for(var t=this.img.getContext("2d"),e=this.nodes.length-1;e>=0;e--){var n=this.nodes[e];t.fillStyle=n.c,t.fillRect(n.x,n.y,9,9)}},show_new:function(t){t.globalAlpha=1,t.drawImage(this.img,0,0)},createNodes:function(t,e,n,i){var o=this;t.forEach(function(t,s){t.forEach(function(t,r){9===t&&o.nodes.push({x:o.space*r+e,y:o.space*s+n,f:0,c:i})})})},update:function(t){for(var e=this.nodes.length-1;e>=0;e--){var n=this.nodes[e];n.f&&(this.fullNodes.push(n),this.nodes.splice(e,1))}},render:function(t){t.globalAlpha=.13,t.fillStyle="#441166",t.fillRect(0,0,o.Config.width,o.Config.height),this.exploded&&(t.globalAlpha=.13,t.drawImage(this.img,0,0))}};var s=[[,,9,9,9,9,9,,,,,,,9,9,9,9,9,,,,,,,,9,9,,,,,,,9,9,,,],[,9,9,9,9,9,9,9,,,,,9,9,9,9,9,9,9,,,,,,9,9,9,,,,,,9,9,,,,],[9,9,9,,,,9,9,9,,,9,9,9,,,,9,9,9,,,,9,9,9,9,,,,,9,9,,,,,],[9,9,,,,,,9,9,,,9,9,,,,,,9,9,,,9,9,9,9,9,,,,9,9,,,,,,],[,,,,,,,9,9,,,9,9,,,,,,9,9,,,,,,9,9,,,9,9,,,,,,,],[,,,,,,9,9,9,,,9,9,,,,,,9,9,,,,,,9,9,,,9,9,,,,,,,],[,,,,,9,9,9,,,,9,9,,,,,,9,9,,,,,,9,9,,,9,9,9,9,9,9,9,,],[,,,,9,9,9,,,,,9,9,,,,,,9,9,,,,,,9,9,,,9,9,9,9,9,9,9,9],[,,,9,9,9,,,,,,9,9,,,,,,9,9,,,,,,9,9,,,9,9,9,,,,9,9,9],[,,9,9,9,,,,,,,9,9,,,,,,9,9,,,,,,9,9,,,9,9,,,,,,9,9],[,9,9,9,,,,,,,,9,9,,,,,,9,9,,,,,,9,9,,,9,9,,,,,,9,9],[9,9,9,,,,,,,,,9,9,9,,,,9,9,9,,,,,,9,9,,,9,9,9,,,,9,9,9],[9,9,9,9,9,9,9,9,9,,,,9,9,9,9,9,9,9,,,,,,,9,9,,,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,,,,,9,9,9,9,9,,,,,,,,9,9,,,,9,9,9,9,9,9,,]],r=[[9,9,9,9,9,9,9,9,,,,,9,9,,,,,,,,,9,9,,,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,,,,9,9,9,,,,,,,9,9,9,,,9,9,9,9,9,9,9,9,9,9],[9,9,,,,,,9,9,9,,,,9,9,9,,,,,9,9,9,,,,9,9,,,,,,,,],[9,9,,,,,,,9,9,,,,,9,9,9,,,9,9,9,,,,,9,9,,,,,,,,],[9,9,,,,,,,9,9,,,,,,9,9,9,9,9,9,,,,,,9,9,,,,,,,,],[9,9,,,,,,9,9,,,,,,,,9,9,9,9,,,,,,,9,9,,,,,,,,],[9,9,9,9,9,9,9,9,,,,,,,,,,9,9,,,,,,,,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,,,,,,,,,9,9,,,,,,,,9,9,9,9,9,9,9,9,9],[9,9,,,,,,9,9,9,,,,,,,,9,9,,,,,,,,9,9,,,,,,,,],[9,9,,,,,,,9,9,,,,,,,,9,9,,,,,,,,9,9,,,,,,,,],[9,9,,,,,,,9,9,,,,,,,,9,9,,,,,,,,9,9,,,,,,,,],[9,9,,,,,,9,9,9,,,,,,,,9,9,,,,,,,,9,9,,,,,,,,],[9,9,9,9,9,9,9,9,9,,,,,,,,,9,9,,,,,,,,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,,,,,,,,,,9,9,,,,,,,,9,9,9,9,9,9,9,9,9,9]],a=[[,,9,9,9,9,9,,,,,,,9,9,9,9,9,,,,,,,,9,9,,,9,9,9,9,9,9,9,9],[,9,9,9,9,9,9,9,,,,,9,9,9,9,9,9,9,,,,,,9,9,9,,,9,9,9,9,9,9,9,9],[9,9,9,,,,9,9,9,,,9,9,9,,,,9,9,9,,,,9,9,9,9,,,9,9,,,,,9,9],[9,9,,,,,,9,9,,,9,9,,,,,,9,9,,,9,9,9,9,9,,,9,9,,,,,9,9],[,,,,,,,9,9,,,9,9,,,,,,9,9,,,,,,9,9,,,,,,,,,9,9],[,,,,,,9,9,9,,,9,9,,,,,,9,9,,,,,,9,9,,,,,,,,,9,9],[,,,,,9,9,9,,,,9,9,,,,,,9,9,,,,,,9,9,,,,,,,,,9,9],[,,,,9,9,9,,,,,9,9,,,,,,9,9,,,,,,9,9,,,,,,,,,9,9],[,,,9,9,9,,,,,,9,9,,,,,,9,9,,,,,,9,9,,,,,,,,,9,9],[,,9,9,9,,,,,,,9,9,,,,,,9,9,,,,,,9,9,,,,,,,,,9,9],[,9,9,9,,,,,,,,9,9,,,,,,9,9,,,,,,9,9,,,,,,,,,9,9],[9,9,9,,,,,,,,,9,9,9,,,,9,9,9,,,,,,9,9,,,,,,,,,9,9],[9,9,9,9,9,9,9,9,9,,,,9,9,9,9,9,9,9,,,,,,,9,9,,,,,,,,,9,9],[9,9,9,9,9,9,9,9,9,,,,,9,9,9,9,9,,,,,,,,9,9,,,,,,,,,9,9]],c=[[9,9,,,,,,,9,9,,,9,9,9,9,9,9],[9,9,,,,,,,9,9,,,9,9,9,9,9,9],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,9,9,9,9,9,9,9,9,,,,,9,9,,],[9,9,9,9,9,9,9,9,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,,,9,9,,],[9,9,,,,,,,9,9,,,9,9,9,9,9,9],[9,9,,,,,,,9,9,,,9,9,9,9,9,9]];t.exports=i},46:function(t,e,n){"use strict";function i(t){for(var e in t)this[e]=t[e];this.size+=o.randomInt(-2,2)}var o=n(43);i.prototype={color:null,rotation:0,vr:.001,size:18,x:0,y:0,v:0,ax:0,ay:0,vx:0,vy:0,tx:null,ty:null,findTarget:function(){var t=o.background.nodes,e=o.randomInt(0,t.length-1),n=t[e];this.tx=n.x+o.randomInt(-2,2),this.ty=n.y+o.randomInt(-2,2),n.f++;var i=this.tx-this.x,s=this.ty-this.y,r=Math.atan2(s,i);this.cos=Math.cos(r),this.sin=Math.sin(r),this.vx=this.v*this.cos,this.vy=this.v*this.sin},update:function(t){if(!this.exploded&&null===this.tx||null===this.ty)this.findTarget();else{var e=this.vx+this.ax*t,n=this.vy+this.ay*t,i=(this.vx+e)/2*t,o=(this.vy+n)/2*t;if(!this.exploded){var s=Math.abs(this.tx-this.x),r=Math.abs(this.ty-this.y),a=Math.abs(i),c=Math.abs(o);s<a&&(i=0),r<c&&(o=0)}this.x=this.x+i,this.y=this.y+o,this.rotation+=this.vr*t,this.exploded||0!==i||0!==o||(this.finished=!0,this.vx=0,this.vy=0)}},explode:function(){this.ax=0,this.ay=0,this.vx=o.randomInt(-2,2)/10,this.vy=o.randomInt(-5,-3)/10,this.exploded=!0},render:function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.rotation),t.fillStyle=this.color;var e=this.size;t.fillRect(-e>>1,-e>>1,e,e),t.restore()}},t.exports=i}});