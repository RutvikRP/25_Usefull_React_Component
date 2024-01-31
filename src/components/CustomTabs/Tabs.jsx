import { useState } from "react";

function RandomContent() {
  return "This is Random content";
}
const tabContent = [
  {
    lable: "tab1",
    content: "This is a tab 1",
  },
  {
    lable: "tab2",
    content: "This is a tab 2",
  },
  {
    lable: "tab3",
    content: <RandomContent />,
  },
];

function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className=" flex justify-center">
      <div className=" relative flex  text-sm font-medium text-center text-green-800 justify-center  gap-4 mt-10 w-[400px]">
        {tabContent.map((tabItems, index) => (
          <div
            key={index}
            className={` ${
              currentTab === index
                ? "bg-green-500"
                : "bg-green-200 text-slate-800 text-bold"
            }  rounded-md w-56`}
          >
            <div
              className="px-2 py-1 cursor-pointer"
              onClick={() => setCurrentTab(index)}
            >
              {tabItems.lable}
            </div>

            <div
              key={index}
              className=" flex justify-center items-center fixed absolut left-[50%] -translate-x-[50%] h-48 w-[400px] bg-green-200/10 mt-2  font-bold text-2xl "
            >
              <div className=" text-green-800">
                {currentTab === index ? tabItems.content : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;

{
  /* <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="me-2">
        <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
    </li>
    <li>
        <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
    </li>
</ul> */
}
