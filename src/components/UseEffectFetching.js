import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectFetching() {
  const [post, setPost] = useState('');
  const [id, setId] = useState(1);
  const [IDFromButtonClick, setIDFromButtonClick] = useState(1);
  
  const handleClick =()=>{
      setIDFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${IDFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },[IDFromButtonClick])

  return <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      {/* <ol>
          {
              post.map(post=> <li key={post.id}>{post.title}</li>)
          }
      </ol> */}
      <h4>{post.title}</h4>
  </div>;
}

export default UseEffectFetching;
