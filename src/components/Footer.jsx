const Footer = () => {
  return (
    <>
      <section className="bg-gray-300 flex justify-around p-2">
        <div className="bg-white rounded-[7px] p-2">
          <h3>This is amazon Ecommerce</h3>
          <h3>For more details</h3>
        </div>
        <div className="bg-white rounded-[7px] p-2">
          <button>Click Here</button>
        </div>
      </section>

      <footer className="flex justify-evenly items-center bg-gray-400 h-[200px]">
       
        <div>
          <h3>Amazon Ecommerce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Cupiditate officia dolorem aspernatur porro
          </p>
        </div>

        <div >
          <p>Subscribe to get important updates</p>
          <form action="#" className="flex justify-between gap-1 w-[200px]">
            <input type="email" placeholder="Email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
        
        <div>Follow Us</div>
        
        <div>
          <p>Call us</p>
          <p>+1234567</p>
        </div>
      </footer>

      <section className="p-2 flex justify-evenly bg-gray-600 items-center">
        
        <div className="bg-white p-2 rounded-[7px] flex">
          <span className="mx-1">@{new Date().getFullYear()} K-Academy</span>
          <span>All Rights Reserved</span>
        </div>

        <div className="bg-white p-2 rounded-[7px] flex">
          <p className="mx-1">Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
