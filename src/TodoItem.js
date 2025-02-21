import './TodoItem.css'

function TodoItem(props) {
    return (
        <>
            <li>
                <span>
                    <input className='checkbox' type="checkbox" checked={props.checked} onChange={props.onChange} />
                </span>
                <p>
                    {props.text}
                </p>
                <span>
                    <div className="del">
                        <div>
                          Delete
                        </div>
                    </div>
                </span>
            </li>
        </>
    )
}

export {TodoItem};