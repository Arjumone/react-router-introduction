

const User = ({user}) => {
    const {name,id,website}= user
    return (
        <div className=" ">
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{website}</h1>
        </div>
    );
};

export default User;