const initialState = {
    pending: false,
    pois: [],
    error: null
}

const  jsonReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_JSON_PENDING':
        console.log('FETCH_JSON_PENDING reducer - pending:' + state.pending)
            return {
                ...state,
                pending: true
            };
        case 'FETCH_JSON_SUCCESS':
            console.log('FETCH_JSON_SUCCESS reducer - pending:' + state.pending + ' pois: ' + action.payload)
            return {
                ...state,
                pending: false,
                pois: action.payload
            };
        case 'FETCH_JSON_ERROR':
        console.log('FETCH_JSON_ERROR reducer')
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default jsonReducer;
/*
export const getJson = state => state.json;
export const getJsonPending = state => state.pending;
export const getJsonError = state => state.error;
*/
