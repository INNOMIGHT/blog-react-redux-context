import  LikeContext  from "./LikeContext";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/index";

const LikeState = (props) => {

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)
    const blogState = useSelector(state => state.blog)
    const params = useParams();
    const blogId = params.blogId;
    const selectedBlog = blogState[blogId-1]


    const [likes, setLikes] = useState()
    
    const refreshLikes = (blog) => {
        setLikes(blog.likes)
    }

    const addLike = (blog) => {
        blog.likes = blog.likes + 1
        console.log(blog)
        setLikes(blog.likes)
        actions.refreshState(blog);
    }

    return (
        <LikeContext.Provider value={{likes, addLike, refreshLikes}}>
            {props.children}
        </LikeContext.Provider>
    )
}

export default LikeState