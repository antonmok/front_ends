(function(e){function t(t){for(var o,s,c=t[0],a=t[1],l=t[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{"margin-bottom":"20px"}},[n("button",{staticStyle:{background:"lightblue",border:"none",outline:"none",margin:"5px",height:"20px","border-radius":"4px",color:"white","font-weight":"700","box-shadow":"0 1px 5px 0 #cdd",cursor:"pointer"},on:{click:e.start}},[e._v("START")]),n("button",{staticStyle:{background:"lightblue",border:"none",outline:"none",margin:"5px",height:"20px","border-radius":"4px",color:"white","font-weight":"700","box-shadow":"0 1px 5px 0 #cdd",cursor:"pointer"},on:{click:e.end}},[e._v("END")])]),n("img",{directives:[{name:"show",rawName:"v-show",value:e.img,expression:"img"}],staticStyle:{"border-radius":"5px"},attrs:{width:"970",alt:"picture",src:e.img},on:{load:e.updImg}})])},i=[],s={name:"App",data:function(){return{img:null,socket:null,send:0,recieved:0,loaded:0}},methods:{start:function(){this.socket=new WebSocket("ws://10.8.0.14:8083"),this.socket.onopen=this.onOpn,this.socket.onerror=this.onErr,this.socket.onclose=this.onCls,this.socket.onmessage=this.onMsg},end:function(){this.socket.close()},onErr:function(){console.log("error")},onOpn:function(){console.log("Connection"),this.socket.send("GetFrame")},onCls:function(){console.log("closed")},onMsg:function(e){this.recieved=Date.now(),console.log("Время от отправки запроса до получения картинки: ",this.recieved-this.send),this.img="data:image/png;base64,".concat(e.data)},updImg:function(){this.loaded=Date.now(),console.log("Время от получения картинки до ее отображения",this.loaded-this.recieved),console.log("Полное время от запроса до отображения",this.loaded-this.send),this.socket.send("GetFrame"),this.send=Date.now()}}},c=s,a=(n("5c0b"),n("2877")),l=Object(a["a"])(c,r,i,!1,null,null,null),u=l.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a754f8a2.js.map