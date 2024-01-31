// function AboutUs() {
//   return (
//     <div className="flex flex-col w-full min-h-screen bg-[#080a1f]  text-gray-200 ">
//       <h1 className="text-white text-4xl text-center py-5 font-bold bg-[#171b54]">
//         About Us
//       </h1>
//       <div className="flex flex-col gap-2 px-10 py-10">
//         <div className="flex mt-20 w-full h-[34vh]  text-gray-200 tracking-wider text-xl">
//           <div className="w-[60%]  pr-10 ">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
//             adipisci placeat perspiciatis! Delectus officiis placeat, at animi
//             unde dolor vero repellat quae assumenda laborum excepturi rerum
//             ipsam! Repellendus, fuga odio. Lorem ipsum, dolor sit amet
//             consectetur adipisicing elit. Odio adipisci placeat perspiciatis!
//             Delectus officiis placeat, at animi unde dolor vero repellat quae
//             assumenda laborum excepturi rerum ipsam! Repellendus, fuga odio.
//           </div>
//           <div className=" w-[40%] ">
//             <img
//               src="https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="image"
//               className="rounded-2xl w-full h-full"
//             />
//           </div>
//         </div>
//         <div className="flex mt-20 w-full h-[34vh]  text-gray-200 tracking-wider text-xl">
//           <div className=" w-[40%] ">
//             <img
//               src="https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="image"
//               className="rounded-2xl w-full h-full"
//             />
//           </div>
//           <div className="w-[60%]  pl-10 ">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
//             adipisci placeat perspiciatis! Delectus officiis placeat, at animi
//             unde dolor vero repellat quae assumenda laborum excepturi rerum
//             ipsam! Repellendus, fuga odio. Lorem ipsum, dolor sit amet
//             consectetur adipisicing elit. Odio adipisci placeat perspiciatis!
//             Delectus officiis placeat, at animi unde dolor vero repellat quae
//             assumenda laborum excepturi rerum ipsam! Repellendus, fuga odio.
//           </div>
//         </div>
//         <div className="flex mt-20 w-full h-[34vh]  text-gray-200 tracking-wider text-xl">
//           <div className="w-[60%]  pr-10 ">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
//             adipisci placeat perspiciatis! Delectus officiis placeat, at animi
//             unde dolor vero repellat quae assumenda laborum excepturi rerum
//             ipsam! Repellendus, fuga odio. Lorem ipsum, dolor sit amet
//             consectetur adipisicing elit. Odio adipisci placeat perspiciatis!
//             Delectus officiis placeat, at animi unde dolor vero repellat quae
//             assumenda laborum excepturi rerum ipsam! Repellendus, fuga odio.
//           </div>
//           <div className=" w-[40%] ">
//             <img
//               src="https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="image"
//               className="rounded-2xl w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;
function AboutUs() {
  return (
    <div className=" flex w-full min-h-screen justify-center items-center bg-gray-950 ">
      <div className="flex  w-[80%]  h-[70vh] rounded-xl">
        <div className=" w-[40%] h-full">
          <img
            src="https://d1eipm3vz40hy0.cloudfront.net/images/AMER/contactuspage.jpg"
            alt="image"
            className="w-full h-full   block bg-cover "
          />
        </div>
        <div className="flex flex-col text-gray-200    h-full w-[60%]    pl-20   ">
          <h1 className=" text-6xl font-bold text-green-400">About Us</h1>
          <div className="flex flex-col mt-5 h-full justify-start items-start">
            <h2 className="text-white text-2xl font-semibold">Prompt Pulse</h2>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              maxime reprehenderit aliquam est beatae. Qui quos vel dolor
              facilis est, earum totam pariatur omnis ut fuga reprehenderit
              blanditiis officiis neque? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi maxime reprehenderit aliquam est
              beatae. Qui quos vel dolor facilis est, earum totam pariatur omnis
              ut fuga reprehenderit blanditiis officiis neque? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Excepturi maxime
              reprehenderit aliquam est beatae. Qui quos vel dolor facilis est,
              earum totam pariatur omnis ut fuga reprehenderit blanditiis
              officiis neque? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Excepturi maxime reprehenderit aliquam est beatae. Qui quos
              vel dolor facilis est, earum totam pariatur omnis ut fuga
              reprehenderit blanditiis officiis neque?
            </p>
            <button className=" mt-20 py-1 px-2 rounded-sm bg-green-500 text-green-50">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
