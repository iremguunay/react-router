import { useEffect, useState } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";

import User from "./User";
import Error404 from "./Error404";

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    const { path, url } = useRouteMatch();

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h2>Users</h2>
            {loading && <div>Loading...</div>}
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <NavLink activeClassName="active" to={`${url}/${user.id}`}>{user.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}/>
            </Switch>
        </div>
    )
}

export default Users
