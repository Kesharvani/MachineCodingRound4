import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { SinglePostView } from "./pages/SinglePostView";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:postId" element={<SinglePostView />} />
      </Routes>
    </>
  );
}
