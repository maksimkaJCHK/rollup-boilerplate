System.register(["./common.js"],(function(){"use strict";var e,t;return{setters:[function(n){e=n.R,t=n.a}],execute:function(){var n=document.getElementById("app");function r(e){var n=e.name;return t.createElement("div",{className:"brd"},t.createElement("p",null,"Привет ",n,"!"),t.createElement("p",null,"Твое имя содержит - ",t.createElement("b",null,n.length)," символов"))}e.render(t.createElement(r,{name:"Максимка"}),n)}}}));
