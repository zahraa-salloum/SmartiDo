import EmptyState from "../../components/EmptyState";
import { useNavigate } from "react-router-dom";


const EmptyPage = () => {
    const navigator = useNavigate();

    const handleGoBack=()=>{
        navigator('/login');
    }

    return (
        <>
            <EmptyState message={'Are You Lost ?'} goBack={handleGoBack}/>
        </>
    );
}

export default EmptyPage;