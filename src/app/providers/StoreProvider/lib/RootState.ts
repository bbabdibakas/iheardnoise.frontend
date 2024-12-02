import { UserState } from "entities/User";
import { AuthFormState } from "features/AuthByUsername";

export interface RootState {
    authForm: AuthFormState
    user: UserState
}