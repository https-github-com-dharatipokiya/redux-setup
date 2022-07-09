import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Common/Header";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignUp";
import NotFoundPage from "./NotFoundPage";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <RouteWrapper path="/" element={<Header />} layout={<Layout />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

function RouteWrapper({ element: Element, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Element {...props} />
        </Layout>
      )}
    />
  );
}
