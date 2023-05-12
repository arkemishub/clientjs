"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262],{7942:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),u=n,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(1163),n=(r(959),r(7942));const o={sidebar_position:3,title:"Arke"},i=void 0,l={unversionedId:"arke",id:"arke",title:"Arke",description:"The arke class provides useful methods to manage Arke and its associated parameters.",source:"@site/docs/arke.md",sourceDirName:".",slug:"/arke",permalink:"/clientjs/docs/arke",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/arke.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Arke"},sidebar:"docsSidebar",previous:{title:"Authentication",permalink:"/clientjs/docs/authentication"},next:{title:"Unit",permalink:"/clientjs/docs/unit"}},p={},c=[],d={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The arke class provides useful methods to manage Arke and its associated parameters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"client.arke.[method]\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Method")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"baseStruct(config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Get the structure of generic Arke")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getAll(config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Get All Arke")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"get(arkeId, config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Get specific Arke")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"struct(arkeId, config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Get the structure of a specific Arke")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"create(arkeId, data, config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Create an Arke with data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"edit(arkeId, data, config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Edit a specific Arke")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delete(arkeId, config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Delete a specific Arke")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addParameter(arkeId, parameterType, parameterId, config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Add parameter to an Arke")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"removeParameter(arkeId, parameterType, parameterId, config)"),(0,n.kt)("td",{parentName:"tr",align:null},"Remove parameter to an Arke")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For config param see ",(0,n.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/req_config"},"Axios documentation"))))}m.isMDXComponent=!0}}]);