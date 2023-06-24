import {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext
} from "react";

import { forumData } from "../db/backendData";
import { initialValue, reducerFunction } from "../reducer/postReducer";
import { ACTION_TYPE } from "../utils";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [state, dispatch] = useReducer(reducerFunction, initialValue);
  const getData = () => {
    setIsLoading(true);
    try {
      dispatch({ type: ACTION_TYPE.SUCCESS, payload: forumData });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <PostContext.Provider value={{ isLoading, state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
