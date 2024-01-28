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
import { Wood } from "./pages/processDtails/products/Wood/Wood";
import { Sallery } from "./pages/Sallery/Sallery";
import { Analyics } from "./pages/Analyics/Analyics";
import { AnalyicsDetails } from "./pages/AnalyicsDetails/AnalyicsDetails";
import { AnalyicsReport } from "./pages/AnalyicsDetails/AnalyicsReport/AnalyicsReport";
import { LandingHome } from "./component/LandingHome/LandingHome";
import { Insurance } from "./pages/processDtails/products/Insurance/Insurance";
  
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
                <Route exact path="/" element={<LandingHome />} />
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
              <Route
                path="/processDetails/workerInsurance/:id"
                element={
                  <Insurance type="workerInsurance" ar="التأمين و العماله" />
                }
              />
              <Route
                path="/processDetails/finalInsurance/:id"
                element={
                  <Insurance type="finalInsurance" ar="التأمين الابتدائي" />
                }
              />
              <Route
                path="/processDetails/returnInsurance/:id"
                element={
                  <Insurance
                    type="returnInsurance"
                    ar="التأمين الاستحقاقي النهائي"
                  />
                }
              />
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
              <Route path="/sallery" element={<Sallery />} />
              <Route path="/analyics" element={<Analyics />} />
              <Route path="/analyics/:id" element={<AnalyicsDetails />} />
              <Route
                path="/analyics/report/:id"
                element={<AnalyicsReport type="one" dataNum={2} />}
              />
              <Route
                path="/analyics/finalreport/:id"
                element={<AnalyicsReport type="two" dataNum={3} />}
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
