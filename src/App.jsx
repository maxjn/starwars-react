import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Planets from "./pages/Planets";
import People from "./pages/People";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route path="people" element={<People />}>
        <Route path=":id" element={<People />}></Route>
      </Route>
      <Route path="planets" element={<Planets />}>
        <Route path=":id" element={<People />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
