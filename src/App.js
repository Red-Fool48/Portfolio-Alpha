import "./styles.css";
import CustomHeader from "./components/header/header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "./components/loader/loading";
/**
 * 
 * {!loading ? (
        <div>
          <CustomHeader />
        </div>
      ) : (
        // <div style={{ marginTop: "50vh", marginLeft: "50vw" }}>
        //   <img
        //     src="https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
        //     alt="cat"
        //     style={{ height: "10%", width: "10%" }}
        //   />
        // </div>
        <Loader />
      )}
 */
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return <>{loading ? <Loader /> : <CustomHeader />}</>;
};

export default App;
