import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const Product = (prod) => {
    
    const {id,name,price,image,category} = prod; //check why here prod is not destructured.
   
    return(
    <>
    <NavLink to={`/singleproduct/${id}`} className="m-2 bg-gray-100 rounded-md">
    <div className="w-[220px]"><img className="rounded-md" src={image} alt="photo"/></div>
    <p className="text-center">Name: {name}</p>
    <p className="text-center">Price : {<FormatPrice price = {price}/>}</p>
    </NavLink>
    </>
    )
}

export default Product;