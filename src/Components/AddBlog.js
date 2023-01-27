import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import {actionCreators} from "../State/index"

export const AddBlog = () => {

    const navigate = useNavigate();
    const state = useSelector(state => state.blog)

    const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    console.log(state)

    const [inputs, setInputs] = useState({
        id: state.length + 1,
        title: "",
        description: "",
        likes: 0
    });

    const [errors, setErrors] = useState({
        titleError: "",
        descriptionError: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        if (inputs.description.length < 40){
            setErrors({descriptionError: "Length of description should be atleast 40"})
            return errors
        }
        else {
            actions.addBlog(inputs);
        }
        console.log(actions.listBlog)
        navigate("/blog-react-redux-context")
    }

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)


    return (
        <div className="container">
            <br />
            <button className="btn btn-light my-3" onClick={() => navigate('/blog-react-redux-context')}>Back</button>
            <h3 className="my-5">Add Blog</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Learn Python" required onChange={
                ({target}) => setInputs(state => ({...state, title:target.value}))
                } 
                value={inputs.title || ""} />
                </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" required minLength={40} onChange={
                ({target}) => setInputs(state => ({...state, description:target.value}))
                } 
                value={inputs.description || ""}></textarea>
                <span className="error">{errors.descriptionError}</span>
            </div>
            <div className="mb-3">
                <button type="submit" onSubmit={handleSubmit} className="btn btn-dark">Add Blog</button>
            </div>
            </form>
        </div>
    )
}