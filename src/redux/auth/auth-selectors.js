export const isUserLogin = store => store.auth.isLogin;

export const getAuth = store => {
    const { isLogin, token } = store.auth;
    return { isLogin, token }
};

export const getUser = store => store.auth.user;