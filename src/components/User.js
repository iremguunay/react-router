import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios";

function User() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const { id } = useParams();
    
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <div>
            <h2>User Detail</h2>
            {loading && <div>Loading...</div>}
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

            <Link to={`/users/${Number(id)+1}`}>Next User ({Number(id) + 1})</Link>
        </div>
    )
}

export default User