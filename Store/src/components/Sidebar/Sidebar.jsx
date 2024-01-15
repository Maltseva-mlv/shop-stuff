import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {

    const { list } = useSelector(({ categories }) => categories);

    console.log('list', list);
    return (  
        <div className="sidebar">
        <div className="sidebar__inner">
            <h3 className="sidebar__title">Categories</h3>

            <nav className="nav__categories">
                {
                    list.map(({ id, name }) => (
                        <NavLink key={id} 
                            to={`/categories/${id}`}
                            className="nav__link"
                            activeClassName="active-link"
                            style={({ isActive }) => ({
                                color: isActive ? "#8B57C6" : "#576067"
                            })}
                        > 
                        {name} 
                        </NavLink>
                    ))
                }
            </nav>
        </div>
    </div>
    );
}
 
export default Sidebar;
