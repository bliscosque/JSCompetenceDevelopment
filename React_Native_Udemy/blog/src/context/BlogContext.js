import React, {useReducer} from "react";

const BlogContext = React.createContext();

const blogReducer = (state,action) => {
    switch (action.type) {
        case 'add_blog_post':
            return [...state,{title: `Blog Post #${state.length + 1}`}]
        default:
            return state;
    }
}

export const BlogProvider=({children}) => {
    
    const [blogPosts,dispatch] = useReducer(blogReducer,[]);

    const addBlogPost = () => {
        dispatch({type: 'add_blog_post'})
    }
    
    return (<BlogContext.Provider value={{data:blogPosts, addBlogPost: addBlogPost}}>{children}</BlogContext.Provider>)
}

export default BlogContext;