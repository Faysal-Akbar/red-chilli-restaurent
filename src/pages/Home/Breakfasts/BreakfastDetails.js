
import { useParams } from 'react-router';

const BreakfastDetails = () => {
    const {breakfastId} = useParams();

    return (
        <div>
            <h2>This is Breakfast Details {breakfastId}</h2>
        </div>
    );
};

export default BreakfastDetails;