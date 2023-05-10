

const EmptyState = ({message,goBack}) => {
    return (
        <div className='container_empty'>
            <img src={require('../../assets/empty.png')} className="img_lost" />
            <div className='message_empty'>{message}</div>
            <button className='empty_btn' onClick={goBack}>Go Back to Login</button>
        </div>
    );
}
export default EmptyState;