import { useRouteError } from "react-router-dom";
import { ERROR_BG } from "../utils/constants";

const Error = () => {
  const err = useRouteError();
  return (
    <div
      className="error-page"
      style={{ "--background-url": `url(${ERROR_BG})` }}
    >
      <div className="error-text">
        <h1>Its Time</h1>
        <h2>For</h2>
        <h1>A Leap of Faith</h1>
        <h1 className="large-text">{err.status}</h1>
      </div>
    </div>
  );
};

export default Error;
