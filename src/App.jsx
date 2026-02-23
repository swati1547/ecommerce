import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

// App is responsible only for route resolution
function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
