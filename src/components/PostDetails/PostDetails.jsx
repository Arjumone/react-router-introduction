import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData()
    const navigate = useNavigate()
    const {postId} = useParams()
    const {id,body}= postDetails;

    console.log(postId);

    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Post Details Id:{id}</h1>
            <h1 className=" bg-slate-400">Post:{body}</h1>
            <button onClick={handleBack}>go back</button>
        </div>
    );
};

export default PostDetails;