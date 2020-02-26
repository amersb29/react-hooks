import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'DECREMENT':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'INCREMENT_2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'DECREMENT_2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'INCREMENT', value: 1 })}>Increment 1</button>
            <button onClick={() => dispatch({type: 'DECREMENT', value: 1 })}>Decrement 1</button>
            <button onClick={() => dispatch({type: 'INCREMENT', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({type: 'DECREMENT', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
            <div>
                <button onClick={() => dispatch({type: 'INCREMENT_2', value: 1 })}>Increment 1</button>
                <button onClick={() => dispatch({type: 'DECREMENT_2', value: 1 })}>Decrement 1</button>
            </div>
        </div>
    )
}

export default CounterTwo
