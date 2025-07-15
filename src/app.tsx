import Fixed from "./components/fixed";
import Content from "./components/content";
import { Route, Routes } from "react-router-dom";
import { AllProjects } from "./pages/projects/index";
import { SingleProject } from "./pages/projects/singleProject";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full lg:flex justify-end">
              <Fixed />
              <Content />
            </div>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:projectId" element={<SingleProject />} />
      </Routes>
    </>
  );
}

export default App;
