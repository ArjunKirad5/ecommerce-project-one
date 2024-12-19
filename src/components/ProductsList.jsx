import { useFilterContext } from "../context/filterContext";
import Gridview from "./Gridview";
import ListView from "./ListView";

const ProductsList = ()=> {
    
    const {filter_products ,grid_view, setGridView} = useFilterContext();

    if (grid_view === true) {
        
        return <Gridview products={filter_products}/>

    } else {

       return <ListView products={filter_products}/>
    
    }
}

export default ProductsList;