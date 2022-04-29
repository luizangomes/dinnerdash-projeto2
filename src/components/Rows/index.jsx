import "./styles.css"
export function Rows({index, name, email, created_at, onDelete}){
    return(
        <tr id = {"row" + index}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{created_at}</td>
            <td>
            <div class="actions_button">
            <button className="edit_button">editar</button>   <button className="delete_button" onClick={() => {onDelete(index)}}>excluir</button>
            </div>
            </td>
        </tr>
    )
  }