function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequiref4be;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequiref4be=r),r.register("7PhYn",(function(t,n){var o,r;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("7PhYn").register(JSON.parse('{"di8mO":"index.8391e775.js","eEl03":"tijeraImg.743b6342.svg","61pDh":"piedraImg.03bd75e4.svg","cLrEl":"papelImg.b3736569.svg","93YEL":"starWin.1eea6986.svg","idZHu":"starLose.342a139d.svg"}'));class i extends HTMLElement{constructor(){super(),this.tags=["h1","h2","h3","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag),this.render()}render(){const e=document.createElement("style");e.innerHTML="\n    h1{\n      font-family: 'Anton', sans-serif;\n      font-size: 80px;\n      line-height: 61px;\n      font-weight: bold;\n      padding: 0px 30px;\n    }\n    h2{\n     font-size: 55px;\n     line-height: 61px;\n     margin: 0px;\n    }\n    h3{\n     font-family: 'Noto Sans JP', sans-serif;\n     font-weight: 600;\n     font-size: 40px;\n     line-height: 100%;\n    }\n    p{\n      font-family: 'Noto Sans JP', sans-serif;\n      font-size: 18px;\n      text-align: right;\n    }\n    ";const t=document.createElement(this.tag);t.textContent=this.textContent,this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("my-text",i);class a extends HTMLElement{constructor(){super(),this.render()}addCallbacks(){this.shadowRoot.querySelector(".button").addEventListener("click",(e=>{const t=new CustomEvent("buttonEvent",{detail:{route:"/apx-desafio-m5/"}});this.dispatchEvent(t)}))}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("button");t.className="root";const n=document.createElement("style");n.innerHTML="\n            .root{\n                min-width: 322px; \n                line-height: 55px;\n                margin: 12px 0px;\n                border-radius: 20px;\n                font-size: 22px;\n                text-align: center;\n                font-family: 'Anton', sans-serif;\n            }\n            @media (min-width: 899px){\n                .root{\n                  margin-left: 10px;\n                  \n                }\n              }\n        ",t.textContent=this.textContent,e.appendChild(t),e.appendChild(n)}}customElements.define("my-button",a),r.register("46LJL",(function(e,t){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("eEl03")})),r.register("kVZsc",(function(t,n){var o;e(t.exports,"getBundleURL",(()=>o),(e=>o=e));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=t),t}})),r.register("8yOPS",(function(e,t){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("61pDh")})),r.register("kgMAs",(function(e,t){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("cLrEl")}));class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const e=document.createElement("style");e.innerText="\n        .root{\n          display: flex;\n          flex-direction: row; \n          justify-content: space-between;\n          width: 322px;\n        }\n        .option{\n          background: #456BD9;\n          border: 0.1875em solid #0F1C3F;\n          border-radius: 50%;\n          box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);\n          height: 100px;\n          width: 100px;\n          text-align: center;\n          }\n        .option:hover {\n          background: green;\n          height: 110px;\n          width: 110px;\n        }\n        .tijera,\n        .piedra,\n        .papel{\n          height: 60px;\n          width: 60px;\n          padding: 15%;\n        }\n        \n        \n            ",this.shadow.appendChild(e),this.render()}addListeners(){const e=this.shadow.querySelectorAll(".option");for(const t of e)t.addEventListener("click",(e=>{e.preventDefault();const n=t.id,o=new CustomEvent("optionEvent",{detail:{type:n}});this.dispatchEvent(o)}))}render(){const e=r("46LJL"),t=r("8yOPS"),n=r("kgMAs"),o=document.createElement("div");o.className="root",o.innerHTML=`\n    <button class="option" id= "tijera"><img class="tijera" src=${e}></button>\n    <button class="option" id= "piedra"><img class="piedra" src=${t}></button>\n    <button class="option" id= "papel"><img class="papel" src=${n}></button>\n        `,this.shadow.appendChild(o),location.pathname.includes("/game")&&this.addListeners()}}customElements.define("options-comp",s);class l extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t={info:{color:"green"},warning:{color:"orange",threshold:10},alert:{color:"red",threshold:5}};let n=0,o=3,r=null,i=t.info.color;const a=document.createElement("div");function s(e){Math.floor(e/60);let t=e%60;return t<10&&(t=`${t}`),`${t}`}a.innerHTML=`\n    <div class="base-timer">\n      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <g class="base-timer__circle">\n          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>\n          <path\n            id="base-timer-path-remaining"\n            stroke-dasharray="283"\n            class="base-timer__path-remaining ${i}"\n            d="\n              M 50, 50\n              m -45, 0\n              a 45,45 0 1,0 90,0\n              a 45,45 0 1,0 -90,0\n            "\n          ></path>\n        </g>\n      </svg>\n      <span id="base-timer-label" class="base-timer__label">\n      ${s(o)}\n      </span>\n    </div>\n    `,console.log(),r=setInterval((()=>{n=n+=1,o=3-n,e.getElementById("base-timer-label").innerHTML=s(o),function(){const t=`${(283*function(){const e=o/3;return e-1/3*(1-e)}()).toFixed(0)} 283`;e.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray",t)}(),function(n){const{alert:o,warning:r,info:i}=t;n<=o.threshold?(e.getElementById("base-timer-path-remaining").classList.remove(r.color),e.getElementById("base-timer-path-remaining").classList.add(o.color)):n<=r.threshold&&(e.getElementById("base-timer-path-remaining").classList.remove(i.color),e.getElementById("base-timer-path-remaining").classList.add(r.color))}(o),0===o&&(clearInterval(r),a.innerHTML='\n      <div class="root">\n      <my-text tag="h2"> Se acabó tu tiempo</my-text>\n      <my-button class="reinit-button"> Reiniciar<my-button>\n      </div>\n      ',a.querySelector(".reinit-button").addEventListener("click",(()=>{location.reload()})))}),1e3);const l=document.createElement("style");l.innerHTML="\n    .root{ \n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      \n  \n    }\n    .base-timer {\n        position: relative;\n        width: 300px;\n        height: 300px;\n      }\n      \n      .base-timer__svg {\n        transform: scaleX(-1);\n      }\n      \n      .base-timer__circle {\n        fill: none;\n        stroke: none;\n      }\n      \n      .base-timer__path-elapsed {\n        stroke-width: 7px;\n        stroke: grey;\n      }\n      \n      .base-timer__path-remaining {\n        stroke-width: 7px;\n        stroke-linecap: round;\n        transform: rotate(90deg);\n        transform-origin: center;\n        transition: 1s linear all;\n        fill-rule: nonzero;\n        stroke: currentColor;\n      }\n      \n      .base-timer__path-remaining.green {\n        color: rgb(65, 184, 131);\n      }\n      \n      .base-timer__path-remaining.orange {\n        color: orange;\n      }\n      \n      .base-timer__path-remaining.red {\n        color: red;\n      }\n      \n      .base-timer__label {\n        position: absolute;\n        width: 300px;\n        height: 300px;\n        top: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 48px;\n      }\n    ",e.appendChild(l),e.appendChild(a)}}customElements.define("count-down",l),r.register("bPIoh",(function(e,t){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("93YEL")})),r.register("4B4z3",(function(e,t){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("idZHu")}));class c extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=r("bPIoh"),n=r("4B4z3"),o=document.createElement("div");o.className="root",o.innerHTML=`\n    <img class="star"  src=${t}>\n    <my-text tag="h3" class="centered">Perdiste</my-text>\n    </img>\n    \x3c!---img class="star"  src=${n}---\x3e\n      `;const i=document.createElement("style");i.innerHTML="\n      .root{\n        text-align: center;\n        position: relative;\n      }\n      .star{\n        width: 259px;\n        height: 259px;\n      }\n      .centered {\n        position: absolute;\n        top: 48%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n          ",e.appendChild(o),e.appendChild(i)}}customElements.define("star-comp",c);const d={data:{currentGame:{computerPlay:"",myPlay:""},history:[]},init(){const e=localStorage.getItem("seved-data");null!=JSON.parse(e)&&this.setState(JSON.parse(e))},getState(){return localStorage.getItem("data")&&(this.data=JSON.parse(localStorage.getItem("data"))),this.data},setMove(e){this.data.currentGame.myPlay=e,this.saveData()},PushToHistory(e){this.data.history.push(e)},whoWins(){const e=this.data.currentGame.computerPlay,t=this.data.currentGame.myPlay;return["tijera"===t&&"papel"===e,"papel"===t&&"piedra"===e,"piedra"===t&&"tijera"===e].includes(!0)?(this.PushToHistory(!0),!0):(this.PushToHistory(!1),!1)},computerMove(){const e=["tijera","papel","piedra"];let t=e[Math.floor(3*Math.random())+0];if(t===this.data.currentGame.myPlay){t=e[Math.floor(3*Math.random())+0]}return this.saveData(),this.data.currentGame.computerPlay=t,t},getScore(){let e=0,t=0;for(const n of this.data.history)!0===n&&(e+=1),!1===n&&(t+=1);return{win:e,loose:t}},saveData(){localStorage.setItem("saved-data",JSON.stringify(this.data))},cleanData(){localStorage.setItem("data",null);this.getState().history=[]}};function p(e){const t=document.querySelector(".root");t.innerHTML='\n  <div class="title-conteiner">\n  <my-text tag="h1">Piedra, papel o tijera</my-text>\n  </div>\n  <my-button class="start-button">Empezar</my-button>\n  <options-comp></options-comp>\n  ';const n=document.createElement("style");n.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n  }\ns  ",t.appendChild(n);return t.querySelector(".start-button").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/piedra-papel-o-tijera/instrucciones/")})),t}const m=[{path:/\/piedra-papel-o-tijera/,component:p},{path:/\/piedra-papel-o-tijera\/welcome/,component:p},{path:/\/piedra-papel-o-tijera\/instrucciones/,component:function(e){const t=document.querySelector(".root");t.innerHTML='\n  <div class="title-conteiner">\n  <my-text tag="h3">Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>\n  </div>\n  <my-button class="start-button">Jugar</my-button>\n  <options-comp></options-comp>\n  ';const n=document.createElement("style");return n.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n    text-align: center;\n  }\n  .options-conteiner{ \n  }\n  ",t.appendChild(n),t.querySelector(".start-button").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/piedra-papel-o-tijera/game")})),t}},{path:/\/piedra-papel-o-tijera\/game/,component:function(e){const t=document.querySelector(".root");t.innerHTML='\n    <count-down></count-down>\n    <div class="options"> \n    <options-comp></options-comp>\n    </div> \n  ',console.log(d.data.currentGame);const n=t.querySelector(".options").children;for(const t of n)t.addEventListener("optionEvent",(t=>{const n=t.detail.type;d.setMove(n),d.computerMove(),d.saveData(),e.goTo("/piedra-papel-o-tijera/results")}));const o=document.createElement("style");return o.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  \n  ",t.appendChild(o),t}},{path:/\/piedra-papel-o-tijera\/results/,component:function(e){const t=document.querySelector(".root"),n=document.createElement("style");let o;return n.innerText="\n    .root{\n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      min-width: 375px;\n      min-height: 672px;\n      background-color: pink;\n    }\n    .score-conteiner{\n      display: flex;\n      flex-direction: column;\n      width: 259px;\n      height: 217px;\n      padding: 15px 30px;\n      background-color: #FFFFFF;\n      border: 10px solid #000000;\n      border-radius: 10px;\n    }\n    ",o=d.whoWins()?"win":"loose",t.innerHTML=`\n    <star-comp></star-comp>\n    <div class="score-conteiner"> \n    <my-text tag="h2">Puntaje</my-text>\n    <my-text tag="p" id="your-scrore">Vos:${d.getScore().loose}</my-text>\n    <my-text tag="p" id="computer-scrore">Máquina:${d.getScore().win}</my-text>\n    </div>\n    <my-button class="re-starButton">Volver a jugar</my-button>\n    <my-button class="clean-data">Borrar historial</my-button>\n    `,t.querySelector(".re-starButton").addEventListener("click",(t=>{t.preventDefault(),e.goTo("/piedra-papel-o-tijera/game")})),t.querySelector(".clean-data").addEventListener("click",(t=>{t.preventDefault(),d.cleanData(),e.goTo("/piedra-papel-o-tijera/welcome")})),t.appendChild(n),d.saveData(),t}}];!function(e){function t(e){history.pushState({},"",e),console.log("hola"),n(e)}function n(n){console.log("El handleRoute recibió una nueva ruta",n);for(const o of m)if(o.path.test(n)){const n=o.component({goTo:t});e.firstChild&&e.firstChild.remove(n)}}location.host.includes("github.io")?t("/piedra-papel-o-tijera"):n("/piedra-papel-o-tijera"),console.log(location.pathname),window.onpopstate=function(){n(location.pathname)}}(document.querySelector(".root")),d.init();
//# sourceMappingURL=index.8391e775.js.map
