import { PlacementCenterApp } from "./app/PlacementCenterApp";
import AdvisorCallPage from "./pages/AdvisorCallRoute";

function shouldShowAdvisorPage() {
  const params = new URLSearchParams(window.location.search);
  const path = window.location.pathname.replace(/\/+$/, "");
  return (
    params.get("page") === "advisor-call" ||
    window.location.hash === "#advisor-call" ||
    path.endsWith("/advisor-call")
  );
}

export default function App() {
  return shouldShowAdvisorPage() ? <AdvisorCallPage /> : <PlacementCenterApp />;
}
