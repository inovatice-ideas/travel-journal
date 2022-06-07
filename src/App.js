import React from "react"
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import data from "./data";

function App() {
    const details = data.map(item => {
        return (
            <Blog 
                {...item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {details}
        </div>
    )
}

export default App;