import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching () {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [value, setbtvalue] = useState(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then(res => {
        console.log('response :', res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }, [value])
  const submitFunction = () => {
    if (id) {
      setbtvalue(id)
    }
  }
  return (
    <div>
      <input value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={submitFunction}>
        Submit
      </button>
      <div>
        {posts.title}
        {/* {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </div>
    </div>
  )
}

export default DataFetching
