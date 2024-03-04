import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Keycloak from 'keycloak-js';
import { jwtDecode } from "jwt-decode";

const keycloak = new Keycloak({
    url: 'http://192.168.12.231:8080/auth/',
    realm: 'ISC',
    clientId: 'contact',
    secret: 'Kzgr6A0iEDZrBylgzbdow9msDbIZQ2Ae',
});

function Management() {
    const [authenticated, setAuthenticated] = useState(false);
    const [userRoles, setUserRoles] = useState([]);
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const initKeycloak = async () => {
            try {
                const authenticated = await keycloak.init({ onLoad: 'check-sso', initOptions: { pkceMethod: 'S256', checkLoginIframe: false } });
                console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
                setAuthenticated(authenticated);

                if (authenticated) {
                    const token = keycloak.token;
                    const decodedToken = jwtDecode(token);
                    const roles = decodedToken.realm_access.roles;
                    const name = decodedToken.name
                    setUserRoles(roles);
                    setFullName(name);
                }
            } catch (error) {
                console.error('Failed to initialize adapter:', error);
            }
        };

        initKeycloak();
    }, []);

    const handleLogout = () => {
        keycloak.logout();
    };

    const handleLogin = () => {
        keycloak.login();
    };

    return (
        <div className="panel app">
            <div className="sidebar">
                <NavLink to={"/"}> Welcome ! </NavLink>
                <NavLink to={"/managment"}> Project Information </NavLink>
                <NavLink to={"managment/user"}> User </NavLink>
                <NavLink to={"managment/groups"}> Groups </NavLink>
            </div>
            <div className="content">
                {authenticated ? (
                    <Outlet />
                ) : (
                    <p>You do not have permission to access this content!</p>
                )}
            </div>
            <div className="user-info">
                {authenticated ? (
                    <>
                        <h3>{fullName}</h3>
                        <h5>User Roles:</h5>
                        <ul>
                            {userRoles.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>
                        <button className="logOut" onClick={handleLogout}>Log Out</button>
                    </>
                ) : (
                    <button className="logOut" onClick={handleLogin}>Log In</button>
                )}

            </div>
        </div>
    );
}

export default Management;
