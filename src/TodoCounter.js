import './TodoCounter.css'

function TodoCounter({completed, total}) {
    return (
        <>
            <h1>
                Has completado  { completed }  de  { total }  Todo's
            </h1>
        </>
    )
}

export {TodoCounter};