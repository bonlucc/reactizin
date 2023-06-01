import { createRoot } from "react-dom/client"
import React from "react"
import "./style.css"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

function Page () {
    return (
<div>
    <Header />
    <MainContent />
</div>
)
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Page />)

//document.getElementById("root").append(JSON.stringify(jsxElement))