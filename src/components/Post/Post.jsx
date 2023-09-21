import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,name,email,body}=post
    const navigate = useNavigate()
    const handlePostDetails=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className=" bg-red-200">
            <h1>Post id:{id}</h1>
            <h1>Post name:{name}</h1>
            <h1>Post email:{email}</h1>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}><button>Post details</button></Link>
            <button onClick={handlePostDetails}>Details</button>
        </div>
    );
};

export default Post;