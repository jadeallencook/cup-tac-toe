(this["webpackJsonpcup-tac-toe"]=this["webpackJsonpcup-tac-toe"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(8),i=c.n(r),l=(c(13),c(2)),s=c(3),o=c(4),j=(c(14),c(15),c(0));var d=function(e){var t=e.color,c=e.name,a=e.cups,n=e.isPlayersTurn,r=e.selectedSize,i=e.setSelectedSize;return Object(j.jsxs)("div",{className:"Player",style:{borderColor:n?t:"#666"},children:[Object(j.jsx)("span",{children:c}),Object(j.jsx)("ul",{children:["s","m","l","x"].map((function(e,c){return Object(j.jsxs)("li",{onClick:function(){n&&i(c)},children:[Object(j.jsx)("div",{className:"".concat(e,"-cup cup"),style:{borderColor:n&&r===c?"#FFF":"#3333"},children:Object(j.jsx)("div",{style:{backgroundColor:t}})}),Object(j.jsx)("div",{children:a[c]})]},"player-".concat(+n,"-").concat(e))}))})]})},u=function(e){for(var t=0,c=[0,1,2];t<c.length;t++){var a=c[t];if(void 0!==e[0][a].player&&e[0][a].player===e[1][a].player&&e[1][a].player===e[2][a].player||void 0!==e[a][0].player&&e[a][0].player===e[a][1].player&&e[a][1].player===e[a][2].player)return!0}return void 0!==e[0][0].player&&e[0][0].player===e[1][1].player&&e[1][1].player===e[2][2].player||void 0!==e[0][2].player&&e[0][2].player===e[1][1].player&&e[1][1].player===e[2][0].player},b=function(e,t){return{name:e,color:t,cups:[4,3,2,1]}},p=function(e,t,c){for(var a=t[c].cups.reduce((function(e,t,c){return t?c:e}),0),n=0,r=[].concat(Object(l.a)(e[0]),Object(l.a)(e[1]),Object(l.a)(e[2]));n<r.length;n++){var i=r[n];if(void 0===i.size||a>i.size)return!1}return!0},O=c.p+"static/media/move.4581501b.wav",y=c.p+"static/media/winner.9b7b599c.wav",v=new Audio(O),f=new Audio(y);var m=function(){var e=["s","m","l","x"],t=Object(a.useState)(!0),c=Object(o.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(0),O=Object(o.a)(i,2),y=O[0],m=O[1],h=Object(a.useState)([Object(s.a)({},b("Player 1","#7A89C2")),Object(s.a)({},b("Player 2","#87B38D"))]),x=Object(o.a)(h,2),S=x[0],z=x[1],C=Object(o.a)(S,2),_=C[0],g=C[1],F=Object(a.useState)([[{},{},{}],[{},{},{}],[{},{},{}]]),P=Object(o.a)(F,2),w=P[0],k=P[1];return u(w)&&f.play(),Object(j.jsxs)("div",{id:"App",children:[u(w)||p(w,S,+n)?null:Object(j.jsx)("div",{id:"board",className:"animate__animated  animate__flipInY",children:[].concat(Object(l.a)(w[0]),Object(l.a)(w[1]),Object(l.a)(w[2])).map((function(t,c){return Object(j.jsx)("div",{onClick:function(){var e=[Math.floor(c/3),c%3],t=e[0],a=e[1],i=S[+!n].cups[y];if((void 0===w[t][a].size||w[t][a].size<y)&&i&&!u(w)){var o=Object(s.a)({},w),j=Object(l.a)(S);o[t][a]={player:+!n,size:y},j[+!n].cups[y]=i-1,k(o),z(j),m(0),r(!n),v.play()}},children:t.size>-1?Object(j.jsx)("div",{style:{backgroundColor:void 0!==t.player?0===t.player?S[0].color:S[1].color:"#FFF"},className:"".concat(e[t.size],"-cell animate__animated animate__flipInX")}):null},"cell-".concat(c))}))}),u(w)||p(w,S,+n)?Object(j.jsxs)("div",{id:"winner",children:[Object(j.jsx)("h2",{children:u(w)?"".concat(S[+n].name," Wins!"):"TIE!"}),Object(j.jsx)("button",{onClick:function(){r(!0),z([Object(s.a)({},b("Player 1","#7A89C2")),Object(s.a)({},b("Player 2","#87B38D"))]),k([[{},{},{}],[{},{},{}],[{},{},{}]])},children:"New Game"})]}):Object(j.jsxs)("div",{id:"players",className:"animate__animated animate__flipInX",children:[Object(j.jsx)(d,Object(s.a)({isPlayersTurn:n,setSelectedSize:m,selectedSize:y},_)),Object(j.jsx)(d,Object(s.a)({isPlayersTurn:!n,setSelectedSize:m,selectedSize:y},g))]})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.dfe92de8.chunk.js.map