import "./styles.css"

export function PageButton({page,changePage,selected=false}){
    let buttonId = "button-"+page;
    return(
        <button id = {buttonId} type="page" onClick={()=>{changePage(page)}}>{page}</button>
)}