import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";
import Sort from "./Sort";
import { useFilterContext } from "../context/filterContext";

const Products = () => {
  
  return (
    <>
      <div className="p-1 flex justify-around">
          
          <div className="p-1">
            <FilterSection/>
          </div>
          
          <section>
            
            <div>
              <Sort/>
            </div>
            
            <div>
              <ProductsList/>
            </div>
          
          </section>
      
      </div>
    </>
  );
};

export default Products;
