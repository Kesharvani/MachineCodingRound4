import { usePost } from "../context/PostConstant";
import { ACTION_TYPE } from "../utils";

export const SortingBar = () => {
  const { dispatch } = usePost();
  return (
    <>
      <div>
        <p style={{ margin: "0px", marginBottom: "1rem" }}>Sort By</p>
        <select
          name="sorting"
          id="sorting_post"
          onChange={(e) =>
            dispatch({ type: ACTION_TYPE.SORT, payload: e.target.value })
          }
        >
          <option value="">Select here to sort post</option>
          <option value="latest">Latest Posts</option>
          <option value="most_upvoted">Most UpVoted Posts</option>
        </select>
      </div>
    </>
  );
};
