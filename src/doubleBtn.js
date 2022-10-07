import { NavLink } from "react-router-dom"




export default function Dbtn(){
    
    return (
        <div className="Dbtn px-5 mt-4 mb-2">
            <NavLink to="/home" className="border-0 fs-5 px-4  text-decoration-none text-black navbtn"> منوی غذا </NavLink>
            <NavLink to="/info" className="border-0 fs-5 px-4  text-decoration-none text-black navbtn"> اطلاعات رستوران </NavLink>
        </div>
    )
}