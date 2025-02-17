import { Outlet } from "react-router-dom";
import { ContextProvider } from "../../context-service/global-contex";

export const Landing = () => {
  return (
    <ContextProvider>
      <div className="Landing">
        <Outlet />
      </div>
    </ContextProvider>
  );
};
