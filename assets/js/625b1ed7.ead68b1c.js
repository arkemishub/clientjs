"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[168],{7942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||h[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(1163),o=(n(959),n(7942));const a={sidebar_position:2,title:"Authentication"},i=void 0,s={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"The auth class provides useful methods to authenticate, and manage the security of the APIs through the JWT authentication.",source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/clientjs/docs/authentication",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication"},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/clientjs/docs/install"},next:{title:"Arke",permalink:"/clientjs/docs/arke"}},c={},l=[{value:"Sign in",id:"sign-in",level:3},{value:"Verify &amp; Refresh token",id:"verify--refresh-token",level:3}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The auth class provides useful methods to authenticate, and manage the security of the APIs through the JWT authentication."),(0,o.kt)("h3",{id:"sign-in"},"Sign in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"client.auth\n    .signIn({ username: 'username', password: 'password' })\n    .then((res) => {\n        const session = res.data.content;\n        client.auth.setAuthCookie(session);\n    })\n    .catch((err) => console.log(err));\n")),(0,o.kt)("h3",{id:"verify--refresh-token"},"Verify & Refresh token"),(0,o.kt)("p",null,"To validate our session you have to call the verify token API to check that session is still alive,\notherwise it will be necessary call the refresh token API to generate new token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," client.auth\n    .verifyToken(verifyToken)\n    .then((res) => {\n        // Token is verified\n    })\n    .catch((err) => {\n        // Token is expired -> try to refresh token\n        client.auth\n            .refreshToken(refresh_token)\n            .then((res) => {\n                const refreshedToken = res.data;\n                console.log(refreshedToken)\n            })\n            .catch((err) => {\n                // Logout session\n                console.log(err)\n            });\n    })\n")),(0,o.kt)("p",null,"Looks our guides to use Arke authentication through ",(0,o.kt)("a",{parentName:"p",href:"https://next-auth.js.org/"},"NextAuth.js")))}h.isMDXComponent=!0}}]);