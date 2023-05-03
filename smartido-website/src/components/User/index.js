

const User=({user_name,user_image,onBlock})=>{  
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