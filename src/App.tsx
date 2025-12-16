import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingContextProvider } from "./contexts/LoadingContext";

import { Content } from "./pages/Content";
import { UserData } from "./pages/UserData";

function App() {
  return (
    <LoadingContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/users/:userId" element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </LoadingContextProvider>
  );
}

export default App;
