import { Navigate } from "react-router-dom";

/** The index now lives inside the library as its own view; old links to #/index still work. */
export default function IndexPage() {
  return <Navigate to="/surahs?view=index" replace />;
}
