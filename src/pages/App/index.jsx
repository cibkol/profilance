import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routing } from "../../route";
import "../../assets/styles/index.scss";
import Layout from "../../components/Layout";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <React.Suspense fallback={<>Загрузка</>}>
            <Routes>
              {routing.map((rout, index) => (
                <Route path={rout.path} key={index} element={<rout.page />} />
              ))}
            </Routes>
          </React.Suspense>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
