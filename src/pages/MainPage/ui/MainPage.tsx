import AppButton from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {

    const onTestClick = () => {
        console.log('clicked.')
    }

    return (
        <div className="content">
            <AppHeader>
                <AppButton onClick={onTestClick}>
                    Login
                </AppButton>
            </AppHeader>
            MainPage
        </div>
    )
}

export default MainPage