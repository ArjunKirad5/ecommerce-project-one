import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({stars,reviews}) => {

    const ratingstar = Array.from({length: 5},(elem,index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (<FaStar className="text-green-500"/>) 
                    : stars >= number ? (<FaStarHalfAlt className="text-green-500"/>)
                    : (<AiOutlineStar/>)
                }
            </span>
        )
    })
    
    return(<>
   <div className="flex items-center">
    {ratingstar}
    <p className="mx-2">From {reviews} customer reviews.</p>
    </div>
    </>)
}
export default Stars;