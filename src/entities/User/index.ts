import { getUserData } from "./model/selectors/getUserData";
import { userActions, userReducer } from "./model/slices/userSlice";
import { User, UserState } from "./model/types/UserState";

export {
    User,
    UserState,
    getUserData,
    userActions,
    userReducer,
}