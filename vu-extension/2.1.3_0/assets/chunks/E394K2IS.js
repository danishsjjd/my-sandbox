var At=Object.defineProperty;var Mt=(t,n,r)=>n in t?At(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var T=(t,n,r)=>Mt(t,typeof n!="symbol"?n+"":n,r);import{G as Pt,m as ut,l as Dt,c as E,i as G,H as Bt,r as Yt,o as K,g as F,z as Z,b as C,F as dt,d as O,S as j,f as It}from"./B9oOvFnE.js";import{s as Lt,t as p,d as Nt,i as I,b as c,c as _,q as et,w as jt,u as zt}from"./BWdGfrob.js";function $n(){return Pt("settings",{quizSolver:!0,mathLatex:!0,lectureSkip:!0,printQuiz:!0,quizCopyPaste:!0,gdbCopyPaste:!0})}var _t=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Ct(t){const n={};let r;for(;r=_t.exec(t);)n[r[1]]=r[2];return n}function zn(t,n){if(typeof t=="string"){if(typeof n=="string")return`${t};${n}`;t=Ct(t)}else typeof n=="string"&&(n=Ct(n));return{...t,...n}}var Ft=p('<svg viewBox="0 0 24 24"width=1.2em height=1.2em><path fill=currentColor d=M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z opacity=.25></path><path fill=currentColor d=M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z><animateTransform attributeName=transform dur=0.75s repeatCount=indefinite type=rotate values="0 12 12;360 12 12">');const Hn=(t={})=>(()=>{var n=Ft();return Lt(n,t,!0,!0),n})();var Wt=p("<div class=sonner-loading-wrapper><div class=sonner-spinner>"),Rt=p("<div class=sonner-loading-bar>"),Ut=p('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"clip-rule=evenodd>'),Vt=p('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"clip-rule=evenodd>'),Kt=p('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"clip-rule=evenodd>'),qt=p('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"clip-rule=evenodd>'),Xt=p("<div class=sonner-loader>"),Zt=p('<button aria-label="Close toast"data-close-button><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>'),Gt=p('<li aria-atomic=true role=status tabindex=0 data-sonner-toast="">'),Qt=p('<div data-icon="">'),Jt=p('<div data-description="">'),tn=p('<div data-content=""><div data-title="">'),nn=p("<button data-button data-cancel>"),en=p('<button data-button="">'),an=p("<section tabindex=-1>"),rn=p("<ol tabindex=-1 data-sonner-toaster>");function on(t,{insertAt:n}={}){if(typeof document>"u")return;const r=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",n==="top"&&r.firstChild?r.insertBefore(d,r.firstChild):r.appendChild(d),d.styleSheet?d.styleSheet.cssText=t:d.appendChild(document.createTextNode(t))}on(`:where(html[dir=ltr]),
:where([data-sonner-toaster][dir=ltr]) {
  --toast-icon-margin-start: -3px;
  --toast-icon-margin-end: 4px;
  --toast-svg-margin-start: -1px;
  --toast-svg-margin-end: 0px;
  --toast-button-margin-start: auto;
  --toast-button-margin-end: 0;
  --toast-close-button-start: 0;
  --toast-close-button-end: unset;
  --toast-close-button-transform: translate(-35%, -35%);
}
:where(html[dir=rtl]),
:where([data-sonner-toaster][dir=rtl]) {
  --toast-icon-margin-start: 4px;
  --toast-icon-margin-end: -3px;
  --toast-svg-margin-start: 0px;
  --toast-svg-margin-end: -1px;
  --toast-button-margin-start: 0;
  --toast-button-margin-end: auto;
  --toast-close-button-start: unset;
  --toast-close-button-end: 0;
  --toast-close-button-transform: translate(35%, -35%);
}
:where([data-sonner-toaster]) {
  position: fixed;
  width: var(--width);
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  --gray1: hsl(0, 0%, 99%);
  --gray2: hsl(0, 0%, 97.3%);
  --gray3: hsl(0, 0%, 95.1%);
  --gray4: hsl(0, 0%, 93%);
  --gray5: hsl(0, 0%, 90.9%);
  --gray6: hsl(0, 0%, 88.7%);
  --gray7: hsl(0, 0%, 85.8%);
  --gray8: hsl(0, 0%, 78%);
  --gray9: hsl(0, 0%, 56.1%);
  --gray10: hsl(0, 0%, 52.3%);
  --gray11: hsl(0, 0%, 43.5%);
  --gray12: hsl(0, 0%, 9%);
  --border-radius: 8px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  z-index: 999999999;
}
:where([data-sonner-toaster][data-x-position=right]) {
  right: max(var(--offset), env(safe-area-inset-right));
}
:where([data-sonner-toaster][data-x-position=left]) {
  left: max(var(--offset), env(safe-area-inset-left));
}
:where([data-sonner-toaster][data-x-position=center]) {
  left: 50%;
  transform: translateX(-50%);
}
:where([data-sonner-toaster][data-y-position=top]) {
  top: max(var(--offset), env(safe-area-inset-top));
}
:where([data-sonner-toaster][data-y-position=bottom]) {
  bottom: max(var(--offset), env(safe-area-inset-bottom));
}
:where([data-sonner-toast]) {
  --y: translateY(100%);
  --lift-amount: calc(var(--lift) * var(--gap));
  z-index: var(--z-index);
  position: absolute;
  opacity: 0;
  transform: var(--y);
  filter: blur(0);
  touch-action: none;
  transition:
    transform 400ms,
    opacity 400ms,
    height 400ms,
    box-shadow 200ms;
  box-sizing: border-box;
  outline: none;
  overflow-wrap: anywhere;
}
:where([data-sonner-toast][data-styled=true]) {
  padding: 16px;
  background: var(--normal-bg);
  border: 1px solid var(--normal-border);
  color: var(--normal-text);
  border-radius: var(--border-radius);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: var(--width);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}
:where([data-sonner-toast]:focus-visible) {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}
:where([data-sonner-toast][data-y-position=top]) {
  top: 0;
  --y: translateY(-100%);
  --lift: 1;
  --lift-amount: calc(1 * var(--gap));
}
:where([data-sonner-toast][data-y-position=bottom]) {
  bottom: 0;
  --y: translateY(100%);
  --lift: -1;
  --lift-amount: calc(var(--lift) * var(--gap));
}
:where([data-sonner-toast]) :where([data-description]) {
  font-weight: 400;
  line-height: 1.4;
  color: inherit;
}
:where([data-sonner-toast]) :where([data-title]) {
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
}
:where([data-sonner-toast]) :where([data-icon]) {
  display: flex;
  height: 16px;
  width: 16px;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-left: var(--toast-icon-margin-start);
  margin-right: var(--toast-icon-margin-end);
}
:where([data-sonner-toast][data-promise=true]) :where([data-icon]) > svg {
  opacity: 0;
  transform: scale(0.8);
  transform-origin: center;
  animation: sonner-fade-in 300ms ease forwards;
}
:where([data-sonner-toast]) :where([data-icon]) > * {
  flex-shrink: 0;
}
:where([data-sonner-toast]) :where([data-icon]) svg {
  margin-left: var(--toast-svg-margin-start);
  margin-right: var(--toast-svg-margin-end);
}
:where([data-sonner-toast]) :where([data-content]) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
[data-sonner-toast][data-styled=true] [data-button] {
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 24px;
  font-size: 12px;
  color: var(--normal-bg);
  background: var(--normal-text);
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 400ms, box-shadow 200ms;
}
:where([data-sonner-toast]) :where([data-button]):focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
}
:where([data-sonner-toast]) :where([data-button]):first-of-type {
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
}
:where([data-sonner-toast]) :where([data-cancel]) {
  color: var(--normal-text);
  background: rgba(0, 0, 0, 0.08);
}
:where([data-sonner-toast][data-theme=dark]) :where([data-cancel]) {
  background: rgba(255, 255, 255, 0.3);
}
:where([data-sonner-toast]) :where([data-close-button]) {
  position: absolute;
  left: var(--toast-close-button-start);
  right: var(--toast-close-button-end);
  top: 0;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: var(--gray1);
  color: var(--gray12);
  border: 1px solid var(--gray4);
  transform: var(--toast-close-button-transform);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition:
    opacity 100ms,
    background 200ms,
    border-color 200ms;
}
:where([data-sonner-toast]) :where([data-close-button]):focus-visible {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}
:where([data-sonner-toast]) :where([data-disabled=true]) {
  cursor: not-allowed;
}
:where([data-sonner-toast]):hover :where([data-close-button]):hover {
  background: var(--gray2);
  border-color: var(--gray5);
}
:where([data-sonner-toast][data-swiping=true])::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
}
:where([data-sonner-toast][data-y-position=top][data-swiping=true])::before {
  bottom: 50%;
  transform: scaleY(3) translateY(50%);
}
:where([data-sonner-toast][data-y-position=bottom][data-swiping=true])::before {
  top: 50%;
  transform: scaleY(3) translateY(-50%);
}
:where([data-sonner-toast][data-swiping=false][data-removed=true])::before {
  content: "";
  position: absolute;
  inset: 0;
  transform: scaleY(2);
}
:where([data-sonner-toast])::after {
  content: "";
  position: absolute;
  left: 0;
  height: calc(var(--gap) + 1px);
  bottom: 100%;
  width: 100%;
}
:where([data-sonner-toast][data-mounted=true]) {
  --y: translateY(0);
  opacity: 1;
}
:where([data-sonner-toast][data-expanded=false][data-front=false]) {
  --scale: var(--toasts-before) * 0.05 + 1;
  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));
  height: var(--front-toast-height);
}
:where([data-sonner-toast]) > * {
  transition: opacity 400ms;
}
:where([data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]) > * {
  opacity: 0;
}
:where([data-sonner-toast][data-visible=false]) {
  opacity: 0;
  pointer-events: none;
}
:where([data-sonner-toast][data-mounted=true][data-expanded=true]) {
  --y: translateY(calc(var(--lift) * var(--offset)));
  height: var(--initial-height);
}
:where([data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]) {
  --y: translateY(calc(var(--lift) * -100%));
  opacity: 0;
}
:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]) {
  --y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));
  opacity: 0;
}
:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]) {
  --y: translateY(40%);
  opacity: 0;
  transition: transform 500ms, opacity 200ms;
}
:where([data-sonner-toast][data-removed=true][data-front=false])::before {
  height: calc(var(--initial-height) + 20%);
}
[data-sonner-toast][data-swiping=true] {
  transform: var(--y) translateY(var(--swipe-amount, 0px));
  transition: none;
}
[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],
[data-sonner-toast][data-swipe-out=true][data-y-position=top] {
  animation: swipe-out 200ms ease-out forwards;
}
@keyframes swipe-out {
  from {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));
    opacity: 1;
  }
  to {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));
    opacity: 0;
  }
}
@media (max-width: 600px) {
  [data-sonner-toaster] {
    position: fixed;
    --mobile-offset: 16px;
    right: var(--mobile-offset);
    left: var(--mobile-offset);
    width: 100%;
  }
  [data-sonner-toaster] [data-sonner-toast] {
    left: 0;
    right: 0;
    width: calc(100% - var(--mobile-offset) * 2);
  }
  [data-sonner-toaster][data-x-position=left] {
    left: var(--mobile-offset);
  }
  [data-sonner-toaster][data-y-position=bottom] {
    bottom: 20px;
  }
  [data-sonner-toaster][data-y-position=top] {
    top: 20px;
  }
  [data-sonner-toaster][data-x-position=center] {
    left: var(--mobile-offset);
    right: var(--mobile-offset);
    transform: none;
  }
}
[data-sonner-toaster][data-theme=light] {
  --normal-bg: #fff;
  --normal-border: var(--gray4);
  --normal-text: var(--gray12);
  --success-bg: hsl(143, 85%, 96%);
  --success-border: hsl(145, 92%, 91%);
  --success-text: hsl(140, 100%, 27%);
  --info-bg: hsl(208, 100%, 97%);
  --info-border: hsl(221, 91%, 91%);
  --info-text: hsl(210, 92%, 45%);
  --warning-bg: hsl(49, 100%, 97%);
  --warning-border: hsl(49, 91%, 91%);
  --warning-text: hsl(31, 92%, 45%);
  --error-bg: hsl(359, 100%, 97%);
  --error-border: hsl(359, 100%, 94%);
  --error-text: hsl(360, 100%, 45%);
}
[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
}
[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true] {
  --normal-bg: #fff;
  --normal-border: var(--gray3);
  --normal-text: var(--gray12);
}
[data-sonner-toaster][data-theme=dark] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
  --success-bg: hsl(150, 100%, 6%);
  --success-border: hsl(147, 100%, 12%);
  --success-text: hsl(150, 86%, 65%);
  --info-bg: hsl(215, 100%, 6%);
  --info-border: hsl(223, 100%, 12%);
  --info-text: hsl(216, 87%, 65%);
  --warning-bg: hsl(64, 100%, 6%);
  --warning-border: hsl(60, 100%, 12%);
  --warning-text: hsl(46, 87%, 65%);
  --error-bg: hsl(358, 76%, 10%);
  --error-border: hsl(357, 89%, 16%);
  --error-text: hsl(358, 100%, 81%);
}
[data-rich-colors=true] [data-sonner-toast][data-type=success] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=info] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=warning] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=error] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}
.sonner-loading-wrapper {
  --size: 16px;
  height: var(--size);
  width: var(--size);
  position: absolute;
  inset: 0;
  z-index: 10;
}
.sonner-loading-wrapper[data-visible=false] {
  transform-origin: center;
  animation: sonner-fade-out 0.2s ease forwards;
}
.sonner-spinner {
  position: relative;
  top: 50%;
  left: 50%;
  height: var(--size);
  width: var(--size);
}
.sonner-loading-bar {
  animation: sonner-spin 1.2s linear infinite;
  background: var(--gray11);
  border-radius: 6px;
  height: 8%;
  left: -10%;
  position: absolute;
  top: -3.9%;
  width: 24%;
}
.sonner-loading-bar:nth-child(1) {
  animation-delay: -1.2s;
  transform: rotate(0.0001deg) translate(146%);
}
.sonner-loading-bar:nth-child(2) {
  animation-delay: -1.1s;
  transform: rotate(30deg) translate(146%);
}
.sonner-loading-bar:nth-child(3) {
  animation-delay: -1s;
  transform: rotate(60deg) translate(146%);
}
.sonner-loading-bar:nth-child(4) {
  animation-delay: -0.9s;
  transform: rotate(90deg) translate(146%);
}
.sonner-loading-bar:nth-child(5) {
  animation-delay: -0.8s;
  transform: rotate(120deg) translate(146%);
}
.sonner-loading-bar:nth-child(6) {
  animation-delay: -0.7s;
  transform: rotate(150deg) translate(146%);
}
.sonner-loading-bar:nth-child(7) {
  animation-delay: -0.6s;
  transform: rotate(180deg) translate(146%);
}
.sonner-loading-bar:nth-child(8) {
  animation-delay: -0.5s;
  transform: rotate(210deg) translate(146%);
}
.sonner-loading-bar:nth-child(9) {
  animation-delay: -0.4s;
  transform: rotate(240deg) translate(146%);
}
.sonner-loading-bar:nth-child(10) {
  animation-delay: -0.3s;
  transform: rotate(270deg) translate(146%);
}
.sonner-loading-bar:nth-child(11) {
  animation-delay: -0.2s;
  transform: rotate(300deg) translate(146%);
}
.sonner-loading-bar:nth-child(12) {
  animation-delay: -0.1s;
  transform: rotate(330deg) translate(146%);
}
@keyframes sonner-fade-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes sonner-fade-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes sonner-spin {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.15;
  }
}
@media (prefers-reduced-motion) {
  [data-sonner-toast],
  [data-sonner-toast] > *,
  .sonner-loading-bar {
    transition: none !important;
    animation: none !important;
  }
}
.sonner-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition: opacity 200ms, transform 200ms;
}
.sonner-loader[data-visible=false] {
  opacity: 0;
  transform: scale(0.8) translate(-50%, -50%);
}
`);var sn=Array(12).fill(0);function ln(t){return(()=>{var n=Wt(),r=n.firstChild;return I(r,C(dt,{each:sn,children:()=>Rt()})),O(()=>c(n,"data-visible",t.visible)),n})()}function dn(){return Ut()}function cn(){return Vt()}function un(){return Kt()}function hn(){return qt()}function gn(t){switch(t){case"success":return dn;case"info":return un;case"warning":return cn;case"error":return hn;default:return null}}var ct=0,fn=class{constructor(){T(this,"subscribers");T(this,"toasts");T(this,"subscribe",t=>(this.subscribers.push(t),()=>{const n=this.subscribers.indexOf(t);this.subscribers.splice(n,1)}));T(this,"publish",t=>{this.subscribers.forEach(n=>n(t))});T(this,"addToast",t=>{this.publish(t),this.toasts=[...this.toasts,t]});T(this,"create",t=>{var b;const{message:n,...r}=t,d=typeof(t==null?void 0:t.id)=="number"||t.id&&((b=t.id)==null?void 0:b.length)>0?t.id:ct++;return this.toasts.find(w=>w.id===d)?this.toasts=this.toasts.map(w=>w.id===d?(this.publish({...w,...t,id:d,title:n}),{...w,...t,id:d,title:n}):w):this.addToast({title:n,...r,id:d}),d});T(this,"dismiss",t=>(t||this.toasts.forEach(n=>{this.subscribers.forEach(r=>r({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:t,dismiss:!0})),t));T(this,"message",(t,n)=>this.create({...n,message:t}));T(this,"error",(t,n)=>this.create({...n,message:t,type:"error"}));T(this,"success",(t,n)=>this.create({...n,type:"success",message:t}));T(this,"info",(t,n)=>this.create({...n,type:"info",message:t}));T(this,"warning",(t,n)=>this.create({...n,type:"warning",message:t}));T(this,"promise",(t,n)=>{if(!n)return;let r;n.loading!==void 0&&(r=this.create({...n,promise:t,type:"loading",message:n.loading}));const d=t instanceof Promise?t:t();let A=r!==void 0;return d.then(b=>{if(b&&typeof b.ok=="boolean"&&!b.ok){A=!1;const w=typeof n.error=="function"?n.error(`HTTP error! status: ${b.status}`):n.error;this.create({id:r,type:"error",message:w})}else if(n.success!==void 0){A=!1;const w=typeof n.success=="function"?n.success(b):n.success;this.create({id:r,type:"success",message:w})}}).catch(b=>{if(n.error!==void 0){A=!1;const w=typeof n.error=="function"?n.error(b):n.error;this.create({id:r,type:"error",message:w})}}).finally(()=>{var b;A&&(this.dismiss(r),r=void 0),(b=n.finally)==null||b.call(n)}),r});T(this,"loading",(t,n)=>this.create({...n,type:"loading",message:t}));T(this,"custom",(t,n)=>{const r=(n==null?void 0:n.id)||ct++;return this.publish({jsx:t(r),id:r,...n}),r});this.subscribers=[],this.toasts=[]}},H=new fn;function mn(t,n){const r=(n==null?void 0:n.id)||ct++;return H.addToast({title:t,...n,id:r}),r}var vn=mn,On=Object.assign(vn,{success:H.success,info:H.info,warning:H.warning,error:H.error,custom:H.custom,message:H.message,promise:H.promise,dismiss:H.dismiss,loading:H.loading});function bn(){const[t,n]=E(!1);return G(()=>{const r=()=>{n(document.hidden)};document.addEventListener("visibilitychange",r),K(()=>{window.removeEventListener("visibilitychange",r)})}),t}var yn=3,wn="32px",xn=4e3,pn=356,Ht=14,Tn=20,Sn=200;function V(...t){return t.filter(Boolean).join(" ")}var kn=t=>{const[n,r]=E(!1),[d,A]=E(!1),[b,w]=E(!1),[Q,D]=E(!1),[J,W]=E(0),[$,tt]=E(0);let y;const q=()=>t.index===0,nt=()=>t.index+1<=t.visibleToasts,k=()=>t.toast.type,at=()=>t.toast.class||"",X=()=>t.toast.descriptionClass||"",rt=ut({gap:Ht},t),h=()=>t.heights.findIndex(o=>o.toastId===t.toast.id)||0,g=()=>t.toast.duration||t.duration||xn;let z=0,B=0;const[Y,f]=E(null),R=()=>t.position.split("-"),u=()=>t.heights.reduce((o,x,e)=>e>=h()?o:o+x.height,0),M=bn(),i=()=>t.toast.invert||t.invert,U=()=>k()==="loading",L=()=>h()*rt.gap+u();function ot(){var o;return(o=t.icons)!=null&&o.loading?(()=>{var x=Xt();return I(x,()=>t.icons.loading),O(()=>c(x,"data-visible",k()==="loading")),x})():C(ln,{get visible(){return k()==="loading"}})}G(()=>{r(!0)}),G(()=>{const o=y,x=o.style.height;o.style.height="auto";const e=o.getBoundingClientRect().height;o.style.height=x,tt(e),F(()=>{t.setHeights(a=>a.find(l=>l.toastId===t.toast.id)?a.map(l=>l.toastId===t.toast.id?{...l,height:e}:l):[{toastId:t.toast.id,height:e,position:t.toast.position},...a])})});const P=()=>{A(!0),W(L()),t.setHeights(o=>o.filter(x=>x.toastId!==t.toast.id)),setTimeout(()=>{t.removeToast(t.toast)},Sn)};let st=g();return F(Z(()=>[t.expanded,t.interacting,t.toast,g(),t.toast.promise,k(),t.pauseWhenPageIsHidden,M()],([o,x,e,a,s,l,m,v])=>{if(s&&l==="loading"||a===Number.POSITIVE_INFINITY)return;let S;o||x||m&&v?(()=>{if(B<z){const N=new Date().getTime()-z;st=st-N}B=new Date().getTime()})():(()=>{z=new Date().getTime(),S=setTimeout(()=>{var N;(N=e.onAutoClose)==null||N.call(e,e),P()},st)})(),K(()=>{clearTimeout(S)})})),F(Z(()=>t.toast.id,o=>{const x=y;if(x){const e=x.getBoundingClientRect().height;tt(e),t.setHeights(a=>[{toastId:o,height:e,position:t.toast.position},...a]),K(()=>{t.setHeights(a=>a.filter(s=>s.toastId!==o))})}})),F(Z(()=>t.toast.delete,o=>{o&&P()})),(()=>{var o=Gt();o.$$pointermove=e=>{if(!Y())return;const a=e.clientY-Y().y,s=e.clientX-Y().x,m=(R()[0]==="top"?Math.min:Math.max)(0,a),v=e.pointerType==="touch"?10:2;Math.abs(m)>v?y==null||y.style.setProperty("--swipe-amount",`${a}px`):Math.abs(s)>v&&f(null)},o.$$pointerup=()=>{var a,s;if(Q())return;f(null);const e=Number((y==null?void 0:y.style.getPropertyValue("--swipe-amount").replace("px",""))||0);if(Math.abs(e)>=Tn){W(L()),(s=(a=t.toast).onDismiss)==null||s.call(a,t.toast),P(),D(!0);return}y==null||y.style.setProperty("--swipe-amount","0px"),w(!1)},o.$$pointerdown=e=>{U()||(W(L()),e.target.setPointerCapture(e.pointerId),e.target.tagName!=="BUTTON"&&(w(!0),f({x:e.clientX,y:e.clientY})))};var x=y;return typeof x=="function"?zt(x,o):y=o,I(o,C(j,{get when(){return t.closeButton&&!t.toast.jsx},get children(){var e=Zt();return jt(e,"click",U()?void 0:()=>{var a,s;P(),(s=(a=t.toast).onDismiss)==null||s.call(a,t.toast)},!0),O(a=>{var m,v,S;var s=U(),l=V((m=t.classes)==null?void 0:m.closeButton,(S=(v=t.toast)==null?void 0:v.classes)==null?void 0:S.closeButton);return s!==a.e&&c(e,"data-disabled",a.e=s),l!==a.t&&_(e,a.t=l),a},{e:void 0,t:void 0}),e}}),null),I(o,C(j,{get when(){return t.toast.jsx||t.toast.title instanceof Element},get fallback(){return[C(j,{get when(){return k()||t.toast.icon||t.toast.promise},get children(){var e=Qt();return I(e,(()=>{var a=It(()=>!!(t.toast.promise||t.toast.type==="loading"&&!t.toast.icon));return()=>a()?t.toast.icon||ot():null})(),null),I(e,(()=>{var a=It(()=>t.toast.type!=="loading");return()=>{var s;return a()?t.toast.icon||((s=t.icons)==null?void 0:s[k()])||gn(k())():null}})(),null),e}}),(()=>{var e=tn(),a=e.firstChild;return I(a,()=>t.toast.title),I(e,C(j,{get when(){return t.toast.description},get children(){var s=Jt();return I(s,()=>t.toast.description),O(()=>{var l,m,v;return _(s,V(t.descriptionClass,X(),(l=t.classes)==null?void 0:l.description,(v=(m=t.toast)==null?void 0:m.classes)==null?void 0:v.description))}),s}}),null),O(()=>{var s,l,m;return _(a,V((s=t.classes)==null?void 0:s.title,(m=(l=t.toast)==null?void 0:l.classes)==null?void 0:m.title))}),e})(),C(j,{get when(){return t.toast.cancel},get children(){var e=nn();return e.$$click=()=>{var a;P(),(a=t.toast.cancel)!=null&&a.onClick&&t.toast.cancel.onClick()},I(e,()=>t.toast.cancel.label),O(a=>{var m,v,S;var s=t.toast.cancelButtonStyle||t.cancelButtonStyle,l=V((m=t.classes)==null?void 0:m.cancelButton,(S=(v=t.toast)==null?void 0:v.classes)==null?void 0:S.cancelButton);return a.e=et(e,s,a.e),l!==a.t&&_(e,a.t=l),a},{e:void 0,t:void 0}),e}}),C(j,{get when(){return t.toast.action},get children(){var e=en();return e.$$click=a=>{var s;(s=t.toast.action)==null||s.onClick(a),!a.defaultPrevented&&P()},I(e,()=>t.toast.action.label),O(a=>{var m,v,S;var s=t.toast.actionButtonStyle||t.actionButtonStyle,l=V((m=t.classes)==null?void 0:m.actionButton,(S=(v=t.toast)==null?void 0:v.classes)==null?void 0:S.actionButton);return a.e=et(e,s,a.e),l!==a.t&&_(e,a.t=l),a},{e:void 0,t:void 0}),e}})]},get children(){return t.toast.jsx||t.toast.title}}),null),O(e=>{var wt,xt,pt,Tt,St,kt,Et;var a=t.toast.important?"assertive":"polite",s=V(t.class,at(),(wt=t.classes)==null?void 0:wt.toast,(pt=(xt=t.toast)==null?void 0:xt.classes)==null?void 0:pt.toast,(Tt=t.classes)==null?void 0:Tt.default,(St=t.classes)==null?void 0:St[k()],(Et=(kt=t.toast)==null?void 0:kt.classes)==null?void 0:Et[k()]),l=!(t.toast.jsx||t.toast.unstyled||t.unstyled),m=n(),v=!!t.toast.promise,S=d(),it=nt(),lt=R()[0],N=R()[1],ht=t.index,gt=q(),ft=b(),mt=k(),vt=i(),bt=Q(),yt=!!(t.expanded||t.expandByDefault&&n()),Ot={"--index":t.index,"--toasts-before":t.index,"--z-index":t.toasts.length-t.index,"--offset":`${d()?J():L()}px`,"--initial-height":t.expandByDefault?"auto":`${$()}px`,...t.style,...t.toast.style};return a!==e.e&&c(o,"aria-live",e.e=a),s!==e.t&&_(o,e.t=s),l!==e.a&&c(o,"data-styled",e.a=l),m!==e.o&&c(o,"data-mounted",e.o=m),v!==e.i&&c(o,"data-promise",e.i=v),S!==e.n&&c(o,"data-removed",e.n=S),it!==e.s&&c(o,"data-visible",e.s=it),lt!==e.h&&c(o,"data-y-position",e.h=lt),N!==e.r&&c(o,"data-x-position",e.r=N),ht!==e.d&&c(o,"data-index",e.d=ht),gt!==e.l&&c(o,"data-front",e.l=gt),ft!==e.u&&c(o,"data-swiping",e.u=ft),mt!==e.c&&c(o,"data-type",e.c=mt),vt!==e.w&&c(o,"data-invert",e.w=vt),bt!==e.m&&c(o,"data-swipe-out",e.m=bt),yt!==e.f&&c(o,"data-expanded",e.f=yt),e.y=et(o,Ot,e.y),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),o})()};function $t(){if(typeof window>"u"||typeof document>"u")return"ltr";const t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var En=t=>{const n=ut({position:"bottom-right",hotkey:["altKey","KeyT"],theme:"light",visibleToasts:yn,dir:$t()},t),[r,d]=Dt({toasts:[]}),A=()=>Array.from(new Set([n.position].concat(r.toasts.filter(h=>h.position).map(h=>h.position)))),[b,w]=E([]),[Q,D]=E(!1),[J,W]=E(!1);let $;const tt=()=>n.hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,""),[y,q]=E(null),[nt,k]=E(!1),[at,X]=E(n.theme!=="system"?n.theme:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),rt=h=>d("toasts",g=>g.filter(({id:z})=>z!==h.id));return G(()=>{const h=H.subscribe(g=>{if(g.dismiss){d("toasts",Bt(B=>{B.forEach(Y=>{Y.id===g.id&&(Y.delete=!0)})}));return}const z=r.toasts.findIndex(B=>B.id===g.id);if(z!==-1){d("toasts",[z],Yt(g));return}d("toasts",Bt(B=>{B.unshift(g)}))});K(()=>{h()})}),F(Z(()=>n.theme,h=>{if(h!=="system"){X(h);return}typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:g})=>{X(g?"dark":"light")})})),F(()=>{r.toasts.length<=1&&D(!1)}),G(()=>{const h=g=>{n.hotkey.every(B=>g[B]||g.code===B)&&(D(!0),$==null||$.focus()),g.code==="Escape"&&(document.activeElement===$||$!=null&&$.contains(document.activeElement))&&D(!1)};document.addEventListener("keydown",h),K(()=>{document.removeEventListener("keydown",h)})}),F(Z(()=>$,h=>{h&&K(()=>{var g;y()&&((g=y())==null||g.focus({preventScroll:!0}),q(null),k(!1))})})),C(j,{get when(){return r.toasts.length>0},get children(){var h=an();return I(h,C(dt,{get each(){return A()},children:(g,z)=>{const[B,Y]=g.split("-");return(()=>{var f=rn();f.$$pointerup=()=>W(!1),f.$$pointerdown=()=>{W(!0)},f.addEventListener("mouseleave",()=>{J()||D(!1)}),f.$$mousemove=()=>D(!0),f.addEventListener("mouseenter",()=>D(!0)),f.addEventListener("focus",u=>{nt()||(k(!0),q(u.relatedTarget))}),f.addEventListener("blur",u=>{var M;nt()&&!u.currentTarget.contains(u.relatedTarget)&&(k(!1),y()&&((M=y())==null||M.focus({preventScroll:!0}),q(null)))});var R=$;return typeof R=="function"?zt(R,f):$=f,c(f,"data-y-position",B),c(f,"data-x-position",Y),I(f,C(dt,{get each(){return r.toasts.filter(u=>!u.position&&z()===0||u.position===g)},children:(u,M)=>C(kn,{get index(){return M()},get icons(){return n.icons},toast:u,get duration(){var i;return((i=n.toastOptions)==null?void 0:i.duration)??t.duration},get class(){var i;return(i=n.toastOptions)==null?void 0:i.class},get classes(){var i;return(i=n.toastOptions)==null?void 0:i.classes},get cancelButtonStyle(){var i;return(i=n.toastOptions)==null?void 0:i.cancelButtonStyle},get actionButtonStyle(){var i;return(i=n.toastOptions)==null?void 0:i.actionButtonStyle},get descriptionClass(){var i;return(i=n.toastOptions)==null?void 0:i.descriptionClass},get invert(){return!!n.invert},get visibleToasts(){return n.visibleToasts},get closeButton(){return!!n.closeButton},get interacting(){return J()},get position(){return n.position},get style(){var i;return(i=n.toastOptions)==null?void 0:i.style},get unstyled(){var i;return(i=n.toastOptions)==null?void 0:i.unstyled},removeToast:rt,get toasts(){return r.toasts},get heights(){return b()},setHeights:w,get expandByDefault(){return!!n.expand},get gap(){return n.gap},get expanded(){return Q()},get pauseWhenPageIsHidden(){return n.pauseWhenPageIsHidden}})})),O(u=>{var P;var M=n.dir==="auto"?$t():n.dir,i=n.class,U=at(),L=n.richColors,ot={"--front-toast-height":`${(P=b()[0])==null?void 0:P.height}px`,"--offset":typeof n.offset=="number"?`${n.offset}px`:n.offset||wn,"--width":`${pn}px`,"--gap":`${Ht}px`,...n.style};return M!==u.e&&c(f,"dir",u.e=M),i!==u.t&&_(f,u.t=i),U!==u.a&&c(f,"data-theme",u.a=U),L!==u.o&&c(f,"data-rich-colors",u.o=L),u.i=et(f,ot,u.i),u},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),f})()}})),O(()=>c(h,"aria-label",`Notifications ${tt()}`)),h}})};/*!
 * Original code by Emil Kowalski
 * MIT Licensed, Copyright 2023 Emil Kowalski, see https://github.com/emilkowalski/sonner/blob/main/LICENSE.md for details
 *
 * Credits:
 * https://github.com/emilkowalski/sonner/blob/main/src/index.tsx
 */Nt(["pointerdown","pointerup","pointermove","click","mousemove"]);const An=t=>C(En,ut({class:"toaster group",closeButton:!0,toastOptions:{classes:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}},t));export{Hn as S,An as T,zn as c,On as t,$n as u};
