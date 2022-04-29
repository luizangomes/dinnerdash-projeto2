import "./styles.css"
import {PageButton} from "../PageButton"
export function Pagination({nextPage, previousPage,changePage}){
    return(
    <div class="pagination">
        <button type="button" onClick={previousPage}>&lt;&lt;</button>
            <PageButton page='1' changePage = {changePage}/>
            <PageButton page='2' changePage = {changePage}/>
            <PageButton page='3' changePage = {changePage}/>
        <button type="button" onClick={nextPage}>&gt;&gt;</button>
    </div>
)}