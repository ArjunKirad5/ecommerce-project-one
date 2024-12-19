
import { useGlobalvalue } from "../context/productcontext";
import Product from "./Product";



const FeatureProduct = ()=> {

    const {isLoading, featureProducts} = useGlobalvalue();

    if (isLoading || featureProducts.length === 0) {
        return (<>
        <div className="bg-red-600 text-[18px] text-center h-[50px] p-2">Loading Items</div>
        </>)
    } else {
        return (
            <>
            <div className="bg-blue-300">
            <p className="text-[17px]">Check Now</p>
            <p className="text-[15px]">Our feature services</p>
            <div className="flex justify-evenly">
                 {featureProducts.map((prod,ind) => {
                    return <Product key={ind + 1} {...prod}/>
                })}
                
            </div>
            </div>
            </>
        )
    }
}

export default FeatureProduct;