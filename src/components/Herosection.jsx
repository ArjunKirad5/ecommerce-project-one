import { NavLink } from "react-router-dom";

const Herosection = ({props})=> {
  
    const {name} = props;
    return (
    <>
      <div className="flex justify-evenly items-center my-1 border-black border-[2px] p-2">
        
        <div className="w-[500px]">
          
          <img src="/grocerypic.jpg" alt="Image here" />
        
        </div>
        
        <div className="flex-col justify-evenly p-2 w-[700px]">
          
          <span className="text-[18px] font-bold my-1">Welcome to</span>
          
          <h3 className="font-semibold">{name}</h3>
          
          <p className="my-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias adipisci maxime aliquam et voluptate,
             tempora totam accusantium id nobis voluptatibus expedita officia culpa,
             illum magni quo corporis? Velit tempore debitis libero in voluptas illo. Fugiat,
             commodi animi delectus error a vero eveniet fuga voluptatum, temporibus nam qui reiciendis dicta.</p>
          
          <NavLink className="bg-gray-700 text-white p-1 rounded-[3px] my-1">
            <button>Shop Now</button>
          </NavLink>
        
        </div>
      
      </div>
    </>
  );
};

export default Herosection;