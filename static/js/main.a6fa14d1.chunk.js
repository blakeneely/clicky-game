(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"/images/yoda.jpg"},{"id":2,"image":"/images/chewbacca.jpg"},{"id":3,"image":"/images/darth_vader.jpg"},{"id":4,"image":"/images/emperor.jpg"},{"id":5,"image":"/images/finn.jpg"},{"id":6,"image":"/images/han_solo.jpg"},{"id":7,"image":"/images/luke_skywalker.jpg"},{"id":8,"image":"/images/leia.jpg"},{"id":9,"image":"/images/rey.jpg"},{"id":10,"image":"/images/poe_dameron.jpg"},{"id":11,"image":"/images/obi_wan.jpg"},{"id":12,"image":"/images/kylo_ren.jpg"}]')},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(3),r=t.n(c),s=(t(14),t(4)),m=t(5),o=t(7),l=t(6),u=t(8),g=(t(15),function(e){return i.a.createElement("nav",{className:"navbar sticky-top text-center"},i.a.createElement("div",{className:"order-0"},i.a.createElement("img",{src:"/images/star_wars_logo.png",height:"60",width:"90",className:"d-inline-block align-top"}),i.a.createElement("h4",{className:"nav-text"},"Clicky-Game")),i.a.createElement("div",{className:"order-1"},i.a.createElement("h4",{className:"nav-text status"},e.status)),i.a.createElement("div",{className:"order-2"},i.a.createElement("h4",{className:"nav-text pr-1"},"Score: ",e.score)))}),d=(t(16),function(e){return i.a.createElement("div",{className:"container wrapper"},e.children)}),p=(t(17),function(e){return i.a.createElement("div",{className:"card img-container hvr-bounce-in"},i.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.runGame(e.id)}}))}),h=(t(18),function(){return i.a.createElement("footer",null,i.a.createElement("p",{className:"nav-text"},"Neely Media \xa9"))}),f=t(1),k=(t(19),function(e){return e.map((function(e){return[Math.random(),e]})).sort((function(e,a){return e[0]-a[0]})).map((function(e){return e[1]}))}),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={characters:k(f),clickedIds:[],score:0,goal:12,status:"Start by clicking any image. Don't click the same one more than once!"},t.runGame=function(e){var a=t.state.clickedIds;a.includes(e)?t.setState({clickedIds:[],score:0,status:"Game Over! You lost. Click to play again!"}):(a.push(e),12!==a.length?t.setState({characters:k(f),clickedIds:a,score:a.length,status:" "}):t.setState({score:12,status:"You won! Click to play again!",clickedIds:[]}))},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(g,{score:this.state.score,status:this.state.status,won:this.state.gamesWon}),i.a.createElement(d,null,this.state.characters.map((function(a){return i.a.createElement(p,{runGame:e.runGame,id:a.id,key:a.id,image:a.image})}))),i.a.createElement(h,null))}}]),a}(n.Component);r.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a6fa14d1.chunk.js.map