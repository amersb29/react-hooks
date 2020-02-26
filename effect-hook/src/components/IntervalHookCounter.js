import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // function doSomething() {
        //     console.log(someProp)
        // }

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    // }, [someProp]) // Se deben considerar como dependencias las propiedades o estados ocupados dentro de las funciones declaradas dentro de useEffect
    // }, [count]) // Se debe agregar el parámetro del estado que está cambiando si en tick el paso es el No. 1
    }, []) // El arreglo será vació si se en tick se utiliza el paso No. 2

    const tick = () => {
        // setCount(count + 1) //Paso No. 1
        setCount(prevCount => prevCount + 1) //Paso No. 2
    }
    
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter
