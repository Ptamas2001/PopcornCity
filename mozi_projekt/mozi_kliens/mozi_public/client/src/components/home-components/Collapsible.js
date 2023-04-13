import Reac, {useState} from 'react';
function Collapsible(props) {
    const [isOpen, setIsOpen] =useState(false);
    return <div className="collapsible">
    <button className="toggle" onClick={() => setIsOpen(!isOpen)}>{props.label}</button>
    <div className={isOpen ? "content-parent show" : "content-parent"}>
    <div className="content">{props.children}
    </div>
    </div>
    </div>
}
export default Collapsible;