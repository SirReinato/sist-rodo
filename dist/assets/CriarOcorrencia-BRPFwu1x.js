import{m as s,j as e,$ as p}from"./app-BY5QLhAu.js";import{d as r}from"./styled-components.browser.esm-CNrW9ZQb.js";function C(){const{data:a,setData:t,post:d,processing:i}=s({nome_rodovia:"",trecho:"",tipo_problema:"",data_ocorrencia:"",descricao:"",latitude:"",longitude:"",imagem:null}),l=o=>{t("imagem",o.target.files[0])},c=o=>{o.preventDefault(),o.preventDefault(),d(route("ocorrencias.store"),{data:a,forceFormData:!0})};return e.jsx(u,{children:e.jsxs(x,{children:[e.jsx(g,{children:"Nova Ocorrência"}),e.jsxs(h,{onSubmit:c,children:[e.jsx(n,{type:"text",placeholder:"Nome da Rodovia",value:a.nome_rodovia,onChange:o=>t("nome_rodovia",o.target.value)}),e.jsx(n,{type:"text",placeholder:"Trecho",value:a.trecho,onChange:o=>t("trecho",o.target.value)}),e.jsx(n,{type:"number",placeholder:"Latitude",value:a.latitude,onChange:o=>t("latitude",o.target.value)}),e.jsx(n,{type:"number",placeholder:"Longitude",value:a.longitude,onChange:o=>t("longitude",o.target.value)}),e.jsxs("select",{value:a.tipo_problema,onChange:o=>t("tipo_problema",o.target.value),placeholder:"Tipo de Problema",children:[e.jsx("option",{value:"",disabled:!0,children:"Tipo de Problema"}),e.jsx("option",{value:"buraco",children:"buraco"}),e.jsx("option",{value:"sinalização danificada",children:"sinalização danificada"}),e.jsx("option",{value:"erosão",children:"erosão"})," ",e.jsx("option",{value:"alagamento",children:"alagamento"}),e.jsx("option",{value:"outro",children:"outro"})]}),e.jsx(n,{type:"date",value:a.data_ocorrencia,onChange:o=>t("data_ocorrencia",o.target.value)}),e.jsx(m,{type:"textarea",rows:"5",cols:"33",placeholder:"Descrição",value:a.descricao,onChange:o=>t("descricao",o.target.value)}),e.jsx(n,{type:"file",onChange:l,accept:"image/*"}),e.jsx(v,{type:"submit",disabled:i,children:i?"Enviando...":"Cadastrar"})]}),e.jsx(p,{href:"/dashboard",children:e.jsx(b,{children:"Inicio"})})]})})}const u=r.div`
    background: linear-gradient(to right, #242437, #1e1e30);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
`,x=r.div`
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    background: #4ebaf5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,g=r.h2`
    text-align: center;
    color: #f3fbf6;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    letter-spacing: 0.1em;
`,h=r.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,n=r.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`,m=r.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`,b=r.p`
    font-size: 16px;
    text-align: center;
    color: #f3fbf6;
    margin-top: 32px;
    cursor: pointer;
`,v=r.button`
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;export{C as default};
