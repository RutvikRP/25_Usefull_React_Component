import Accordian from "./components/Accordian/Accordian";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ScrollBottamAndTop from "./components/ScrollToBottamAndScrollToTop/ScrollBottamAndTop";
import ScrollToParticularSection from "./components/ScrollToParticularSection/ScrollToParticularSection";

import Test from "./components/UseFetch-UseOnClickOutside-UseWindowResizer/Test";

import SearchAutoComplete from "./components/SearchAutocomlete/SearchAutoComplete";

import ShunChowkdi from "./components/SunChowkdi/ShunChowkdi";

import GithubFatching from "./components/GithubProfilefetch/GithubFatching";

import Tabs from "./components/CustomTabs/tabs";

import LightDark from "./components/Light-DarkMode/LightDark";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

import QrCode from "./components/QRcode_genarator/QrCode";

import HirechicalMenu from "./components/HirechicalMenu/HirechicalMenu";

import LoadMore from "./components/LoadMore/LoadMore";

function App() {
  return (
    <div className=" flex h-[100vmx] w-full">
      <div className="flex flex-col  gap-4    pt-20">
        <Accordian />

        <ColorChanger />

        <StarRating noOfStar={10} />

        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"2"}
          limit={"10"}
        />

        <LoadMore />

        <HirechicalMenu />

        <QrCode />

        <LightDark />

        <ScrollIndicator
          url={
            "https://dummyjson.com/products?limit=100&skip=0&select=title,price"
          }
        />

        <Tabs />

        {/* <ModelWindow /> */}

        {/* <Profile /> */}

        <GithubFatching />

        <SearchAutoComplete />

        <ShunChowkdi />

        {/* <Featurxt> */}

        <Test />

        <ScrollBottamAndTop />
        <ScrollToParticularSection />
      </div>
    </div>
  );
}

export default App;
