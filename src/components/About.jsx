import Herosection from "./Herosection";
import {useGlobalvalue } from "../context/productcontext";


const About = () => {

    const {myName} = useGlobalvalue() //Destructure and use value.

    const data = {
        name:'This is about us page'
    }
    return(
    <>
    {myName}
    <Herosection props={data}/>
    </>
);
}

export default About;