import "./App.css";
import { lazy } from "react";
import Layout from "./components/layout";

const Main = lazy(() => import("./pages/Main"));

function App() {
  // TODO: add routing
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;
