import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./auth/authContext/authContext";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';
import { Home } from './pages/Home';
import { Users } from './pages/usersFeatures/Users';
import { ProcessDetails } from "./pages/processDtails/ProcessDetails";
import { Tubes } from './pages/processDtails/products/tubes/Tubes';
import { Details } from './pages/processDtails/products/details/Details';
import { Sand } from './pages/processDtails/products/sand/Sand';
import { Store } from './pages/Store/Store';
import { Save } from "./pages/Save/Save";
import { ProcessHome } from "./pages/ProcessHome/ProcessHome";
import { Car } from "./pages/car/Car";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Funders } from "./pages/Funders/Funders";
import { OutStore } from "./pages/Store/OutStore";
import { HomePage } from "./HomePage";
import { Wood } from "./pages/processDtails/products/Wood/Wood";
  
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <div className="main">
        <Navbar />
        <div className="container loober">
          <div className="contentContainer">
            <Routes>
              {user === null ? (
                <Route exact path="/" element={<Login />} />
              ) : (
                <Route exact path="/" element={<HomePage />} />
              )}
              <Route exact path="/process" element={<ProcessHome />} />
              <Route exact path="/charts" element={<Home />} />
              <Route path="/process/:id" element={<ProcessDetails />} />
              <Route
                path="/processDetails/tubes/:id"
                element={<Tubes type="tubes" />}
              />
              <Route
                path="/processDetails/worker/:id"
                element={<Tubes type="worker" />}
              />
              <Route
                path="/processDetails/sand/:id"
                element={<Sand type="sand" ar="الرمل" />}
              />
              <Route
                path="/processDetails/sen/:id"
                element={<Sand type="sen" ar="السن" />}
              />
              <Route
                path="/processDetails/cement/:id"
                element={<Sand type="cement" ar="الاسمنت" />}
              />
              <Route
                path="/processDetails/details/:id"
                element={<Details sort="details" ar="نثريات" />}
              />
              <Route
                path="/processDetails/transport/:id"
                element={<Details sort="transport" ar="انتقالات مواقع" />}
              />
              <Route
                path="/processDetails/materials/:id"
                element={<Details sort="materials" ar="خامات" />}
              />
              <Route
                path="/processDetails/repair/:id"
                element={<Details sort="repair" ar="اعطال" />}
              />
              <Route
                path="/processDetails/azl/:id"
                element={<Details sort="azl" ar="عزل" />}
              />
              <Route path="/processDetails/wood/:id" element={<Wood />} />
              <Route path="/users" element={<Users />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/store" element={<Store />} />
              <Route path="/outStore" element={<OutStore />} />
              <Route path="/save" element={<Save />} />
              <Route path="/car" element={<Car />} />
              <Route
                path="/funders"
                element={<Funders ar="برجاء اختيار شركه التمويل. " />}
              />
              <Route path="/funders/:id" element={<Funders />} />
              <Route
                path="/sallery"
                element={
                  <div
                    className="d-flex fw-bold text-center "
                    style={{ fontSize: "70px", color: "red" }}
                  >
                    نعمل علي المرتبات في الوقت الحالي برجاء انتظار التحديث
                    القادم.
                  </div>
                }
              />
              <Route
                path="/staff"
                element={
                  <div
                    className="d-flex fw-bold text-center"
                    style={{ fontSize: "70px", color: "red" }}
                  >
                    نعمل علي العده في الوقت الحالي برجاء انتظار التحديث القادم.
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
