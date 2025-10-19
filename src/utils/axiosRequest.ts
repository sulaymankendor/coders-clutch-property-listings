import axios, { AxiosError } from "axios";
import type {
  agentRequest,
  agentsRequest,
  agentType,
  propertiesRequest,
  propertyRequest,
  propertyType,
  requestState,
} from "./type";

export const axiosRequest = {
  getProperties: async (
    routeSegment: string,
    setPropertiesRequest: React.Dispatch<
      React.SetStateAction<propertiesRequest>
    >
  ) => {
    setPropertiesRequest((currentRequestState) => ({
      ...currentRequestState,
      errorMsg: "",
    }));

    try {
      const response = await axios.get(`http://localhost:3001/${routeSegment}`);
      setPropertiesRequest((currentRequestState) => ({
        ...currentRequestState,
        isLoading: false,
      }));
      return response.data;
    } catch (err) {
      let errorMsg = "An unknown error occurred.";

      // Check if the error is an AxiosError
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;

        if (axiosError.response) {
          // Server responded with a status code outside the range of 2xx
          errorMsg = `Server responded with status ${
            axiosError.response.status
          }: ${JSON.stringify(axiosError.response.data)}`;
        } else if (axiosError.request) {
          // Request was made but no response was received
          errorMsg =
            "No response received from the server. Please check your network connection or server status.";
        } else if (axiosError.message) {
          // Something happened while setting up the request
          errorMsg = axiosError.message;
        }
      } else if (err instanceof Error) {
        // Non-Axios JS error
        errorMsg = err.message;
      }

      // Update state
      setPropertiesRequest((currentRequestState) => ({
        ...currentRequestState,
        errorMsg,
        isLoading: false,
      }));
    }
  },
  getAgents: async (
    routeSegment: string,
    setPropertiesRequest: React.Dispatch<React.SetStateAction<agentsRequest>>
  ) => {
    setPropertiesRequest((currentRequestState) => ({
      ...currentRequestState,
      errorMsg: "",
    }));

    try {
      const response = await axios.get(`http://localhost:3001/${routeSegment}`);
      setPropertiesRequest((currentRequestState) => ({
        ...currentRequestState,
        isLoading: false,
      }));
      return response.data;
    } catch (err) {
      let errorMsg = "An unknown error occurred.";

      // Check if the error is an AxiosError
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;

        if (axiosError.response) {
          // Server responded with a status code outside the range of 2xx
          errorMsg = `Server responded with status ${
            axiosError.response.status
          }: ${JSON.stringify(axiosError.response.data)}`;
        } else if (axiosError.request) {
          // Request was made but no response was received
          errorMsg =
            "No response received from the server. Please check your network connection or server status.";
        } else if (axiosError.message) {
          // Something happened while setting up the request
          errorMsg = axiosError.message;
        }
      } else if (err instanceof Error) {
        // Non-Axios JS error
        errorMsg = err.message;
      }

      // Update state
      setPropertiesRequest((currentRequestState) => ({
        ...currentRequestState,
        errorMsg,
        isLoading: false,
      }));
    }
  },
  getPropertyByID: async (
    id: number,
    setPropertiesRequest: React.Dispatch<React.SetStateAction<propertyRequest>>,
    setNotFound: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setPropertiesRequest((currentRequestState) => ({
      ...currentRequestState,
      errorMsg: "",
      isLoading: true,
    }));

    try {
      const response = await axios.get(
        `http://localhost:3001/properties/${id}`,
        { timeout: 10000 }
      );
      if (!response.data || Object.keys(response.data).length === 0) {
        setNotFound(true);
        return;
      }

      setPropertiesRequest((currentRequestState) => ({
        ...currentRequestState,
        isLoading: false,
        properties: [response.data], // Single property in array
      }));

      return response.data;
    } catch (err) {
      let errorMsg = "An unknown error occurred while fetching property.";

      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (err.response?.status === 404) {
          setNotFound(true);
          return;
        }

        if (!axiosError.response) {
          // Network error (no response from server)
          if (axiosError.code === "ECONNABORTED") {
            errorMsg = "Request timeout. The server took too long to respond.";
          } else if (axiosError.code === "ERR_NETWORK") {
            errorMsg = "Network error. Please check your internet connection.";
          } else {
            errorMsg =
              "Unable to connect to server. Please check your network connection or server status.";
          }
        } else {
          // Server responded with error status
          const status = axiosError.response.status;

          switch (status) {
            case 400:
              errorMsg = `Bad request. Invalid property ID format.`;
              break;
            case 401:
              errorMsg = `Unauthorized. Please log in again.`;
              break;
            case 403:
              errorMsg = `Access forbidden. You don't have permission to view this property.`;
              break;
            case 404:
              errorMsg = `Property not found. The property with ID ${id} does not exist.`;
              break;
            case 408:
              errorMsg = `Request timeout. Please try again.`;
              break;
            case 429:
              errorMsg = `Too many requests. Please slow down and try again later.`;
              break;
            case 500:
              errorMsg = `Internal server error. Please try again later.`;
              break;
            case 502:
              errorMsg = `Bad gateway. The server is temporarily unavailable.`;
              break;
            case 503:
              errorMsg = `Service unavailable. Please try again later.`;
              break;
            case 504:
              errorMsg = `Gateway timeout. The server took too long to respond.`;
              break;
            default:
              errorMsg = `Server responded with status ${status}: ${JSON.stringify(
                axiosError.response.data
              )}`;
          }
        }
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      setPropertiesRequest((currentRequestState) => ({
        ...currentRequestState,
        errorMsg,
        isLoading: false,
      }));
    }
  },
  getAgentByID: async (
    id: number,
    setAgentsRequest: React.Dispatch<React.SetStateAction<agentRequest>>,
    setNotFound: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setAgentsRequest((currentRequestState) => ({
      ...currentRequestState,
      errorMsg: "",
      isLoading: true,
    }));

    try {
      const response = await axios.get(`http://localhost:3001/agents/${id}`, {
        timeout: 10000,
      });

      if (!response.data || Object.keys(response.data).length === 0) {
        setNotFound(true);
        return;
      }

      setAgentsRequest((currentRequestState) => ({
        ...currentRequestState,
        isLoading: false,
        agents: [response.data], // Single agent in array
      }));

      return response.data;
    } catch (err) {
      let errorMsg = "An unknown error occurred while fetching agent.";

      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;

        if (err.response?.status === 404) {
          setNotFound(true);
          return;
        }
        if (!axiosError.response) {
          // Network error (no response from server)
          if (axiosError.code === "ECONNABORTED") {
            errorMsg = "Request timeout. The server took too long to respond.";
          } else if (axiosError.code === "ERR_NETWORK") {
            errorMsg = "Network error. Please check your internet connection.";
          } else {
            errorMsg =
              "Unable to connect to server. Please check your network connection or server status.";
          }
        } else {
          // Server responded with error status
          const status = axiosError.response.status;

          switch (status) {
            case 400:
              errorMsg = `Bad request. Invalid agent ID format.`;
              break;
            case 401:
              errorMsg = `Unauthorized. Please log in again.`;
              break;
            case 403:
              errorMsg = `Access forbidden. You don't have permission to view this agent.`;
              break;
            case 404:
              errorMsg = `Agent not found. The agent with ID ${id} does not exist.`;
              break;
            case 408:
              errorMsg = `Request timeout. Please try again.`;
              break;
            case 429:
              errorMsg = `Too many requests. Please slow down and try again later.`;
              break;
            case 500:
              errorMsg = `Internal server error. Please try again later.`;
              break;
            case 502:
              errorMsg = `Bad gateway. The server is temporarily unavailable.`;
              break;
            case 503:
              errorMsg = `Service unavailable. Please try again later.`;
              break;
            case 504:
              errorMsg = `Gateway timeout. The server took too long to respond.`;
              break;
            default:
              errorMsg = `Server responded with status ${status}: ${JSON.stringify(
                axiosError.response.data
              )}`;
          }
        }
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      setAgentsRequest((currentRequestState) => ({
        ...currentRequestState,
        errorMsg,
        isLoading: false,
      }));
    }
  },
};
