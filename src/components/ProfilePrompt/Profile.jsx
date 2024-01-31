import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

function Profile() {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center  items-center bg-[url('https://images.unsplash.com/photo-1695664223145-58fb4b3f5e95?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  h-screen w-full ">
      <div className=" flex h-3/4 w-3/4   bg-slate-900/75 rounded-md gap-10 pr-8">
        <div className="flex justify-center items-center w-1/3   rounded-full">
          <img
            src="https://images.unsplash.com/photo-1554411529-ee36dfde51b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-80  h-80 rounded-full "
          />
        </div>
        <div className=" w-2/3 py-7 ">
          <form>
            <div className="mb-10">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <CgProfile size="1.5rem" />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Sita Ram"
                />
              </div>
            </div>
            <div className="mb-10">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <MdEmail size="1.5rem" />
                </span>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email1234@.com"
                />
              </div>
            </div>

            <div className="mb-10">
              <label
                htmlFor="Roll"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Roll
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="git_url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Buyer / Seller"
                  required
                />
              </div>
            </div>
            <div className="mb-10">
              <label
                htmlFor="Shope name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Shop Name
              </label>
              <input
                type="text"
                id="company_url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Shop Name"
                required
              />
            </div>
            <div className="flex gap-8">
              <button
                type="Edit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
