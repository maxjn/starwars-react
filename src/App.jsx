import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
//Layouts
import HomeLayout from "./layouts/HomeLayout";
//Pages
import Planets from "./pages/Planets";
import People from "./pages/People";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route path="people" element={<People />}></Route>
      <Route path="planets" element={<Planets />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
