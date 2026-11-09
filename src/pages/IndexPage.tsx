import { Navigate } from "react-router-dom";

/** The index now lives inside the library as its own view; the old /index address still works. */
export default function IndexPage() {
  return <Navigate to="/surahs?view=index" replace />;
}
