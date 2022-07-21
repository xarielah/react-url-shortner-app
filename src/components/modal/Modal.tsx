import './modals.css'

type Props = {
    setter(): void;
    msg?: string;
    type: "success" | "error"
}

const Modal: React.FC<Props> = ({ setter, msg, type }) => {

    setTimeout(() => {
        // This gets a setter function.
        // In order to change boolean value that responsible for displaying this component.
        // Works with 3 seconds timing.
        setter()
    }, 3000)

    return (
        <div className="modal modal-animation">
            <div className='modal-icon'>{type === "success" ? '✔️' : '❌'}</div>
            <p className='success-modal'>{msg ? msg : 'Action completed successfuly!'}</p>
        </div>
    )
}

export default Modal