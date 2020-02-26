import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect( () => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)   

        //Al regresar esta función se pueden limpiar subscripciones, timers o eliminar manejadores de eventos
        return () => { 
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
        
    }, []) // La función se ejecuta una sola vez ya que no depende de ninguna propiedad o estado, 
           // por lo que sólo se ejecuta en el render inicial

    return (
        <div>
            Hooks X: {x} / Y: {y}
        </div>
    )
}

export default HookMouse
