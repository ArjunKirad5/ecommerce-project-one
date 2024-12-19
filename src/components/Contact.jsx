//tailwind is not workin here within form
const Contact = () => {
  return (<div>
      <h2 className="my-1 md:my-3 text-center text-xl md:text-3xl font-semibold">Feel free to contact us!!</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.50935778707!2d73.95085519999999!3d18.551061300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c50999945d%3A0xf045ba636617a089!2sEon%20Free%20Zone%20Rd%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1734536230805!5m2!1sen!2sin"
        className="my-1 md:my-3 w-[60%] md:w-[80%] h-[200px] md:h-[350px] mx-auto"
        loading="lazy"
      ></iframe>
      <div className="flex justify-center my-4">
        <form action="" method="POST" className="w-[70%] md:w-[50%] bg-slate-300 py-2 rounded-md">
          <input type="text" placeholder="username" name="username" required autoComplete="off" className="block my-3 mx-auto w-[70%] md:w-[50%] rounded-md p-1"/>
          <input type="email" name="email" placeholder="enter email" required autoComplete="off" className="block my-3 mx-auto w-[70%] md:w-[50%] rounded-md p-1"/>
          <textarea name="message" placeholder="enter message" cols={15} rows={10} required autoComplete="of" className="block my-3 mx-auto w-[70%] md:w-[50%] rounded-md p-1"></textarea>
          <button type="submit" className="mx-auto block border-2 px-2 py-1 bg-white text-black rounded-sm">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
