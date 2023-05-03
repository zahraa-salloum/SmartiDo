import Navbar from "../../components/Navbar";



const StatisticsPage = () => {
    const name = localStorage.getItem('name');

    return (
        <>
        <Navbar name={name} />
        </>
    );
}


export default StatisticsPage;