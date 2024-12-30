import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { Sidebar } from 'widgets/Sidebar'
import { useAppDispatch } from 'shared/lib/useAppDispatch/useAppDispatch'
import { userActions } from 'entities/User'
import { AppRouter } from './providers/AppRouter'

const App = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])

    return (
        <div className={'wrapper'}>
            <div className={'page'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App