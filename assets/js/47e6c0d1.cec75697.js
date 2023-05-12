"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[319],{7942:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(959);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6335:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(1163),a=(n(959),n(7942));const i={sidebar_position:4,title:"Unit"},o=void 0,l={unversionedId:"unit",id:"unit",title:"Unit",description:"The arke class provides useful methods to manage Units and its associated parameters.",source:"@site/docs/unit.md",sourceDirName:".",slug:"/unit",permalink:"/clientjs/docs/unit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unit.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Unit"},sidebar:"docsSidebar",previous:{title:"Arke",permalink:"/clientjs/docs/arke"},next:{title:"Api",permalink:"/clientjs/docs/api"}},c={},p=[],s={toc:p},u="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The arke class provides useful methods to manage Units and its associated parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"client.unit.[method]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Method")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"baseStruct(config)"),(0,a.kt)("td",{parentName:"tr",align:null},"Get the structure of generic Arke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getAll(arkeId, config)"),(0,a.kt)("td",{parentName:"tr",align:null},"Get All Units")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"get(arkeId, unitId, config)"),(0,a.kt)("td",{parentName:"tr",align:null},"Get specific Unit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"struct(arkeId, unitId, config)"),(0,a.kt)("td",{parentName:"tr",align:null},"Get the structure of a specific Unit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"create(arkeId, data, config)"),(0,a.kt)("td",{parentName:"tr",align:null},"Create an Unit with data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edit(arkeId, unitId, data, config)"),(0,a.kt)("td",{parentName:"tr",align:null},"Edit a specific Unit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"delete(arkeId, unitId, config)"),(0,a.kt)("td",{parentName:"tr",align:null},"Delete a specific Unit")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For config param see ",(0,a.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/req_config"},"Axios documentation"))))}d.isMDXComponent=!0}}]);