const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUsername = (state) => state.auth.user.name;
const getIsFetching = (state) => state.auth.isFetching;

export default { getIsLoggedIn, getUsername, getIsFetching };
