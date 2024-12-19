import Product from "./Product"

const Gridview = ({products}) => {
    
    console.log(products);
    return(
        <>
        <div className="grid grid-cols-3 w-[700px]">
            {
                products?.[0].map((prodx) => {

                 return <Product key={prodx.id} {...prodx} /> 
                
                })
            }
        </div>
        </>
    )

}

export default Gridview;