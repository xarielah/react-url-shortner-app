import './modals.css'

type Props = {
    setter(): void;
    msg?: string;
}

const SuccessModal: React.FC<Props> = ({ setter, msg }) => {

    setTimeout(() => {
        setter()
    }, 3000)

    return (
        <div className="modal modal-animation">
            <p className='success-modal'>{msg ? msg : 'Action completed successfuly!'}</p>
        </div>
    )
}

export default SuccessModal