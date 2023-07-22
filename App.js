import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Data from "./data"


export default function App(){
    let mainData = Data.map(item =>{
        return (
            <Main 
        key={item.id}
        item ={item}/>
        )
    })
    return (
        <div>
        <Navbar />
 <Header />
<section className="cards-list">
                {mainData}
            </section>
            < Footer />
        </div>
    )
}