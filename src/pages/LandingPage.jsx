import "./LandingPage.css";

import { Sidebar } from "../component/Sidebar";
import { SortingBar } from "../component/SortingBar";
import { LandingDataContainer } from "./component/LandingDataContainer";
export const LandingPage = () => {
  return (
    <div className="landing_page_wrapper">
      <div className="sidebar_wrapper">
        <Sidebar />
      </div>
      <LandingDataContainer />
      <SortingBar />
    </div>
  );
};
