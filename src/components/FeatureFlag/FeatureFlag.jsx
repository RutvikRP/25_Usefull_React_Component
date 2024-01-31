import LightDark from "../../components/Light-DarkMode/LightDark";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Accordian from "../../components/Accordian/Accordian";
import ShunChowkdi from "../../components/SunChowkdi/ShunChowkdi";
import HirechicalMenu from "../../components/HirechicalMenu/HirechicalMenu";
import menus from "../../components/HirechicalMenu/menuData";
import { useContext } from "react";
// import FeatureContext from "./Context/FeatureContext";
import { FeatureFlagContext } from "./Context/FeatureContext";

function FeatureFlag() {
  const { enabledFlag } = useContext(FeatureFlagContext);

  const componentToRenders = [
    { key: "showLightDarkTheam", component: <LightDark /> },
    { key: "showColorChanger", component: <ColorChanger /> },
    { key: "showAccordian", component: <Accordian /> },
    { key: "showShunChowkdi", component: <ShunChowkdi /> },
    { key: "showHirechicalMenu", component: <HirechicalMenu list={menus} /> },
  ];
  // console.log(enabledFlag);
  function chackEnabled(key) {
    // console.log(enabledFlag);
    if (enabledFlag[key]) return true;
  }
  return (
    <div>
      FeatureFlag
      <div className=" ">
        {componentToRenders.map((item) => (
          <div key={item.key} className=" flex flex-col">
            <div>{chackEnabled(item.key) ? item.component : null}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureFlag;

// contex fold->featureContex,data.js->featurecontex.providef with children ->enbled flag set to be feacheddata and will be passes as value
