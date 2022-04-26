import { Route, Routes } from "react-router-dom";
import { routing } from "../../route";
import "../../assets/styles/index.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        {routing.map((rout, index) => (
          <Route path={rout.path} key={index} element={<rout.page />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
