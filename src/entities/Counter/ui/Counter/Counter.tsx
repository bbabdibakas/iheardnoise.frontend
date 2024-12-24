import { getCounterValue } from "../../model/selectors/getCounterValue"
import { counterActions } from "../../model/slices/counterSlice"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)
    const onIncrement = () => {
        dispatch(counterActions.increment())
    }

    const onDecrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <div>
                Counter: {value}
            </div>
            <div>
                <button onClick={onIncrement}>increment</button>
                <button onClick={onDecrement}>decrement</button>
            </div>
        </div>
    )
}

export default Counter