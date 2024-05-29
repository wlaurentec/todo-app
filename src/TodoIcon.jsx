import { ReactComponent as  CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

const iconTypes = {
  'check':  <CheckSVG/>,
  'delete': <DeleteSVG/>
}
function TodoIcon({ type, color }) {
  return (
   <span
     className={`Icon Icon-svg Icon-${type} Icon-${type}-${color}`}
    >
      { iconTypes[type] }
   </span> 
  )
};

export { TodoIcon }