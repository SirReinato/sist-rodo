import{j as i,$ as p,L as r}from"./app-BY5QLhAu.js";import{d as t}from"./styled-components.browser.esm-CNrW9ZQb.js";const l="/build/assets/bg-banner-BGieNBgX.png";function d({rota:a,nome:x}){return i.jsx(p,{href:route(`${a}`),children:i.jsx(s,{children:x})})}const o={mobileS:"320px",mobileL:"429px",tablet:"768px",laptop:"1024px"},s=t.p`
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande";
    font-size: 32px;
    font-weight: bold;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    font-weight: bold;
    color: #f6efef;
    transition: all 0.2s ease;
    text-align: center;
    cursor: pointer;
    padding: 16px;
    background-color: #203452;

    &:hover {
        color: #4ebaf5;
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        border-color: #4ebaf5;
    }

    @media (max-width: ${o.laptop}) {
        font-size: 22px;
    }

    @media (max-width: ${o.tablet}) {
        font-size: 20px;
        padding: 0.5rem;
    }

    @media (max-width: ${o.mobileL}) {
        font-size: 18px;
        padding: 0.4rem;
    }

    @media (max-width: ${o.mobileS}) {
        font-size: 16px;
        /* padding: 0.3rem; */
    }

    @media (prefers-color-scheme: dark) {
        color: #f6efef;

        &:hover {
            background-color: #4ebaf5;
            color: #203452;
        }

        &:focus-visible {
            border-color: #4ebaf5;
        }
    }
`,n={mobileS:"320px",mobileM:"375px",mobileL:"429px",tablet:"768px",desktop:"1700px"};t.div`
    min-width: 210px;
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 190px;
    align-items: center;
    margin-top: 10%;
    gap: 8px;
    padding: 16px;
    border-radius: 18px;
    @media (min-width: ${n.desktop}) {
        min-width: 250px;
        width: 250px;
        padding: 24px;
        min-height: 230px;
        gap: 12px;
    }

    @media (max-width: ${n.tablet}) {
        min-width: 180px;
        width: 180px;
    }

    @media (max-width: ${n.mobileM}) {
        min-width: 150px;
        width: 150px;
        padding: 12px;
        min-height: 150px;
    }
`;t.p`
    font-size: 24px;
    font-weight: 300;
    width: 270px;
    color: #f3fbf6;
    text-align: center;

    @media (max-width: ${n.mobileL}) {
        font-size: 14px;
    }

    @media (max-width: ${n.mobileS}) {
        font-size: 12px;
    }
`;t.h3`
    font-size: 32px;
    font-weight: bold;
    color: #4ebaf5;
    text-align: center;

    @media (max-width: ${n.mobileL}) {
        font-size: 24px;
    }

    @media (max-width: ${n.mobileS}) {
        font-size: 20px;
    }
`;function j({auth:a}){return i.jsxs(i.Fragment,{children:[i.jsx(r,{title:"Home"}),i.jsxs(m,{children:[i.jsxs(c,{children:[i.jsx(p,{href:"/",children:i.jsx(f,{children:"Pelas Estradas"})}),i.jsx(h,{children:a.user?i.jsx(d,{rota:"dashboard",nome:"Dashboard"}):i.jsxs(i.Fragment,{children:[i.jsx(d,{rota:"login",nome:"Login"}),i.jsx(d,{rota:"register",nome:"Registrar"})]})})]}),i.jsx(g,{children:i.jsx(b,{children:i.jsx(w,{children:"Conectando Você às Informações e Soluções para um Trânsito Mais Seguro"})})})]})]})}const e={mobileS:"320px",mobileM:"375px",mobileL:"429px",tablet:"835px",laptop:"1024px",desktop:"1440px"},m=t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: 120px 120px 64px 120px;
    background: #1e1e30;
    @media (max-width: ${e.desktop}) {
        padding: 60px 80px 30px 80px;
    }
    @media (max-width: ${e.laptop}) {
        padding: 80px 80px 48px 80px;
    }

    @media (max-width: ${e.tablet}) {
        padding: 80px 20px 32px 20px;
        flex-direction: column;
        justify-content: flex-start;
    }

    @media (max-width: ${e.mobileL}) {
        padding: 120px 20px 24px 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: ${e.mobileS}) {
        padding: 30px 15px 16px 15px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`,c=t.header`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 64px;
    left: 10%;
    border-radius: 48px;
    padding: 32px;
    background: #1e1e30;
    @media (max-width: ${e.desktop}) {
        padding: 16px 32px;
        top: 10px;
        left: 10%;
    }
    @media (max-width: ${e.laptop}) {
        padding: 24px;
        top: 48px;
        left: 5%;
        width: 90%;
    }

    @media (max-width: ${e.tablet}) {
        padding: 16px;
        top: 32px;
        left: 10%;
        width: 80%;
    }

    @media (max-width: ${e.mobileL}) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 12px;
        top: 24px;
        left: 15%;
        width: 70%;
    }
`,h=t.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #203452;
    border-radius: 18px;

    @media (max-width: ${e.mobileL}) {
        flex-direction: column;
        gap: 12px;
        padding: 10px;
        width: 80%;
        text-align: center;
    }
`,f=t.h1`
    color: #f3fbf6;
    font-size: 48px;
    font-weight: bold;
    padding-left: 8px;
    letter-spacing: 0.1em;
    text-align: center;
    margin-bottom: 16px;
    font-family: "Roboto", sans-serif;
    line-height: 70px;

    @media (max-width: ${e.laptop}) {
        font-size: 42px;
        line-height: 60px;
    }

    @media (max-width: ${e.tablet}) {
        font-size: 32px;
        line-height: 45px;
    }

    @media (max-width: ${e.mobileL}) {
        font-size: 26px;
        line-height: 35px;
        width: 100%;
        text-align: left;
        padding-left: 0;
    }

    @media (max-width: ${e.mobileS}) {
        font-size: 20px;
        line-height: 28px;
    }
`,g=t.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 48px 0 0 48px;
    border-radius: 48px;
    background: #fff;
    background: url(${l}) no-repeat center;
    background-size: cover;
    box-sizing: border-box;
    @media (max-width: ${e.tablet}) {
        padding: 32px;
        border-radius: 32px;
        flex-direction: column;
        align-items: center;
        background-position: top center;
    }

    @media (max-width: ${e.mobileL}) {
        padding: 24px;
        border-radius: 24px;
        justify-content: center;
    }

    @media (max-width: ${e.mobileS}) {
        padding: 16px;
        border-radius: 16px;
        justify-content: center;
    }
`,b=t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    @media (max-width: ${e.tablet}) {
        width: 100%;
        height: 100%;
    }
`,w=t.h3`
    color: #f3fbf6;
    font-size: 42px;
    letter-spacing: 0.1em;
    width: 80%;
    font-family: "Roboto", sans-serif;
    line-height: 56px;
    font-weight: bold;
    @media (max-width: ${e.desktop}) {
        font-size: 32px;
    }
    @media (max-width: ${e.laptop}) {
        font-size: 28px;
        line-height: 38px;
    }

    @media (max-width: ${e.tablet}) {
        font-size: 32px;
        line-height: 50px;
        text-align: center;
        padding: 16px;
    }

    @media (max-width: ${e.mobileL}) {
        font-size: 22px;
        line-height: 24px;
        padding: 0 10px;
    }

    @media (max-width: ${e.mobileS}) {
        font-size: 22px;
        line-height: 22px;
    }
`;export{e as breakpoints,j as default};
