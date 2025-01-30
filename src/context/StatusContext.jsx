import { createContext, useContext, useState } from "react";
import {
  getStatusesRequest,
  getPrioritiesRequest,
  getPriorityRequest,
  getStatusRequest,
} from "../api/status";

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
  };

  const getPriority = async (id) => {
    try {
      const res = await getPriorityRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getStatus = async (id) => {
    try {
      const res = await getStatusRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StatusContext.Provider
      value={{
        statuses,
        priorities,
        getPriorities,
        getPriority,
        getStatus,
        getStatuses,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}
