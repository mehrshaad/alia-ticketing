import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import faIR from "antd/locale/fa_IR";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import App from "./App.jsx";
import "./index.css";

dayjs.extend(jalaliday);
dayjs.calendar("jalali");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      locale={faIR}
      direction="rtl"
      theme={{
        token: {
          fontFamily: "Vazirmatn, sans-serif",
          colorPrimary: "#1d4ed8",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
