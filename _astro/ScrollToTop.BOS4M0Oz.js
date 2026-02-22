import{j as n}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.hKtbKQ_7.js";function a({title:e,titleId:o,...t},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":o},t),e?r.createElement("title",{id:o},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"}))}const s=r.forwardRef(a);function d(){const[e,o]=r.useState(!1);return r.useEffect(()=>{const t=()=>{o(window.scrollY>300)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),e?n.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",className:`\r
        cursor-pointer\r
        fixed bottom-6 right-6 z-50\r
        rounded-xl p-3\r
        bg-neutral-300/80 dark:bg-neutral-800/80\r
        backdrop-blur\r
        shadow-md hover:shadow-xl\r
        hover:bg-white dark:hover:bg-neutral-700\r
        hover:scale-105\r
        transition-all duration-200 ease-out        \r
      `,children:n.jsx(s,{className:"h-6 w-6 text-neutral-700 dark:text-neutral-200"})}):null}export{d as default};
