import "./Sidebar.css";
import { AiTwotoneHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
export const Sidebar = () => {
  return (
    <div className="sidebar_main">
      <div>
        <AiTwotoneHome size={24} />
        <span className="home">Home</span>
      </div>
      <div>
        <MdExplore size={24} />
        <span>Expore</span>
      </div>
      <div>
        <BsBookmarkStar size={24} />
        <span>BookMark</span>
      </div>
      <div>
        <CgProfile size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
};
