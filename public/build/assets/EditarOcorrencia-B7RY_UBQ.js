import{m as h,j as o,$ as u}from"./app-BY5QLhAu.js";import{d as r}from"./styled-components.browser.esm-CNrW9ZQb.js";const k=({ocorrencia:t})=>{const{data:n,setData:i,put:p,processing:l,errors:a}=h({nome_rodovia:t.nome_rodovia,trecho:t.trecho,tipo_problema:t.tipo_problema,data_ocorrencia:t.data_ocorrencia,descricao:t.descricao||""}),x=e=>{e.preventDefault(),p(`/ocorrencias/${t.id}`,n)};return o.jsx(m,{children:o.jsxs(g,{children:[o.jsx(b,{children:"Editar Ocorrência"}),o.jsxs(j,{onSubmit:x,children:[o.jsx(d,{children:"Rodovia:"}),o.jsx(s,{type:"text",value:n.nome_rodovia,onChange:e=>i("nome_rodovia",e.target.value)}),a.nome_rodovia&&o.jsx(c,{children:a.nome_rodovia}),o.jsx(d,{children:"Trecho:"}),o.jsx(s,{type:"text",value:n.trecho,onChange:e=>i("trecho",e.target.value)}),a.trecho&&o.jsx(c,{children:a.trecho}),o.jsx(d,{children:"Problema:"}),o.jsxs(v,{value:n.tipo_problema,onChange:e=>i("tipo_problema",e.target.value),children:[o.jsx("option",{value:"",disabled:!0,children:"Selecione um problema"}),o.jsx("option",{value:"buraco",children:"Buraco"}),o.jsx("option",{value:"sinalização danificada",children:"Sinalização danificada"}),o.jsx("option",{value:"erosão",children:"Erosão"}),o.jsx("option",{value:"alagamento",children:"Alagamento"}),o.jsx("option",{value:"outro",children:"Outro"})]}),a.tipo_problema&&o.jsx(c,{children:a.tipo_problema}),o.jsx(d,{children:"Data:"}),o.jsx(s,{type:"date",value:n.data_ocorrencia,onChange:e=>i("data_ocorrencia",e.target.value)}),a.data_ocorrencia&&o.jsx(c,{children:a.data_ocorrencia}),o.jsx(d,{children:"Descrição:"}),o.jsx(f,{value:n.descricao,onChange:e=>i("descricao",e.target.value)}),o.jsx(_,{type:"submit",disabled:l,children:l?"Salvando...":"Salvar Alterações"})]}),o.jsx(u,{href:"/dashboard",children:o.jsx(y,{children:"Inicio"})})]})})},m=r.div`
    background: linear-gradient(to right, #242437, #1e1e30);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
`,g=r.div`
    max-width: 500px;
    min-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background: #4ebaf5;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`,b=r.h2`
    text-align: center;
    color: #333;
`,j=r.form`
    display: flex;
    flex-direction: column;
`,d=r.label`
    font-weight: bold;
    margin-top: 10px;
`,s=r.input`
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`,v=r.select`
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`,f=r.textarea`
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`,c=r.span`
    color: red;
    font-size: 12px;
`,_=r.button`
    background-color: #007bff;
    color: white;
    padding: 10px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #0056b3;
    }
`,y=r.p`
    font-size: 16px;
    text-align: center;
    color: #f3fbf6;
    margin-top: 32px;
    cursor: pointer;
`;export{k as default};
