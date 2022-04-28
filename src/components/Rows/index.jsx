import "./styles.css"
import { ButtonsCard } from "../ButtonsCard"
export function Rows({index, name, email, created_at}){
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{created_at}</td>
            <td><ButtonsCard/></td>
        </tr>
    )
  }