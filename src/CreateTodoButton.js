import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button className="c-button">
          <span className="c-main">
            <span className="c-ico"><span className="c-blur"></span> <span className="ico-text">+</span></span>
            Crear Todo
          </span>
        </button>
    );
}

export {CreateTodoButton};