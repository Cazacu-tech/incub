/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom';


const ActionLinkTwo = ({id}) => {
        const navigate = useNavigate();

        return (
            <>
                {/* Button */}
                <button className='' onClick={() => navigate(`/favoris/${id}`)}>Go to favoris</button>


            </>
        )
};
export default ActionLinkTwo;

