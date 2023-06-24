import { Link } from "react-router-dom";
import "./LandingDataContainer";
import { usePost } from "../../context/PostConstant";
import { BsBookmarkStar } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { AiOutlineFastBackward } from "react-icons/ai";
import { ACTION_TYPE } from "../../utils";

import { useNavigate } from "react-router-dom";
export const LandingDataContainer = ({ fromSinglePost, data }) => {
  const navigate = useNavigate();
  const { state, dispatch } = usePost();

  const sortPostDataArray =
    state.sortingValue === "most_upvoted"
      ? [...state.posts].sort((a, b) => b.upvotes - a.upvotes)
      : state.sortingValue === "latest"
      ? [...state.posts].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      : state.posts;

  return (
    <div className="landing_container">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {fromSinglePost && (
          <Link to="/" style={{ marginBottom: "1.8rem" }}>
            <AiOutlineFastBackward size={24} />
          </Link>
        )}
        <p style={{ margin: "0px", fontWeight: "bold", marginBottom: "2rem" }}>
          {state.sortingValue === "" ? "Posts" : `${state.sortingValue} post`}
        </p>
      </div>

      {(fromSinglePost ? data : sortPostDataArray)?.map((item) => {
        return (
          <div
            style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}
            key={item.postId}
          >
            <div style={{ paddingTop: "0.5rem" }}>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTION_TYPE.UPVOTES,
                    payload: { ...item, upvotes: item.upvotes + 1 }
                  })
                }
              >
                upvote
              </button>
              <p>{item.upvotes - item.downvotes}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTION_TYPE.DOWNVOTES,
                    payload: { ...item, downvotes: item.downvotes + 1 }
                  })
                }
              >
                downvote
              </button>
            </div>
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
              >
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
                <p>posted by @{item.username}</p>
              </div>
              <div>
                <h2 style={{ margin: "0px" }}>{item.post}</h2>
              </div>
              <div style={{ display: "flex", gap: "0.3rem", color: "blue" }}>
                {item.tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      style={{
                        backgroundColor: "lightgray",
                        padding: "0.1rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        borderRadius: "0.3rem"
                      }}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div>
                <p>{item?.postDescription}</p>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "inherit",
                    cursor: "pointer"
                  }}
                  onClick={() => navigate(`/${item?.postId}`)}
                >
                  <FaRegComments size={24} />
                </button>
                <BsShare size={24} />
                <button
                  style={{
                    border: "none",
                    backgroundColor: "inherit",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    dispatch({
                      type: ACTION_TYPE.BOOKMARK,
                      payload: { ...item, isBookmarked: !item.isBookmarked }
                    })
                  }
                >
                  {item.isBookmarked ? (
                    <BsFillBookmarkFill size={24} />
                  ) : (
                    <BsBookmarkStar size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
