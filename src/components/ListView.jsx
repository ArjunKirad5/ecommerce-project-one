import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import Product from "./Product";

const ListView = ( {products} ) => {

// console.log(`this is list ${products}`);

// let xav = JSON.stringify(products);

// console.log(xav);

return (
    <>
      <div className="w-[700px] grid gap-y-3">
        
        {products.map((prol) => {
          
          return prol.map((prod) => {
            
            const { id, name, image, price, description } = prod; 
            
            return (

              <div key={id + 1} className="grid grid-cols-2">
                <figure className="w-[250px]">
                  <img src={image} alt={name} />
                </figure>

                <div className="w-[400px]">
                  <h3>{name}</h3>
                  
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  
                  <p>{description.slice(0, 99)}</p>
                  
                  <NavLink to={`/singleproduct/${id}`}>
                    <button className="bg-purple-600 p-1 rounded-md">
                      Click Here
                    </button>
                  </NavLink>
                
                </div>
              </div>
              );
          }
        );
        }
        )
        }
      </div>
    </>
  );
};

export default ListView;
