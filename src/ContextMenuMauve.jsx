import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const ContextMenu = ({ onEdit, onDelete }) => (
    <Popup
        trigger={<button className="button"> <FontAwesomeIcon icon={faEllipsisV} /> </button>}
        position="bottom right"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0,2rem', border: '0px', backgroundColor: '#949CD6', color: 'white', width: '100px' }}
        arrow={false}
    >
        <div className="menu">
            <div className="menu-item" onClick={onEdit}><FontAwesomeIcon icon={faTrash}/><span> Edit</span></div>
            <div className="menu-item" onClick={onDelete}><FontAwesomeIcon icon={faPenToSquare} /><span> Delete</span></div>
        </div>
    </Popup>
);

export default ContextMenu;