import { createContext, useContext, useState } from "react";
import { getStatusesRequest, getPrioritiesRequest } from "../api/status";

export const StatusContext = createContext();


export const useStatuses = () => {
  const context = useContext(StatusContext);

  if (!context) {
    throw new Error("useStatuses must be used within a StatusProvider");
  }

  return context;
};

export function StatusProvider({ children }) {
  const [statuses, setStatuses] = useState([]);
  const [priorities, setPriorities] = useState([]);

    const getStatuses = async () => {
      const res = await getStatusesRequest();
      setStatuses(res.data);
    };

    const getPriorities = async () => {
      const res = await getPrioritiesRequest();
      setPriorities(res.data);
    }
  return (
    <StatusContext.Provider
      value={{
        statuses,
        priorities,
        getPriorities,
        getStatuses,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}


