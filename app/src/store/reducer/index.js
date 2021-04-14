import {FETCH_CAT_SUCCESS, FETCH_FACTS_SUCCESS, FETCH_START,FETCH_FAILURE} from '../actions';

const initialState = {
    isLoading: false,
    cats:[],
    facts:[],
    error:""
}

export const reducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                isLoading:true
            }
        case FETCH_CAT_SUCCESS:
            return{
                ...state,
                cats: action.payload,
                isLoading:false,
                error: ""
            };
            case FETCH_FACTS_SUCCESS:
                return{
                 ...state,
                 facts: action.payload,
                //  isLoading:false,
                };
            case FETCH_FAILURE:
                return{
                 ...state,
                 isLoading:false,
                 error: action.payload
                }
        default:
            return state;
    }
}