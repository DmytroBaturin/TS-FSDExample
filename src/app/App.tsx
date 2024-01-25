import { Layout } from "@/shared/layout";
import { withRouter } from "./routers";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>{withRouter()}</Layout>
    </Suspense>
  );
}

export default App;
