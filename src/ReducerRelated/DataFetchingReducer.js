import React from 'react'

const initState = {
  loading : false,
  error : '',
  posts : {}
}
const reducer = (state, action) =>{
  switch(action.type){
    case 'Fetch_success' :
      return {
        loading : false,
        post : action.payload,
        error : ''
      }
      case 'Fetch_error' :
        return {
          loading : true,
          post : {},
          error : 'Something wrong'
        }
        default : 
        return state
  }
}
function DataFetchingReducer() {
    const [posts, setPosts] = useState({})
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [ state, dispatch] = useReducer(reducer, initState)
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then((res) => {
          dispatch({type : 'Fetch_success', payload : res.data})
        })
        .catch(err => {
          dispatch({type : 'Fetch_error'})

        })
    }, [])
    return (
      <div>
       {state.loading ? 'Loading' : state.post.title}
       {state.error ? state.error : null}
      </div>
    )
}

export default DataFetchingReducer
