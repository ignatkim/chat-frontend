import history from "../../history";

export const historyPush = (payload) => {
  return () => {
    history.replace(payload);
  };
};

