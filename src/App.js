import { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Layout from "./components/UI/Layout";

function App() {
  return (
    <Fragment>
        <BrowserRouter>
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter> 
    </Fragment>
  );
}

export default App;
