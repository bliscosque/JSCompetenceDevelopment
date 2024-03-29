import createDataContext from "./createDataContext";

const blogReducer = (state,action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state,{title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random()*99999)}]
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id!==action.payload);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                if (blogPost.id===action.payload.id) return action.payload;
                else return blogPost
            })
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title,content, callback) => {
        dispatch({type: 'add_blogpost', payload:{title,content}});
        callback();
    } 
} 

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogpost', payload: {id, title, content}});
        callback();
    }
}

export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost, deleteBlogPost, editBlogPost},[{title: 'TEST',content: 'Just testing',id:1 }]);