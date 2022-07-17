"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61879],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56559:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={slug:"reading-and-merging-multiple-csvs",title:"Reading and merging multiple CSVs",tags:["csv"]},c=void 0,u={permalink:"/learningdocusaurus/blog/reading-and-merging-multiple-csvs",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/reading-and-merging-multiple-csvs.md",source:"@site/blog/reading-and-merging-multiple-csvs.md",title:"Reading and merging multiple CSVs",description:"---",date:"2022-07-17T02:18:41.617Z",formattedDate:"July 17, 2022",tags:[{label:"csv",permalink:"/learningdocusaurus/blog/tags/csv"}],truncated:!1,authors:[],prevItem:{title:"Reading a CSV using python",permalink:"/learningdocusaurus/blog/reading-a-csv-using-python"},nextItem:{title:"Welcome",permalink:"/learningdocusaurus/blog/welcome"}},s={authorsImageUrls:[]},p=[{value:"A list of dictionaries",id:"a-list-of-dictionaries",children:[],level:3},{value:"Merge lists",id:"merge-lists",children:[],level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Given two files named ",(0,i.kt)("inlineCode",{parentName:"p"},"file1.csv")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"file2.csv")," with the below format:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"First Column"),(0,i.kt)("th",{parentName:"tr",align:null},"Second Column"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"First Line First column"),(0,i.kt)("td",{parentName:"tr",align:null},"First row Second column")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Second Line First column"),(0,i.kt)("td",{parentName:"tr",align:null},"Second Line Second column")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"It can be read using"),(0,i.kt)("h3",{id:"a-list-of-dictionaries"},"A list of dictionaries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import csv\n\nwith open('file1.csv') as f:\n    reader = csv.reader(f)\n    file1 = list(reader)\n\nwith open('file2.csv') as f:\n    reader = csv.reader(f)\n    file2 = list(reader)\n\n")),(0,i.kt)("h3",{id:"merge-lists"},"Merge lists"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"file = file1 + file2\n")))}m.isMDXComponent=!0}}]);