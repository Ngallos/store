import "./App.css";
import { ContextProvider } from "./context-service/global-contex";
import { RoutesApplication } from "./router/router";
function App() {
  
  return (
    <ContextProvider>
      <RoutesApplication></RoutesApplication>
    </ContextProvider>
  );
}

export default App;
