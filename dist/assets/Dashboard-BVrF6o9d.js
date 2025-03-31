import{j as i,L as r}from"./app-BY5QLhAu.js";import{A as e}from"./AuthenticatedLayout-L2CkWcTD.js";import a from"./OcorrenciasList-BiO4Rhn-.js";import{d as t}from"./styled-components.browser.esm-CNrW9ZQb.js";import"./transition-BsAykd1s.js";import"./Modal-BoriEI3V.js";function b(){return i.jsxs(e,{header:i.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Ocorrências"}),children:[i.jsx(r,{title:"Ocorrências"}),i.jsx(o,{children:i.jsx(p,{children:i.jsx(x,{children:i.jsx(a,{})})})})]})}const d={mobileS:"320px",mobileM:"375px",mobileL:"429px",tablet:"768px",laptop:"1024px",desktop:"1440px"},o=t.div`
    margin-top: 32px;
    width: 100%;
    @media (max-width: ${d.mobileL}) {
        margin-top: 20px;
    }
`,p=t.div`
    width: 100%;
    padding: 0 120px;
    @media (max-width: ${d.laptop}) {
        padding: 0 60px;
    }

    @media (max-width: ${d.tablet}) {
        padding: 0 30px;
    }

    @media (max-width: ${d.mobileL}) {
        padding: 0;
    }
`,x=t.div`
    width: 100%;
    background-color: #f3fbf6;
    border-radius: 32px;
    /* padding: 20px; */
    display: flex;
    border: #75ceff 32px solid;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${d.laptop}) {
        border-radius: 24px;
        border-width: 24px;
    }

    @media (max-width: ${d.tablet}) {
        border-radius: 16px;
        border-width: 16px;
    }

    @media (max-width: ${d.mobileL}) {
        border-radius: 12px;
        border-width: 12px;
    }
`;export{d as breakpoints,b as default};
