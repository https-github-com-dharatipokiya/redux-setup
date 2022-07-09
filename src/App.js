import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
