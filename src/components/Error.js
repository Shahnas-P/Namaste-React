import { useRouteError } from "react-router-dom";

// react-router-dom provide hooks that will show errors
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops !!! </h1>
      <h1>{err.status}</h1>
      <h2>{err.data}</h2>
    </div>
  );
};
export default Error;
