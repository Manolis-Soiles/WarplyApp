

export const fetchJsonPending = () =>({

    type: 'FETCH_JSON_PENDING'

})

export const fetchJsonSuccess = (json) =>({

    type: 'FETCH_JSON_SUCCESS',
    payload: json

})

export const fetchJsonError = (error) =>({

    type: 'FETCH_JSON_ERROR',
    payload: error

})
