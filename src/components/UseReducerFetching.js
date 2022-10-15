// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// // we ll see it first with useastate and then useReducer----

// function UseReducerFetching() {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [post, setPost] = useState({});

//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res)=>{
//             setLoading(false)
//             setPost(res.data)
//             setError('')
//         })
//         .catch((err)=>{
//             setLoading(false)
//             setPost({})
//             setError('something went wrong')
//         })
//     },[])

//   return (
//     <div>
//         {
//             loading ? 'loading' : post.title
//         }
//         {
//             error ? error : null
//         }
//     </div>
//   )
// }

// export default UseReducerFetching

// now we ll acheiv the same with useReducer-----

import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};

function UseReducerFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default UseReducerFetching;
