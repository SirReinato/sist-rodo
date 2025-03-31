import{j as e,$ as n}from"./app-BY5QLhAu.js";import{d as i}from"./styled-components.browser.esm-CNrW9ZQb.js";function r({children:o}){return e.jsxs(a,{children:[e.jsx(l,{children:"Pelas Estradas"}),e.jsx("div",{className:"mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg",children:o}),e.jsx(n,{href:"/",children:e.jsx(s,{children:"Voltar a home"})})]})}const t={mobileS:"320px",mobileL:"429px",tablet:"768px",laptop:"1024px"},a=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100vh;
    width: 100%;
    background: linear-gradient(to right, #1e1e30, #1e1e30);
`,l=i.h2`
    width: 100%;
    color: #f4f4f4;
    font-size: 56px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
    font-family: "Roboto", sans-serif;
    line-height: 70px;

    @media (max-width: ${t.laptop}) {
        font-size: 48px;
        line-height: 60px;
    }

    @media (max-width: ${t.tablet}) {
        font-size: 38px;
        line-height: 50px;
    }

    @media (max-width: ${t.mobileL}) {
        font-size: 30px;
        line-height: 40px;
        width: 90%;
    }

    @media (max-width: ${t.mobileS}) {
        font-size: 24px;
        line-height: 32px;
    }
`,s=i.h3`
    font-size: 16px;
    color: #f4f4f4;
    :hover {
        color: #4ebaf5;
    }
`;export{r as G};
