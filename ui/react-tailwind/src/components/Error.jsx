import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (

    <div className="flex flex-col h-screen justify-center items-center leading-normal">
      <h1 className="font-bold text-xl">Oops!</h1>
      <p>Sorry... Are you lost? Please find your way back&nbsp;  
        <Link to ={`/`}
              className="text-blue-600 hover:underline">home</Link>
        .
      </p>
      <p>
        <i className="text-red-600">Error: {error.statusText || error.message}</i>
      </p>
    </div>

  );
}