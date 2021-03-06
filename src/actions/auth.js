import * as types from '../types/auth';

export const completeAuth = () =>({
    type: types.AUTH_COMPLETED,
    payload: {}
});

export const failAuth = () => ({
    type: types.AUTH_FAILED,
    payload: {}
});

export const logOut = () => ({
    type: types.LOGOUT_COMPLETED,
    payload: {}
})