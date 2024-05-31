import { TodoIcon } from "./TodoIcon";
function DeleteIcon( { onDelete } ) {
  return <TodoIcon type="delete" color="grey" 
  onClick={onDelete}/>;
}

export { DeleteIcon };
