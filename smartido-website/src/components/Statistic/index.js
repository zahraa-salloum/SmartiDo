

const Statistic=({statistic_title,statistic_number})=>{
    return(
        <div className="statistic_container">
            <div className="statistic_title">{statistic_title}</div>
            <div className="statistic_number">{statistic_number}</div>
        </div>
    );
}


export default Statistic;