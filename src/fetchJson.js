import {fetchJsonPending, fetchJsonSuccess, fetchJsonError} from './actions';

export const fetchJson = () => {
    return async dispatch => {
        dispatch(fetchJsonPending());
        try {
        return fetch('https://warply.s3.amazonaws.com/data/test_pois.json')
          .then((response) => response.json())
          .then((responseJson) => {
            dispatch(fetchJsonSuccess(responseJson));//, function(){} before ')'
          })
        }
        catch (error) {
        dispatch(fetchJsonError(error))
        }
    };
};
