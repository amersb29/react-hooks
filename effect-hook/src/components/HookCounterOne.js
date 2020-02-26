import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( () => { //Corre cada vez que se renderiza el componente

        console.log('Updating document title')
        document.title = `You clicked ${count} times`
    }, [count]) //Cuando cambia el valor del segundo parámetro, se ejecuta la función

    return (
        <div>
            <input 
                type="text"
                value={name}
                onChange={ e => setName(e.target.value)}
                />
            <button onClick={ () => setCount(count + 1) }>
                Click {count} times
            </button>
        </div>
    )
}

export default HookCounterOne
