import blogs from "../data"
const reducer = (state=blogs, action) => {
    if (action.type === "list-blog") {
        return state
    }
    else if (action.type === "add-blog"){
        state.push(action.payload)
        return state
    }
    else if (action.type === "delete-blog") {
        state = state.filter((blog) => {
            return blog.id !== action.payload
          })
          return state
    }
    else if (action.type === "find-blog") {
        for(let i=0; i<=state.length; i++){
            if(state[i].id === action.payload){
                console.log(state[i])
                return state[i]
            }
            else{
                return "Blog not Found"
            }
        }
    }
    else if (action.type === "edit-blog") {
        state = state.filter((blog) => {
            return blog.id !== action.payload.id
          })
          console.log('deleted')
        state.push(action.payload.blog)
        return state;
    }
    else if (action.type === "refresh-state"){
        return state
    }
    else {
        return state
    }
}

export default reducer