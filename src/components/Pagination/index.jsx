import "./styles.css"
import {PageButton} from "../PageButton"

export function Pagination(){
    return(
    <div class="pagination">
        <button type="button">&lt;&lt;</button>
            <PageButton page='1'/>
            <PageButton page='2'/>
            <PageButton page='3'/>
        <button type="button">&gt;&gt;</button>
    </div>
)}