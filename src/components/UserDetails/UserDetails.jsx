import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name}=user;
    return (
        <div>
            <h2 className=" text-3xl">User Details here:{name}</h2>
        </div>
    );
};

export default UserDetails;