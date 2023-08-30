import { useRouteError } from "react-router-dom";
import MainNavigation from "../../components/NavBar/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An Error Occurred!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
