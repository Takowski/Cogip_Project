import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const ContextMenu = ({ onEdit, onDelete }) => (
    <Popup
        trigger={<button className="button"> <FontAwesomeIcon icon={faEllipsisV} /> </button>}
        position="bottom right"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
    >
        <div className="menu">
            <div className="menu-item" onClick={onEdit}>Edit</div>
            <div className="menu-item" onClick={onDelete}>Delete</div>
        </div>
    </Popup>
);

export default ContextMenu;