import { Link } from "react-router-dom";


const User = ({user}) => {
    const {name,id,website}= user
    return (
        <div className=" border-4">
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{website}</h1>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;