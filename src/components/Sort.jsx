import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = ()=> {
    
    const {grid_view,setGridView,setListView,filter_products,sorting} = useFilterContext();
    
    return(
    <>
    <div className="flex justify-evenly items-center h-[60px]">
    
        <div>
            <button className={grid_view ? "bg-black text-white" : "bg-yellow-500" } onClick={setGridView}>
                <BsFillGridFill/>
            </button>

            <button className={grid_view ? "bg-yellow-600" : "bg-black text-white"} onClick={setListView}>
                <BsList/>
            </button>
        </div>
        {/* in the below line we have to get length of products which is array within array */}
        <div>Product Available</div>  
    
        <div>
            <form action="#">
              <label htmlFor="sort"></label>
                 <select name="sort" id="sort" onClick={sorting}>
                        <option value="Lowest">Price(Lowest)</option>
                        <option value="#" disabled></option>
                        <option value="Highest">Price(Highest)</option>
                        <option value="#" disabled></option>
                        <option value="a-z">Price(a-z)</option>
                        <option value="#" disabled></option>
                        <option value="z-a">Price(z-a)</option>
                 </select>
            </form>
        </div>
    
    </div>
    </>)
}

export default Sort;