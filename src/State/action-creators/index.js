export const listBlog = (blogList) => {
    return (dispatch) => {
        dispatch({
            type: "list-blog",
            payload: blogList
        })
    }
}

export const addBlog = (blog) => {
    return (dispatch) => {
        dispatch({
            type: "add-blog",
            payload: blog
        })
    }
}

export const deleteBlog = (id) => {
    return (dispatch) => {
        dispatch({
            type: "delete-blog",
            payload: id
        })
    }
}

export const findBlog = (blog) => {
    return (dispatch) => {
        dispatch({
            type: "find-blog",
            payload: blog
        })
    }
}

export const editBlog = (id, blog) => {
    return (dispatch) => {
        dispatch({
            type: "find-blog",
            payload: {id, blog}
        })
    }
}

export const refreshState = (blog) => {
    return (dispatch) => {
        dispatch({
            type: "refresh-state",
            payload: blog
        })
    }
}
