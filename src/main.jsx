import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ✅ Create root safely
const container = document.getElementById("root");
if (!container) {
  console.error("❌ Root element not found. Make sure <div id='root'></div> exists in index.html.");
} else {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      {/* 🌀 Suspense adds a fallback while components load */}
      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
        <App />
      </Suspense>
    </StrictMode>
  );
}
