import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {

    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick ] = useState(1)

    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/posts`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then( res => setPost(res.data))
            .catch( err => console.log(err))
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    
    return (
        <div>
            <input 
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            {/* <ul>
                {
                    posts.map( post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
            <div>
                {post.title}
            </div>
            <button type="button" onClick={handleClick}>
                Fetch Post
            </button>
        </div>
    )
}

export default DataFetching
