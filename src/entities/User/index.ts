import { getUserData } from "./model/selectors/getUserData";
import { userActions, userReducer } from "./model/slices/counterSlice";
import { User, UserState } from "./model/types/UserState";

export {
    User,
    UserState,
    userActions,
    userReducer,
    getUserData
}