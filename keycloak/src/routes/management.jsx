import { NavLink, Outlet } from "react-router-dom";

function Management() {
    return (
        <div className="panel app">
            <div className="sidebar">
                <NavLink to={"/"}> Welcome ! </NavLink>
                <NavLink to={"/managment"}> Project Information </NavLink>
                <NavLink to={"managment/user"}> User </NavLink>
                <NavLink to={"managment/groups"}> Groups </NavLink>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Management;