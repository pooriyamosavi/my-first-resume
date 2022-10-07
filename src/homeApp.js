import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./hero";
import HomeBody from "./homeBody";
import Nav from "./nav";


const URL = "http://my-json-server.typicode.com/pooriyamosavi/myAPI/posts/1"

export default function HomeApp(){ 
    const [navData, setNavData] = useState([])
    const [Loading, setLoading] = useState("waiting")
    useEffect(()=>{
        axios
            .get(URL)
            .then(res=>{
                setNavData(res.data.NavMenuList)
                setLoading("done")
            })
            .catch(err=>{
                console.log({ err })
                setLoading("failed")
            })
    }, [])
    return (
        <>
            {Loading === "done" && 
            <div>
                <Nav /> 
                <Hero /> 
                <HomeBody data={navData} /> 
            </div>}
            {Loading === "waiting" && <i className="fa fa-circle-o-notch fa-spin fa-5x position-absolute end-50 mt-5 text-danger"></i>}
            {Loading === "failed" && <h1 className="text-center mt-5">loading failed</h1>}
        </>
    )
}