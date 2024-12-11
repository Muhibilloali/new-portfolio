import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader/Loader";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Certificate from "./components/Certificate";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import { motion } from "framer-motion";

ReactGA.initialize("UA-238163132-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [sendData, setSendData] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <motion.div>
      <Routes>
        <Route
          path="/"
          element={[
            <div className="antialiased  min-h-screen tracking-wide bg-[#F3F4F5] dark:bg-slate-900">
              {loading ? (
                <Loader />
              ) : (
                [
                  <Navbar setSendData={setSendData} />,
                  <Main sendData={sendData} />,
                  <About sendData={sendData} />,
                  <Skills />,
                  <Certificate />,
                  <Portfolio />,
                  <Contact />,
                  <Footer />,
                ]
              )}
            </div>,
          ]}
        />

        <Route
          path="/projects"
          element={[
            <div className="antialiased bg-[#F3F4F5] dark:bg-slate-900">
              <main className="">
                <Projects />
              </main>
              <main className="">
                <Certificate />
              </main>
            </div>,
          ]}
        />
      </Routes>
    </motion.div>
  );
}

export default App;
