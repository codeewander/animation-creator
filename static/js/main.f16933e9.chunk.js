(this["webpackJsonpanimation-creator"]=this["webpackJsonpanimation-creator"]||[]).push([[0],{22:function(r,o,n){},31:function(r,o,n){"use strict";n.r(o),n.d(o,"store",(function(){return Q}));var t,a,c=n(0),e=n.n(c),l=n(9),x=n.n(l),y=(n(22),n(2)),s=(n.p,n(3)),p=n(5),f=n(1),i=s.a.div(t||(t=Object(y.a)(["\n    width: 75px;\n    margin: auto;\n    grid-area: palette;\n"]))),E=s.a.div(a||(a=Object(y.a)(["\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin: 4px;\n    border: 1px solid #cdcdcd;\n    background-color: ",";\n    outline: none;\n    &:hover {\n        border: 1px solid transparent;\n        cursor: pointer;\n        outline: 2px dotted #ffc107;\n    }\n    &.active {\n        border: 1px solid transparent;\n        box-shadow: 0px 0px 5px 5px #ffc107;\n    }\n"])),(function(r){return r.color}));var b,u,d=function(){var r=Object(p.c)((function(r){return r.palette})),o=r.colors,n=r.currentColor,t=Object(p.b)();return Object(f.jsx)(i,{children:o.map((function(r){return Object(f.jsx)(E,{color:r,className:r===n?"active":null,onClick:function(){return t({type:"UPDATE_COLOR",color:r})}},r)}))})},j=s.a.div(b||(b=Object(y.a)(["\n    display: grid;\n    grid-template-columns: repeat(8, 32px);\n    grid-template-rows: repeat(8, 32px);\n    margin: auto;\n    grid-area: canvas;\n"]))),O=s.a.div(u||(u=Object(y.a)(["\n    width: 30px;\n    height: 30px;\n    background-color: ",";\n    display: inline-block;\n    border: 1px solid #cdcdcd;\n    cursor: pointer;\n    &:hover {\n        border: 1px solid #fff;\n    }\n"])),(function(r){return r.color}));var F,m=function(){var r=Object(p.c)((function(r){return r.frames})).canvasArray,o=Object(p.c)((function(r){return r.palette})).currentColor,n=Object(p.b)();return Object(f.jsx)(j,{children:r.map((function(r,t){return Object(f.jsx)(O,{color:r.color,x:r.x,y:r.y,onClick:function(){n(function(r,o){return{type:"UPDATE_PIXEL_COLOR",index:r,currentColor:o}}(t,o))}},"".concat(r.x,"-").concat(r.y))}))})},g=s.a.div(F||(F=Object(y.a)(["\n    box-sizing: border-box;\n    width: ","px;\n    height: ","px;\n    background: ",";\n"])),(function(r){return r.size}),(function(r){return r.size}),(function(r){return r.color}));var v,h,A=function(r){var o=r.size,n=r.data,t=void 0===n?[]:n;return Object(f.jsx)(f.Fragment,{children:t.map((function(r){return Object(f.jsx)(g,{size:o,color:r.color},"".concat(r.x,"-").concat(r.y))}))})},C=s.a.div(v||(v=Object(y.a)(["\n    display: flex;\n    flex-wrap: no-wrap;\n    overflow-x: scroll;\n    margin: 0 auto;\n    justify-content: center;\n    grid-area: frames;\n    max-width: 700px;\n"]))),w=s.a.div(h||(h=Object(y.a)(["\n    display: grid;\n    grid-template-columns: ",";\n    grid-template-rows: ",";\n    cursor: pointer;\n    margin: auto;\n    border: 1px solid #cdcdcd;\n    margin: 5px;\n    box-shadow: ",";\n    background: ",";\n    /* &:hover {\n        background: rgba(255, 255, 255, 0.2);\n    } */\n"])),(function(r){return"repeat(8, ".concat(r.size,"px)")}),(function(r){return"repeat(8, ".concat(r.size,"px)")}),(function(r){return r.isTargetFrame?"0px 0px 3px 3px #cdcdcd":null}),(function(r){return r.isTargetFrame?"#cdcdcd":null}));var T,k=function(){var r=Object(p.c)((function(r){return r.frames})),o=r.frames,n=r.currentFrame,t=Object(p.b)();return Object(f.jsx)(C,{children:o.map((function(r,o){var a=n===o;return Object(f.jsx)(w,{onClick:function(){return t({type:"UPDATE_CURRENT_FRAME",index:o})},isTargetFrame:a,size:6,children:Object(f.jsx)(A,{size:6,data:r})},o)}))})},D=n(17),R=s.a.div(T||(T=Object(y.a)(["\n    display: grid;\n    grid-template-columns: ",";\n    grid-template-rows: ",";\n    width: 130px;\n    outline: none;\n    height: 130px;\n    border: 4px solid rgba(255, 255, 255, 0.2);\n    padding: 5px;\n    margin: auto;\n    background: rgba(0, 0, 0, 0.4);\n    box-shadow: ",";\n    grid-area: animation;\n"])),(function(r){return"repeat(8, ".concat(r.size,"px)")}),(function(r){return"repeat(8, ".concat(r.size,"px)")}),(function(r){return r.isTargetFrame?"0px 0px 5px 5px #cdcdcd":null}));var _,P,z=function(){var r=Object(p.c)((function(r){return r.frames})).frames,o=Object(c.useState)(0),n=Object(D.a)(o,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){clearTimeout(undefined);var o=setTimeout((function(){var o=t+1;o>r.length-1&&(o=0),a(o)}),100);return function(){return clearTimeout(o)}})),Object(f.jsx)(R,{size:16,children:Object(f.jsx)(A,{size:16,data:r[t]})})},M=s.a.div(_||(_=Object(y.a)(["\n    display: flex;\n    margin-top: 30px;\n    justify-content: center;\n    grid-area: controllers;\n"]))),L=s.a.button(P||(P=Object(y.a)(["\n    margin: 5px;\n    width: 80px;\n    background: #ffc107;\n    border: none;\n    color: #fff;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-weight: 800;\n    border-radius: 5px;\n    &:hover {\n        background: rgba(255, 193, 7, 0.2);\n    }\n"])));var U,S=function(){var r=Object(p.b)(),o=Object(p.c)((function(r){return r.frames})).frames;return Object(f.jsxs)(M,{children:[Object(f.jsx)(L,{onClick:function(){return r({type:"ADD_FRAME"})},children:"Add"}),Object(f.jsx)(L,{onClick:function(){o.length>1&&r({type:"DELETE_FRAME"})},children:"Delete"}),Object(f.jsx)(L,{onClick:function(){return r({type:"COPY_FRAME"})},children:"Copy"}),Object(f.jsx)(L,{onClick:function(){return r({type:"PASTE_FRAME"})},children:"Paste"})]})},N=s.a.div(U||(U=Object(y.a)(['\n    width: 700px;\n    height: 500px;\n    margin: auto;\n    display: grid;\n    grid-template-areas:\n        "palette  canvas animation"\n        "frames frames frames"\n        "controllers controllers controllers";\n    grid-template-rows: 1fr 64px 70px;\n    grid-template-columns: 80px 1fr 150px;\n'])));var B=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{style:{textAlign:"center"},children:"Animation Creator"}),Object(f.jsxs)(N,{children:[Object(f.jsx)(d,{}),Object(f.jsx)(m,{}),Object(f.jsx)(z,{}),Object(f.jsx)(k,{}),Object(f.jsx)(S,{})]})]})},I=function(r){r&&r instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(o){var n=o.getCLS,t=o.getFID,a=o.getFCP,c=o.getLCP,e=o.getTTFB;n(r),t(r),a(r),c(r),e(r)}))},J=n(7),X=n(4),Y=["transparent","#FFFFFF","#E7C09D","#c5a487","#8B5C33","#5E2C00","#FD7FFF","#EF0033","#FF6633","#FFB500","#EEFF00","#99EE00","#33CC00","#00CFFC","#006FCF","#004b8c","#4F00DF","#A900DA","#000000","#222222","#666666","#AAAAAA"],q={colors:Y,currentColor:Y[1]};var G=[[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"#ffEE00"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"#ffb500"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"#ffb500"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"transparent"},{x:1,y:1,color:"transparent"},{x:2,y:1,color:"transparent"},{x:3,y:1,color:"#ffEE00"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"#ffb500"},{x:6,y:1,color:"#ffb500"},{x:7,y:1,color:"transparent"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"transparent"},{x:2,y:2,color:"#ffEE00"},{x:3,y:2,color:"#ffEE00"},{x:4,y:2,color:"#ffEE00"},{x:5,y:2,color:"#ffb500"},{x:6,y:2,color:"transparent"},{x:7,y:2,color:"transparent"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"transparent"},{x:3,y:3,color:"#ffEE00"},{x:4,y:3,color:"#ffEE00"},{x:5,y:3,color:"#ffb500"},{x:6,y:3,color:"transparent"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffb500"},{x:3,y:4,color:"#ffb500"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffEE00"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"transparent"},{x:2,y:5,color:"transparent"},{x:3,y:5,color:"#ffb500"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffEE00"},{x:6,y:5,color:"transparent"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"transparent"},{x:1,y:6,color:"transparent"},{x:2,y:6,color:"#ffb500"},{x:3,y:6,color:"transparent"},{x:4,y:6,color:"transparent"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"transparent"},{x:7,y:6,color:"transparent"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"transparent"},{x:2,y:7,color:"transparent"},{x:3,y:7,color:"transparent"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}],[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"#ffEE00"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"transparent"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"transparent"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"transparent"},{x:1,y:1,color:"#ffEE00"},{x:2,y:1,color:"#ffEE00"},{x:3,y:1,color:"transparent"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"transparent"},{x:6,y:1,color:"#ffb500"},{x:7,y:1,color:"#ffb500"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"transparent"},{x:2,y:2,color:"#ffEE00"},{x:3,y:2,color:"#ffEE00"},{x:4,y:2,color:"#ffb500"},{x:5,y:2,color:"#ffb500"},{x:6,y:2,color:"#ffb500"},{x:7,y:2,color:"transparent"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"transparent"},{x:3,y:3,color:"#ffEE00"},{x:4,y:3,color:"#ffEE00"},{x:5,y:3,color:"#ffb500"},{x:6,y:3,color:"transparent"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffb500"},{x:3,y:4,color:"#ffb500"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffEE00"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"transparent"},{x:2,y:5,color:"transparent"},{x:3,y:5,color:"#ffb500"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffEE00"},{x:6,y:5,color:"transparent"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"transparent"},{x:1,y:6,color:"transparent"},{x:2,y:6,color:"#ffb500"},{x:3,y:6,color:"transparent"},{x:4,y:6,color:"transparent"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"transparent"},{x:7,y:6,color:"transparent"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"transparent"},{x:2,y:7,color:"transparent"},{x:3,y:7,color:"transparent"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}],[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"transparent"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"transparent"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"transparent"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"#ffEE00"},{x:1,y:1,color:"transparent"},{x:2,y:1,color:"transparent"},{x:3,y:1,color:"transparent"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"transparent"},{x:6,y:1,color:"transparent"},{x:7,y:1,color:"transparent"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"#ffEE00"},{x:2,y:2,color:"#ffEE00"},{x:3,y:2,color:"#ffEE00"},{x:4,y:2,color:"transparent"},{x:5,y:2,color:"transparent"},{x:6,y:2,color:"#ffb500"},{x:7,y:2,color:"#ffb500"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"#ffEE00"},{x:3,y:3,color:"#ffEE00"},{x:4,y:3,color:"#ffEE00"},{x:5,y:3,color:"#ffb500"},{x:6,y:3,color:"#ffb500"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffb500"},{x:3,y:4,color:"#ffb500"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffEE00"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"transparent"},{x:2,y:5,color:"transparent"},{x:3,y:5,color:"#ffb500"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffEE00"},{x:6,y:5,color:"transparent"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"transparent"},{x:1,y:6,color:"transparent"},{x:2,y:6,color:"#ffb500"},{x:3,y:6,color:"transparent"},{x:4,y:6,color:"transparent"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"transparent"},{x:7,y:6,color:"transparent"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"transparent"},{x:2,y:7,color:"transparent"},{x:3,y:7,color:"transparent"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}],[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"transparent"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"transparent"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"transparent"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"transparent"},{x:1,y:1,color:"transparent"},{x:2,y:1,color:"transparent"},{x:3,y:1,color:"transparent"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"transparent"},{x:6,y:1,color:"transparent"},{x:7,y:1,color:"transparent"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"transparent"},{x:2,y:2,color:"transparent"},{x:3,y:2,color:"transparent"},{x:4,y:2,color:"transparent"},{x:5,y:2,color:"transparent"},{x:6,y:2,color:"transparent"},{x:7,y:2,color:"transparent"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"transparent"},{x:3,y:3,color:"transparent"},{x:4,y:3,color:"transparent"},{x:5,y:3,color:"transparent"},{x:6,y:3,color:"transparent"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffEE00"},{x:3,y:4,color:"#ffEE00"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffEE00"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"#ffEE00"},{x:2,y:5,color:"#ffEE00"},{x:3,y:5,color:"#ffb500"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffEE00"},{x:6,y:5,color:"#ffb500"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"#ffEE00"},{x:1,y:6,color:"#ffEE00"},{x:2,y:6,color:"#ffb500"},{x:3,y:6,color:"transparent"},{x:4,y:6,color:"transparent"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"transparent"},{x:7,y:6,color:"transparent"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"transparent"},{x:2,y:7,color:"transparent"},{x:3,y:7,color:"transparent"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}],[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"transparent"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"transparent"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"transparent"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"transparent"},{x:1,y:1,color:"transparent"},{x:2,y:1,color:"transparent"},{x:3,y:1,color:"transparent"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"transparent"},{x:6,y:1,color:"transparent"},{x:7,y:1,color:"transparent"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"transparent"},{x:2,y:2,color:"transparent"},{x:3,y:2,color:"transparent"},{x:4,y:2,color:"transparent"},{x:5,y:2,color:"transparent"},{x:6,y:2,color:"transparent"},{x:7,y:2,color:"transparent"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"transparent"},{x:3,y:3,color:"transparent"},{x:4,y:3,color:"#ffb500"},{x:5,y:3,color:"#ffb500"},{x:6,y:3,color:"transparent"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffb500"},{x:3,y:4,color:"#ffb500"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffb500"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"transparent"},{x:2,y:5,color:"transparent"},{x:3,y:5,color:"#ffEE00"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffb500"},{x:6,y:5,color:"#ffb500"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"transparent"},{x:1,y:6,color:"transparent"},{x:2,y:6,color:"#ffEE00"},{x:3,y:6,color:"#ffEE00"},{x:4,y:6,color:"#ffb500"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"#ffb500"},{x:7,y:6,color:"#ffb500"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"#ffEE00"},{x:2,y:7,color:"#ffEE00"},{x:3,y:7,color:"#ffb500"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}],[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"transparent"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"transparent"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"transparent"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"transparent"},{x:1,y:1,color:"transparent"},{x:2,y:1,color:"transparent"},{x:3,y:1,color:"transparent"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"transparent"},{x:6,y:1,color:"transparent"},{x:7,y:1,color:"transparent"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"transparent"},{x:2,y:2,color:"transparent"},{x:3,y:2,color:"transparent"},{x:4,y:2,color:"transparent"},{x:5,y:2,color:"transparent"},{x:6,y:2,color:"transparent"},{x:7,y:2,color:"transparent"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"transparent"},{x:3,y:3,color:"transparent"},{x:4,y:3,color:"transparent"},{x:5,y:3,color:"transparent"},{x:6,y:3,color:"transparent"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffEE00"},{x:3,y:4,color:"#ffEE00"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffEE00"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"#ffEE00"},{x:2,y:5,color:"#ffEE00"},{x:3,y:5,color:"#ffb500"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffEE00"},{x:6,y:5,color:"#ffb500"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"#ffEE00"},{x:1,y:6,color:"#ffEE00"},{x:2,y:6,color:"#ffb500"},{x:3,y:6,color:"transparent"},{x:4,y:6,color:"transparent"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"transparent"},{x:7,y:6,color:"transparent"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"transparent"},{x:2,y:7,color:"transparent"},{x:3,y:7,color:"transparent"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}],[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"transparent"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"transparent"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"transparent"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"transparent"},{x:1,y:1,color:"transparent"},{x:2,y:1,color:"transparent"},{x:3,y:1,color:"transparent"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"transparent"},{x:6,y:1,color:"transparent"},{x:7,y:1,color:"transparent"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"transparent"},{x:2,y:2,color:"transparent"},{x:3,y:2,color:"transparent"},{x:4,y:2,color:"#ffEE00"},{x:5,y:2,color:"transparent"},{x:6,y:2,color:"transparent"},{x:7,y:2,color:"transparent"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"transparent"},{x:3,y:3,color:"#ffEE00"},{x:4,y:3,color:"#ffEE00"},{x:5,y:3,color:"#ffb500"},{x:6,y:3,color:"transparent"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffEE00"},{x:3,y:4,color:"#ffEE00"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffEE00"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"#ffEE00"},{x:2,y:5,color:"#ffEE00"},{x:3,y:5,color:"#ffb500"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffEE00"},{x:6,y:5,color:"#ffb500"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"transparent"},{x:1,y:6,color:"transparent"},{x:2,y:6,color:"#ffb500"},{x:3,y:6,color:"transparent"},{x:4,y:6,color:"transparent"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"transparent"},{x:7,y:6,color:"transparent"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"transparent"},{x:2,y:7,color:"transparent"},{x:3,y:7,color:"transparent"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}],[{x:0,y:0,color:"transparent"},{x:1,y:0,color:"transparent"},{x:2,y:0,color:"transparent"},{x:3,y:0,color:"transparent"},{x:4,y:0,color:"transparent"},{x:5,y:0,color:"transparent"},{x:6,y:0,color:"transparent"},{x:7,y:0,color:"transparent"},{x:0,y:1,color:"transparent"},{x:1,y:1,color:"transparent"},{x:2,y:1,color:"transparent"},{x:3,y:1,color:"transparent"},{x:4,y:1,color:"transparent"},{x:5,y:1,color:"transparent"},{x:6,y:1,color:"transparent"},{x:7,y:1,color:"transparent"},{x:0,y:2,color:"transparent"},{x:1,y:2,color:"#ffEE00"},{x:2,y:2,color:"#ffEE00"},{x:3,y:2,color:"#ffEE00"},{x:4,y:2,color:"transparent"},{x:5,y:2,color:"transparent"},{x:6,y:2,color:"#ffb500"},{x:7,y:2,color:"#ffb500"},{x:0,y:3,color:"#ff6633"},{x:1,y:3,color:"#ff6633"},{x:2,y:3,color:"#ffEE00"},{x:3,y:3,color:"#ffEE00"},{x:4,y:3,color:"#ffEE00"},{x:5,y:3,color:"#ffb500"},{x:6,y:3,color:"#ffb500"},{x:7,y:3,color:"transparent"},{x:0,y:4,color:"transparent"},{x:1,y:4,color:"#ffb500"},{x:2,y:4,color:"#ffb500"},{x:3,y:4,color:"#ffb500"},{x:4,y:4,color:"#ffb500"},{x:5,y:4,color:"#ffEE00"},{x:6,y:4,color:"#FFF"},{x:7,y:4,color:"#ffEE00"},{x:0,y:5,color:"transparent"},{x:1,y:5,color:"transparent"},{x:2,y:5,color:"transparent"},{x:3,y:5,color:"#ffb500"},{x:4,y:5,color:"#ffEE00"},{x:5,y:5,color:"#ffEE00"},{x:6,y:5,color:"transparent"},{x:7,y:5,color:"transparent"},{x:0,y:6,color:"transparent"},{x:1,y:6,color:"transparent"},{x:2,y:6,color:"#ffb500"},{x:3,y:6,color:"transparent"},{x:4,y:6,color:"transparent"},{x:5,y:6,color:"transparent"},{x:6,y:6,color:"transparent"},{x:7,y:6,color:"transparent"},{x:0,y:7,color:"transparent"},{x:1,y:7,color:"transparent"},{x:2,y:7,color:"transparent"},{x:3,y:7,color:"transparent"},{x:4,y:7,color:"transparent"},{x:5,y:7,color:"transparent"},{x:6,y:7,color:"transparent"},{x:7,y:7,color:"transparent"}]],H={frames:G,canvasArray:G[0],currentFrame:0,copyCanvasArray:null};var K=Object(J.b)({palette:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case"UPDATE_COLOR":return Object(X.a)(Object(X.a)({},r),{},{currentColor:o.color});default:return r}},frames:function(){var r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0,t=o.currentFrame,a=o.copyCanvasArray,c=o.canvasArray,e=JSON.parse(JSON.stringify(c)).map((function(r){return Object(X.a)(Object(X.a)({},r),{},{color:"transparent"})})),l=o.frames;switch(n.type){case"UPDATE_CURRENT_FRAME":return Object(X.a)(Object(X.a)({},o),{},{currentFrame:n.index,canvasArray:l[n.index]});case"UPDATE_PIXEL_COLOR":return c[n.index].color!==n.currentColor?c[n.index].color=n.currentColor:c[n.index].color="transparent",l[t]=c,Object(X.a)(Object(X.a)({},o),{},{canvasArray:c,frames:l});case"ADD_FRAME":return l.splice(t+1,0,e),Object(X.a)(Object(X.a)({},o),{},{currentFrame:t+1,canvasArray:e,frames:l});case"DELETE_FRAME":return l.splice(t,1),r=t>0?t-1:0,Object(X.a)(Object(X.a)({},o),{},{currentFrame:r,canvasArray:l[r],frames:l});case"COPY_FRAME":return Object(X.a)(Object(X.a)({},o),{},{copyCanvasArray:c});case"PASTE_FRAME":return a?(l[t]=a,Object(X.a)(Object(X.a)({},o),{},{canvasArray:a,frames:l})):o;default:return o}}}),Q=Object(J.c)(K);x.a.render(Object(f.jsx)(e.a.StrictMode,{children:Object(f.jsx)(p.a,{store:Q,children:Object(f.jsx)(B,{})})}),document.getElementById("root")),I()}},[[31,1,2]]]);
//# sourceMappingURL=main.f16933e9.chunk.js.map