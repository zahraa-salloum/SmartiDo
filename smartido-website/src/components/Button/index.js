


const Button = ({name_button,onSubmit}) => {
    return (
        <button className='btn' onClick={onSubmit}>
            {name_button}
        </button>
    );
}
export default Button;