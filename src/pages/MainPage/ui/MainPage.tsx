import AppButton from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {
    const onClickButton = () => {
        alert('Clicked!')
    }

    return (
        <div>
            <AppHeader>
                <AppButton onClick={onClickButton}>
                    Login
                </AppButton>
            </AppHeader>
            MainPage
        </div>
    )
}
export default MainPage