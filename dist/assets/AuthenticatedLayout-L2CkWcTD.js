import{r as d,j as e,$ as l,K as p}from"./app-BY5QLhAu.js";import{z as f}from"./transition-BsAykd1s.js";import{d as o}from"./styled-components.browser.esm-CNrW9ZQb.js";const g=d.createContext(),i=({children:n})=>{const[r,t]=d.useState(!1),s=()=>{t(a=>!a)};return e.jsx(g.Provider,{value:{open:r,setOpen:t,toggleOpen:s},children:e.jsx("div",{className:"relative",children:n})})},b=({children:n})=>{const{open:r,setOpen:t,toggleOpen:s}=d.useContext(g);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:s,children:n}),r&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},j=({align:n="right",width:r="48",contentClasses:t="py-1 bg-white",children:s})=>{const{open:a,setOpen:c}=d.useContext(g);let x="origin-top";n==="left"?x="ltr:origin-top-left rtl:origin-top-right start-0":n==="right"&&(x="ltr:origin-top-right rtl:origin-top-left end-0");let u="";return r==="48"&&(u="w-48"),e.jsx(e.Fragment,{children:e.jsx(f,{show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${x} ${u}`,onClick:()=>c(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+t,children:s})})})})},v=({className:n="",children:r,...t})=>e.jsx(l,{...t,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+n,children:r});i.Trigger=b;i.Content=j;i.Link=v;function y({active:n=!1,className:r="",children:t,...s}){return e.jsx(l,{...s,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(n?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+r,children:t})}function h({active:n=!1,className:r="",children:t,...s}){return e.jsx(l,{...s,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${n?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${r}`,children:t})}function S({header:n,children:r}){const t=p().props.auth.user,[s,a]=d.useState(!1);return e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(w,{children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(L,{children:e.jsx(C,{href:"/",children:"Pelas Estradas"})})}),e.jsx($,{children:e.jsx(y,{href:route("dashboard"),active:route().current("dashboard"),children:e.jsx(M,{children:"Inicio"})})})]}),e.jsx("div",{className:"hidden sm:ms-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ms-3",children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-gray px-3 py-2 text-ms font-medium leading-4 text-black transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[t.name,e.jsx("svg",{className:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(i.Content,{children:[e.jsx(i.Link,{href:route("profile.edit"),children:"Perfil"}),e.jsx(i.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>a(c=>!c),className:"inline-flex items-center justify-center rounded-md p-2 text-black-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:s?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:s?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(s?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"space-y-1 pb-3 pt-2",children:e.jsx(h,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:t.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:t.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(h,{href:route("profile.edit"),children:"Profile"}),e.jsx(h,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),n&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",children:n})}),e.jsx("main",{children:r})]})}const m={mobileS:"320px",mobileM:"375px",mobileL:"429px"},N=o.div`
    min-height: 100vh;
    background: linear-gradient(to right, #242437, #1e1e30);
`,w=o.header`
    padding: 0 120px;
    width: 100%;
    @media (max-width: ${m.mobileS}) {
        padding: 0 16px;
    }
    @media (max-width: ${m.mobileM}) {
        padding: 0 16px;
    }
    @media (max-width: ${m.mobileL}) {
        padding: 0 16px;
    }
`,k=o.nav`
    border-bottom: 1px solid #f1f1f1;
    background-color: #4ebaf5;
`,L=o.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
`,C=o(l)`
    text-decoration: none;
    color: #1e1e30;
    font-size: 1.5rem;
    font-weight: bold;
`,$=o.div`
    display: none;
    gap: 2rem;

    @media (min-width: 640px) {
        display: flex;
        margin-top: -1px;
        margin-left: 2.5rem;
    }
`,M=o.p`
    font-size: 20px;
    text-decoration: none;
    color: #1e1e30;
    font-weight: 500;

    &:hover {
        color: #75ceff;
    }
`;export{S as A};
