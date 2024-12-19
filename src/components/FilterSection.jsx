import { useFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";

const FilterSection = () => {
  
  const {
    filter: { text,category,color,price,maxPrice,minPrice},
    all_products,
    updateFilterValue,
    clearFilter
  } = useFilterContext();


  const getUniqueData = (data, property) => {

    let newVal = data.map((curr) => {

      return curr.map((prod) => {
   
        return prod[property];
   
      });
    });

    if (property === "colors") {
      
      return (newVal = ["All",...new Set(newVal.flat(2))])   //flat method is used to to remove sub array into one array.

    } else {
    
      return (newVal = ["All",...new Set(...newVal)]) //In bracet of set we have used spread operator to remove one nesting of array.
    }
  };

  const categoryOnlyData = getUniqueData(all_products, "category");

  const companyOnlyData = getUniqueData(all_products, "company");

  const colorsOnlyData = getUniqueData(all_products, "colors");

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="w-[200px] h-[40px] text-[18px] text-black bg-gray-300 text-center p-1"
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>

      <div className="flex-col">
        <h3>Category</h3>
        <div className="flex-col justify-center items-center">
          {categoryOnlyData.map((prod, ind) => {
            return (
              <button
                className="m-1 block"
                key={ind + 1}
                type="button"
                name="category"
                value={prod}
                onClick={updateFilterValue}
              >
                {prod}
              </button>
            );
          })}
        </div>
        <h3>Company</h3>
        <select name="company" id="company" onClick={updateFilterValue}>
          {companyOnlyData.map((curr, ind) => {
            return (
              <option key={ind} name="company" value={curr}>
                {curr}
              </option>
            );
          })}
        </select>
        <div>
          <h3>Colors</h3>
          <div className="bg-gray-100 flex justify-evenly">
            {colorsOnlyData.map((curCol,ind) => {
                
                if(curCol === "All") {
                  return (<>
                  <button 
                  key={ind}
                  value={curCol}
                  name="color"
                  type="button"
                  // style={{backgroundColor:curCol}}
                  onClick={updateFilterValue}
                  className="p1 m-0.5 w-[20px] h-[20px]">
                    All
                    </button>
                  </>)

                }
                
                
                return(<>
                  <button 
                  key={ind}
                  value={curCol}
                  name="color"
                  type="button"
                  style={{backgroundColor:curCol}}
                  onClick={updateFilterValue}
                  className={color === curCol ? "p1 m-0.5 w-[20px] h-[20px] text-yellow-400" : "p1 m-0.5 w-[20px] h-[20px] opacity-45"}>
                    {color === curCol ? <FaCheck/> : null}
                    </button>
                  </>
                )
            })}
          </div>
        </div>

        <div>
          <h3>Price</h3>
          <p><FormatPrice price={price}/></p>
          <input
          type="range"
          min={minPrice}
          max={maxPrice}
          name="price"
          value={price}
          onChange={updateFilterValue}
          />
        </div>

        <div>
          <button
          className="p-2 h-[40px] bg-orange-500 flex items-center rounded-sm"
          onClick={clearFilter}
          >Clear Filters</button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
