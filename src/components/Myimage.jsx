import { useState } from "react";

const Myimage = ({images = [{url:""}]}) => {

const [mainImage,setmainImage] = useState(images[0]);


    return(
    <>
    <div className="flex items-center">
        
        <div>
        {images.map((img,ind) => {
            return <div className="flex-col" key={ind + 1}>
                        <div key={ind + 1} className="w-[120px] m-1">
                        <img src={img.url} alt={img.filename} onClick={() => setmainImage(img)}/>
                        </div>
                    </div>
        })}
        </div>
        
        <div className="w-[300px]">
            <img src={mainImage.url} alt="" />
        </div>

    </div>
    </>
)}

export default Myimage;