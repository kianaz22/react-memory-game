(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{43:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(7),s=a.n(i),r=a(13),o=a(8),d=(a(43),a.p+"static/media/flip.693660e8.mp3"),j=a.p+"static/media/match.5b2ab9ec.mp3",l=a.p+"static/media/victory.65b2e1fa.mp3",m=a.p+"static/media/gameover.972ebe67.mp3",u=a(72),b=a(70),p=a(74),f=a(71),O=a(73),g=a(4),h=function(e){var t=e.flipCard,a=e.card,c=e.index,n=e.isMatched,i=e.isFlipped,s=e.freezeBoard,r=e.cardback;return Object(g.jsxs)("div",{className:"card ".concat(i||n?"flip":""),onClick:function(){!i&&!s&&t(c)},children:[Object(g.jsx)("img",{src:a.image,alt:"card",className:"front-face"}),Object(g.jsx)("img",{src:r,alt:"cardback",className:"back-face"})]})},v=a.p+"static/media/cardback.efe565ca.jpg",S=[{image:a.p+"static/media/KH.29ea744b.jpg",name:"kh"},{image:a.p+"static/media/AD.ae5c71ef.jpg",name:"ad"},{image:a.p+"static/media/QS.c118254e.jpg",name:"qs"},{image:a.p+"static/media/JC.6b98a121.jpg",name:"jc"},{image:a.p+"static/media/S5.8aa0d17d.jpg",name:"s5"},{image:a.p+"static/media/D2.a9f3d3c6.jpg",name:"d2"},{image:a.p+"static/media/7H.a307c5f6.jpg",name:"h7"},{image:a.p+"static/media/AS.f6db4b7a.jpg",name:"as"}];function x(e){for(var t=e.length;t>0;t--){var a=Math.floor(Math.random()*t),c=t-1,n=e[c];e[c]=e[a],e[a]=n}return e}var N=function(){var e=Object(c.useState)((function(){return x(S.concat(S))})),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),s=Object(o.a)(i,2),N=s[0],A=s[1],I=Object(c.useState)([]),k=Object(o.a)(I,2),y=k[0],E=k[1],w=Object(c.useState)(!1),M=Object(o.a)(w,2),C=M[0],T=M[1],Y=Object(c.useState)(0),B=Object(o.a)(Y,2),J=B[0],P=B[1],D=Object(c.useState)(60),F=Object(o.a)(D,2),G=F[0],L=F[1],z=Object(c.useState)(JSON.parse(localStorage.getItem("topScore"))||Number.POSITIVE_INFINITY),H=Object(o.a)(z,2),K=H[0],R=H[1],U=Object(c.useState)(!1),V=Object(o.a)(U,2),W=V[0],q=V[1],Q=Object(c.useState)(""),_=Object(o.a)(Q,2),X=_[0],Z=_[1],$=Object(c.useState)("PLAY"),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ce=Object(c.useRef)(null);Object(c.useEffect)((function(){q(!0),Z("you have 60 seconds to find all matching cards!")}),[]),Object(c.useEffect)((function(){2===N.length&&setTimeout(ie,500)}),[N]),Object(c.useEffect)((function(){se()}),[y]),Object(c.useEffect)((function(){0===G&&re()}),[G]);var ne=function(e){new Audio(d).play(),1===N.length?(A((function(t){return[].concat(Object(r.a)(t),[e])})),P((function(e){return e+1})),T(!0)):A([e])},ie=function(){var e=Object(o.a)(N,2),t=e[0],c=e[1];if(T(!1),a[t].name===a[c].name)return E((function(e){return[].concat(Object(r.a)(e),[a[t].name])})),new Audio(j).play(),void A([]);setTimeout((function(){A([])}),500)},se=function(){y.length===S.length&&(clearInterval(ce.current),new Audio(l).play(),q(!0),J<K?(R(J),localStorage.setItem("topScore",J),Z("YOU WON ! A new record : ".concat(J," moves"))):Z("YOU WON !"),ae("PLAY  AGAIN"))},re=function(){console.log("go"),clearInterval(ce.current),new Audio(m).play(),q(!0),Z("GAME OVER"),ae("PLAY  AGAIN")};return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsxs)("div",{className:"score-container",children:[Object(g.jsxs)("h2",{className:"timer",children:["Time : ",G]}),Object(g.jsxs)("h3",{className:"moves",children:["Moves ",J]}),Object(g.jsxs)("h3",{className:"high-score",children:["Top Score ",localStorage.getItem("topScore")]})]}),Object(g.jsx)("div",{className:"game-container",children:a.map((function(e,t){return Object(g.jsx)(h,{card:e,index:t,freezeBoard:C,isMatched:y.includes(e.name),isFlipped:N.includes(t),flipCard:ne,cardback:v},t)}))}),Object(g.jsxs)(u.a,{open:W,disableBackdropClick:!0,disableEscapeKeyDown:!0,"aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(b.a,{children:Object(g.jsx)(p.a,{id:"alert-dialog-description",children:X})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(O.a,{onClick:function(){E([]),A([]),q(!1),P(0),T(!1),n(x(S.concat(S))),L(60),ce.current=setInterval((function(){L((function(e){return e-1}))}),1e3)},color:"default",variant:"outlined",children:te})})]})]})};s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.bc485b98.chunk.js.map