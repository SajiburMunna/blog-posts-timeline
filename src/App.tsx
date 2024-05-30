import ReactQueryProvider from "./context/ReactQueryProvider";
import TimeLine from "./features/timeline";
import PageLayout from "./layouts/PageLayout";

import "./styles/App.css";

function App() {
  return (
    <ReactQueryProvider>
    <PageLayout>
      <TimeLine />
    </PageLayout>
    </ReactQueryProvider>
  );
}

export default App;
