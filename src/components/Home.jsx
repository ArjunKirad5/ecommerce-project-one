import Herosection from './Herosection'
import Services from './Services';
import Trusted from './Trusted';
import FeatureProduct from './FeatureProduct'

const Home = () => {
  const data = {
    name:'Amazon ecommerce Store'
  }  

  return( 
    <>
    <Herosection props={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </>
    );
  };
  
  export default Home;