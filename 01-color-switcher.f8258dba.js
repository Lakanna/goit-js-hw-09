!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=null;function o(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));console.log(n),t.body.style.backgroundColor=n}t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(function(){if(!t.btnStop.disabled)return;t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval(o,1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(n),t.btnStart.disabled=!1,t.btnStop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.f8258dba.js.map