import Navbar from "../../components/Navbar";
import Statistic from "../../components/Statistic";
import {useState, useEffect } from "react";
import axios from "axios";
import { numbers } from '../../constants/constants';
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";


const DashboardPage = () => {
    const [totalCount, setTotalCount] = useState([]);
    const [femaleCount, setFemaleCount] = useState([]);
    const [maleCount, setMaleCount] = useState([]);
    const [blockedEmailCount, setBlockedEmailCount] = useState([]);
    const [regeneratesAvg, setRegeneratesAvg] = useState([]);
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const [ages, setAges] = useState([]);
    const [agesCount, setAgesCount] = useState([]);

    

    useEffect(() => {
        const getStatistics = () => {
            axios.get(numbers.server +"admin/satistics", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                setTotalCount(response.data.total_count)
                setFemaleCount(response.data.female_count)
                setMaleCount(response.data.male_count)
                setBlockedEmailCount(response.data.blocked_email_count)
                setRegeneratesAvg(response.data.regenerates_avg)

            }).catch((err) => {
                    console.log(err);
            })
        }

        const getUsesByAge = () => {
            axios.get(numbers.server +"admin/get_users_age", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                const data = response.data.users_by_age;

                const ages = Object.keys(data);
                const counts = Object.values(data);

                setAges(ages);
                setAgesCount(counts);

            }).catch((err) => {
                    console.log(err);
            })
        }
        getUsesByAge();
        getStatistics();
    },[]) 

    return (
        <>
            <Navbar name={name} title={'Dashboard'} />
            <div className="container_statistics">
                <PieChart title={'Total Users'} labels={['Active Users','Blocked Users']} dataPie={[totalCount, blockedEmailCount]} />
                <PieChart title={'Users by Gender'} labels={['Female Users','Male Users']} dataPie={[femaleCount, maleCount]} />
                <BarChart title={'Users by Age'} titleGraph={'Number of users with respect to ages'} labels={ages}  dataBarGraph={agesCount}/>
                <Statistic statistic_title={'Regenerates Average'} statistic_number={regeneratesAvg} />
            </div>
        </>
    );
}


export default DashboardPage;