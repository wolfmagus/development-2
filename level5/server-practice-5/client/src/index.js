import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.js"
import styles from "./styles.css"

const rootElement = document.getElementById("root")
createRoot(rootElement).render(<App/>)