import axios from 'axios';
import { useDispatch } from 'react-redux';

function GetAll() {
  const dispatch = useDispatch();
  axios.get("http://localhost:3000/prod")
    .then(
      (result) => {
        dispatch({ type: 'GET_ALL', setIsLoaded: result })
        dispatch({ type: 'GET_ALL', setItems: result })
      },
      (error) => {
        dispatch({ type: 'GET_ALL', setError: error })
      }
    )
}

export default GetAll;

