import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalvalue } from "../context/productcontext";
import PageNavigation from "./PageNavigation";
import FormatPrice from "../helpers/FormatPrice";
import Myimage from "./Myimage";
import Stars from "./Stars";
import AddToCart from "./AddToCart";


const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { id } = useParams();

  const { getSingleProduct, isSingleLoading, singleProduct } = useGlobalvalue();

  const {
    id: alias,
    name,
    compant,
    image,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

 

  
  
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  
  
  if (isSingleLoading) {
    return (
      <div className="bg-red-400 h-[70px] text-black text-[25px] text-center">
        Loading
      </div>
    );
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="border-[2px] text-white">
        <div className="flex justify-evenly items-center">
          {console.log(image)}

          <Myimage images={image} />

          <div className="bg-amber-600 flex-col justify-evenly p-2 rounded-[5px]">
            <h2>Name : {name}</h2>
            <Stars stars={stars} reviews={reviews} />

            <p>
              MRP:{" "}
              <del>
                {" "}
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            <p>
              Deal of the day: <FormatPrice price={price} />
            </p>

            <p className="w-[450px] h-[180px] bg-zinc-400 rounded-[5px] text-left p-1">
              {description}
            </p>

            <div>
              <span>Free Delivery</span>
              <span>30 Days Replacemnt</span>
              <span>Orignal Assured</span>
              <span>2 years Warranty</span>
            </div>

            <div>Availablity :{stock > 0 ? " In Stock" : "Not Available"}</div>

            <hr className="h-[4px] bg-black border-none" />

            {stock > 0 && <AddToCart product={singleProduct} />}

          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
