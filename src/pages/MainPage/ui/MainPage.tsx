import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"

const MainPage = () => {

    const testButton = () => {
        alert('Clicked!')
    }

    return (
        <div>
            <AppButton theme={AppButtonTheme.PRIMARY} onClick={testButton}>
                Login
            </AppButton>
        </div>
    )
}

export default MainPage