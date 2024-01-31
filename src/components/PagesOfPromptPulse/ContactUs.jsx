function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-950">
      <div className=" text-2xl font-bold text-green-500 text-center">
        Get in Touch with us
      </div>
      <div className="relative h-[28vh] bg-gray-800 w-full mt-10">
        <img
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className="  opacity-50  w-full h-full object-cover "
        />
        <p className=" text-6xl font-bold text-gray-200 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          Contact us
        </p>
      </div>
      <div className=" flex justify-around items-center text-gray-200  text-xl font-semibold mt-20">
        <div className=" flex flex-col  items-center gap-2">
          <h2 className="text-2xl font-bold text-green-500">Phone</h2>
          <a href="tel:123-4567-890">123-4567-890</a>
        </div>
        <div className=" flex flex-col  items-center gap-2">
          <h2 className="text-2xl font-bold text-green-500">Email</h2>
          <a href="mailto:promptpulse0@gmail.com">promptpulse0@email.com</a>
        </div>
        <div className=" flex flex-col  items-center gap-2">
          <h2 className="text-2xl font-bold text-green-500">For Suggetion</h2>
          <a href="mailto:promptpulse0@gmail.com">promptpulse0@email.com</a>
        </div>
      </div>
      <div className=" flex  flex-col gap-4 text-gray-200 justify-center items-center mt-20 tracking-wider text-xl font-semibold">
        <p>
          <span className="text-green-500 font-bold">Oue Team </span>is happy
          and ready to assist you
        </p>
        <p>
          Please! Allow up to{" "}
          <span className="text-green-500 font-bold">2 business days</span> for
          response
        </p>
        <p>
          you can also ans{" "}
          <span className="text-red-400 font-bold"> your quiry </span>in our{" "}
          <span className="text-green-500 font-bold">policy section</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
