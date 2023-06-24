import { useParams } from "react-router-dom";
import { usePost } from "../context/PostConstant";
import "./SinglePostView.css";
import { Sidebar } from "../component/Sidebar";
import { LandingDataContainer } from "./component/LandingDataContainer";

export const SinglePostView = () => {
  const { postId } = useParams();
  const { state } = usePost();
  let singlePost = [];
  singlePost = state.posts.filter((item) => item.postId === postId);
  return (
    <div className="landing_page_wrapper">
      <div className="sidebar_wrapper">
        <Sidebar />
      </div>
      <div>
        <LandingDataContainer fromSinglePost data={singlePost} />
        {singlePost[0]?.comments?.map((item) => {
          return (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              key={item.commentId}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src=""
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                    border: "1px solid black"
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>
                    {item.username} @{item.username}
                  </p>
                  <p>replying to {singlePost[0]?.username}</p>
                </div>
              </div>
              <p>{item.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
