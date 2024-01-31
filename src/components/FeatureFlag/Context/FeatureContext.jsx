/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useEffect } from "react";
import featureFlagDataSevice from "../data.js";

export const FeatureFlagContext = createContext(null);
function FeatureContext({ children }) {
  const [enabledFlag, setEnabledFlag] = useState({});

  async function fetchFlags() {
    const res = await featureFlagDataSevice();
    console.log(res);
    setEnabledFlag(res);
  }
  useEffect(() => {
    fetchFlags();
  }, []);
  return (
    <div>
      <FeatureFlagContext.Provider value={{ enabledFlag }}>
        {children}
      </FeatureFlagContext.Provider>
    </div>
  );
}

export default FeatureContext;
