import { Routes, Route } from "react-router-dom";
import { routes } from "website:routes";

export function App() {
  return (
    <div>
      layout
      <Routes>
        {routes.map((page) => (
          <Route
            path={`/${page.path}`}
            element={<page.element />}
            key={page.path}
          />
        ))}
      </Routes>
    </div>
  );
}
