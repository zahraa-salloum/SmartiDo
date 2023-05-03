

const Alert = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="alert">
            <div className="alert_message">{message}</div>
            <div className="alert_buttons">
                <button className="alert_confirm" onClick={onConfirm}>Confirm</button>
                <button className="alert_cancel" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}
  
export default Alert;