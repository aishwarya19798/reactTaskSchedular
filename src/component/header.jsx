import '../index.css';

const Header = ({title,onAdd,showAdd}) => {
    return ( 
    <div className="header">
        <div className="taskHeading">
            <h1>{ title }</h1>
            {<button className='btn' onClick={onAdd}>{showAdd ? 'Cancel' : 'Add'}</button>}
        </div>
    </div>
    );
}
 
export default Header;