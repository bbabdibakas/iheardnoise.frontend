import { AppButton, AppButtonTheme } from "shared/ui/AppButton"

const MainPage = () => {

    const testButton = () => {
        alert('Clicked!')
    }

    return (
        <div>
            <AppButton onClick={testButton}>
                Login
            </AppButton>
            <AppButton theme={AppButtonTheme.PRIMARY} onClick={testButton}>
                Login
            </AppButton>
        </div>
    )
}

export default MainPage