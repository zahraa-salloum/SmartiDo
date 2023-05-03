

const User=({user_name,user_image,onBlock})=>{

    if(user_image === `data:image/png;base64,${null}`){
        user_image = require('../../assets/student.png');
    }  
    return(
        <div className="user_container">
            <img src={user_image} className="user_image" />
            <div className="user_name"> {user_name} </div>
            <button className='user_block_btn' onClick={onBlock}>
             block
            </button>
        </div>
    );
}


export default User;