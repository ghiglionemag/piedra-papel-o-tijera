function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequiref4be;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequiref4be=r),r.register("7PhYn",(function(n,t){var o,r;e(n.exports,"register",(()=>o),(e=>o=e)),e(n.exports,"resolve",(()=>r),(e=>r=e));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r("7PhYn").register(JSON.parse('{"di8mO":"index.e288990a.js","eEl03":"tijeraImg.743b6342.svg","61pDh":"piedraImg.03bd75e4.svg","cLrEl":"papelImg.b3736569.svg","93YEL":"starWin.1eea6986.svg","idZHu":"starLose.342a139d.svg"}'));class i extends HTMLElement{constructor(){super(),this.tags=["h1","h2","h3","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag),this.render()}render(){const e=document.createElement("style");e.innerHTML="\n    h1{\n      font-family: 'Anton', sans-serif;\n      font-size: 80px;\n      line-height: 61px;\n      font-weight: bold;\n      padding: 0px 30px;\n    }\n    h2{\n     font-size: 55px;\n     line-height: 61px;\n     margin: 0px;\n    }\n    h3{\n     font-family: 'Noto Sans JP', sans-serif;\n     font-weight: 600;\n     font-size: 40px;\n     line-height: 100%;\n    }\n    p{\n      font-family: 'Noto Sans JP', sans-serif;\n      font-size: 18px;\n      text-align: right;\n    }\n    ";const n=document.createElement(this.tag);n.textContent=this.textContent,this.shadow.appendChild(e),this.shadow.appendChild(n)}}customElements.define("my-text",i);class a extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("button");n.className="root";const t=document.createElement("style");t.innerHTML="\n            .root{\n                min-width: 322px; \n                line-height: 55px;\n                margin: 12px 0px;\n                border-radius: 20px;\n                font-size: 22px;\n                text-align: center;\n                font-family: 'Anton', sans-serif;\n            }\n            @media (min-width: 899px){\n                .root{\n                  margin-left: 10px;\n                  \n                }\n              }\n        ",n.textContent=this.textContent,e.appendChild(n),e.appendChild(t)}}customElements.define("my-button",a),r.register("46LJL",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("eEl03")})),r.register("kVZsc",(function(n,t){var o;e(n.exports,"getBundleURL",(()=>o),(e=>o=e));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=n),n}})),r.register("8yOPS",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("61pDh")})),r.register("kgMAs",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("cLrEl")}));class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const e=document.createElement("style");e.innerText="\n        .root{\n          display: flex;\n          flex-direction: row; \n          justify-content: space-between;\n          width: 322px;\n        }\n        .option{\n          background: #456BD9;\n          border: 0.1875em solid #0F1C3F;\n          border-radius: 50%;\n          box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);\n          height: 100px;\n          width: 100px;\n          text-align: center;\n          }\n        .option:hover {\n          background: green;\n          height: 110px;\n          width: 110px;\n        }\n        .tijera,\n        .piedra,\n        .papel{\n          height: 60px;\n          width: 60px;\n          padding: 15%;\n        }\n        \n        \n            ",this.shadow.appendChild(e),this.render()}addListeners(){const e=this.shadow.querySelectorAll(".option");for(const n of e)n.addEventListener("click",(e=>{e.preventDefault();const t=n.id,o=new CustomEvent("optionEvent",{detail:{type:t}});this.dispatchEvent(o)}))}render(){const e=r("46LJL"),n=r("8yOPS"),t=r("kgMAs"),o=document.createElement("div");o.className="root",o.innerHTML=`\n    <button class="option" id= "tijera"><img class="tijera" src=${e}></button>\n    <button class="option" id= "piedra"><img class="piedra" src=${n}></button>\n    <button class="option" id= "papel"><img class="papel" src=${t}></button>\n        `,this.shadow.appendChild(o),location.pathname.includes("/game")&&this.addListeners()}}customElements.define("options-comp",s);class l extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n={info:{color:"green"},warning:{color:"orange",threshold:10},alert:{color:"red",threshold:5}};let t=0,o=3,r=null,i=n.info.color;const a=document.createElement("div");function s(e){Math.floor(e/60);let n=e%60;return n<10&&(n=`${n}`),`${n}`}a.innerHTML=`\n    <div class="base-timer">\n      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <g class="base-timer__circle">\n          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>\n          <path\n            id="base-timer-path-remaining"\n            stroke-dasharray="283"\n            class="base-timer__path-remaining ${i}"\n            d="\n              M 50, 50\n              m -45, 0\n              a 45,45 0 1,0 90,0\n              a 45,45 0 1,0 -90,0\n            "\n          ></path>\n        </g>\n      </svg>\n      <span id="base-timer-label" class="base-timer__label">\n      ${s(o)}\n      </span>\n    </div>\n    `,console.log(),r=setInterval((()=>{t=t+=1,o=3-t,e.getElementById("base-timer-label").innerHTML=s(o),function(){const n=`${(283*function(){const e=o/3;return e-1/3*(1-e)}()).toFixed(0)} 283`;e.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray",n)}(),function(t){const{alert:o,warning:r,info:i}=n;t<=o.threshold?(e.getElementById("base-timer-path-remaining").classList.remove(r.color),e.getElementById("base-timer-path-remaining").classList.add(o.color)):t<=r.threshold&&(e.getElementById("base-timer-path-remaining").classList.remove(i.color),e.getElementById("base-timer-path-remaining").classList.add(r.color))}(o),0===o&&(clearInterval(r),a.innerHTML='\n      <div class="root">\n      <my-text tag="h2"> Se acabó tu tiempo</my-text>\n      <my-button class="reinit-button"> Reiniciar<my-button>\n      </div>\n      ',a.querySelector(".reinit-button").addEventListener("click",(()=>{location.reload()})))}),1e3);const l=document.createElement("style");l.innerHTML="\n    .root{ \n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      \n  \n    }\n    .base-timer {\n        position: relative;\n        width: 300px;\n        height: 300px;\n      }\n      \n      .base-timer__svg {\n        transform: scaleX(-1);\n      }\n      \n      .base-timer__circle {\n        fill: none;\n        stroke: none;\n      }\n      \n      .base-timer__path-elapsed {\n        stroke-width: 7px;\n        stroke: grey;\n      }\n      \n      .base-timer__path-remaining {\n        stroke-width: 7px;\n        stroke-linecap: round;\n        transform: rotate(90deg);\n        transform-origin: center;\n        transition: 1s linear all;\n        fill-rule: nonzero;\n        stroke: currentColor;\n      }\n      \n      .base-timer__path-remaining.green {\n        color: rgb(65, 184, 131);\n      }\n      \n      .base-timer__path-remaining.orange {\n        color: orange;\n      }\n      \n      .base-timer__path-remaining.red {\n        color: red;\n      }\n      \n      .base-timer__label {\n        position: absolute;\n        width: 300px;\n        height: 300px;\n        top: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 48px;\n      }\n    ",e.appendChild(l),e.appendChild(a)}}customElements.define("count-down",l),r.register("bPIoh",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("93YEL")})),r.register("4B4z3",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("idZHu")}));class c extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=r("bPIoh"),t=r("4B4z3"),o=document.createElement("div");o.className="root",o.innerHTML=`\n    <img class="star"  src=${n}>\n    <my-text tag="h3" class="centered">Perdiste</my-text>\n    </img>\n    \x3c!---img class="star"  src=${t}---\x3e\n      `;const i=document.createElement("style");i.innerHTML="\n      .root{\n        text-align: center;\n        position: relative;\n      }\n      .star{\n        width: 259px;\n        height: 259px;\n      }\n      .centered {\n        position: absolute;\n        top: 48%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n          ",e.appendChild(o),e.appendChild(i)}}function d(e){const n=document.querySelector(".root");n.innerHTML='\n  <div class="title-conteiner">\n  <my-text tag="h1">Piedra, papel o tijera</my-text>\n  </div>\n  <my-button class="start-button">Empezar</my-button>\n  <options-comp></options-comp>\n  ';const t=document.createElement("style");t.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n  }\ns  ",n.appendChild(t);return n.querySelector(".start-button").addEventListener("click",(n=>{n.preventDefault(),e.goTo("/piedra-papel-o-tijera/instrucciones/")})),n}customElements.define("star-comp",c);const p={data:{currentGame:{computerPlay:"",myPlay:""},history:[]},getState(){return localStorage.getItem("data")&&(this.data=JSON.parse(localStorage.getItem("data"))),this.data},setMove(e){this.data.currentGame.myPlay=e,this.saveData()},PushToHistory(e){this.data.history.push(e)},whoWins(){const e=this.data.currentGame.computerPlay,n=this.data.currentGame.myPlay;return["tijera"===n&&"papel"===e,"papel"===n&&"piedra"===e,"piedra"===n&&"tijera"===e].includes(!0)?(this.PushToHistory(!0),!0):(this.PushToHistory(!1),!1)},computerMove(){const e=["tijera","papel","piedra"];let n=e[Math.floor(3*Math.random())+0];if(n===this.data.currentGame.myPlay){n=e[Math.floor(3*Math.random())+0]}return this.saveData(),this.data.currentGame.computerPlay=n,n},getScore(){let e=0,n=0;for(const t of this.data.history)!0===t&&(e+=1),!1===t&&(n+=1);return{win:e,loose:n}},saveData(){localStorage.setItem("data",JSON.stringify(this.data))},cleanData(){localStorage.setItem("data",JSON.stringify({currentGame:{computerPlay:"",myPlay:"",winner:!0},history:[]}))}};const m=[{path:/\/piedra-papel-o-tijera/,component:d},{path:/\/piedra-papel-o-tijera\/welcome/,component:d},{path:/\/piedra-papel-o-tijera\/instrucciones/,component:function(e){const n=document.querySelector(".root");n.innerHTML='\n  <div class="title-conteiner">\n  <my-text tag="h3">Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>\n  </div>\n  <my-button class="start-button">Jugar</my-button>\n  <options-comp></options-comp>\n  ';const t=document.createElement("style");return t.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n    text-align: center;\n  }\n  .options-conteiner{ \n  }\n  ",n.appendChild(t),n.querySelector(".start-button").addEventListener("click",(n=>{n.preventDefault(),e.goTo("/piedra-papel-o-tijera/game")})),n}},{path:/\/piedra-papel-o-tijera\/game/,component:function(e){const n=document.querySelector(".root");n.innerHTML='\n    <count-down></count-down>\n    <div class="options"> \n    <options-comp></options-comp>\n    </div> \n  ',console.log(p.data.currentGame);const t=n.querySelector(".options").children;for(const n of t)n.addEventListener("optionEvent",(n=>{const t=n.detail.type;p.setMove(t),p.computerMove(),p.saveData(),e.goTo("/piedra-papel-o-tijera/results")}));const o=document.createElement("style");return o.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  \n  ",n.appendChild(o),n}},{path:/\/piedra-papel-o-tijera\/results/,component:function(e){const n=document.querySelector(".root"),t=document.createElement("style");let o;return t.innerText="\n    .root{\n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      min-width: 375px;\n      min-height: 672px;\n      background-color: pink;\n    }\n    .score-conteiner{\n      display: flex;\n      flex-direction: column;\n      width: 259px;\n      height: 217px;\n      padding: 15px 30px;\n      background-color: #FFFFFF;\n      border: 10px solid #000000;\n      border-radius: 10px;\n    }\n    ",o=p.whoWins()?"win":"loose",n.innerHTML=`\n    <star-comp></star-comp>\n    <div class="score-conteiner"> \n    <my-text tag="h2">Puntaje</my-text>\n    <my-text tag="p" id="your-scrore">Vos:${p.getScore().loose}</my-text>\n    <my-text tag="p" id="computer-scrore">Máquina:${p.getScore().win}</my-text>\n    </div>\n    <my-button class="re-starButton">Volver a jugar</my-button>\n    <my-button class="clean-data">Borrar historial</my-button>\n    `,n.querySelector(".re-starButton").addEventListener("click",(()=>{e.goTo("/piedra-papel-o-tijera/game")})),n.querySelector(".clean-data").addEventListener("click",(n=>{n.preventDefault(),p.cleanData(),e.goTo("/piedra-papel-o-tijera/welcome")})),n.appendChild(t),p.saveData(),n}}];!function(e){function n(e){history.pushState({},"",e),console.log("hola"),t(e)}function t(t){console.log("El handleRoute recibió una nueva ruta",t);for(const o of m)if(o.path.test(t)){const t=o.component({goTo:n});e.firstChild&&e.firstChild.remove(t)}}location.host.includes("github.io")?n("/piedra-papel-o-tijera"):t("/piedra-papel-o-tijera"),console.log(location.pathname),window.onpopstate=function(){t(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.e288990a.js.map
