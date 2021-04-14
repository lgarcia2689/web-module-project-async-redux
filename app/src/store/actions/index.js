import axios from 'axios';

export const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS";
export const FETCH_FACTS_SUCCESS = "FETCH_FACTS_SUCCESS";
export const FETCH_START = "FETCH_START"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const fetchData = () => {
    return (dispatch) => {
        dispatch({type:FETCH_START})

        axios.get('https://thatcopy.pw/catapi/rest/')
        .then((res) => {
            console.log(res.data)
            dispatch({type: FETCH_CAT_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
        axios.get('https://cat-fact.herokuapp.com/facts')
        .then((res) => {
            console.log(res.data)
            dispatch({type: FETCH_FACTS_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err.message)
            dispatch({type:FETCH_FAILURE, payload: err.message})
        })
    }
}