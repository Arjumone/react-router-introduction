import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>user page</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    users.map(user =><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;