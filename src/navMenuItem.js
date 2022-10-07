import { NavLink } from "react-router-dom";




export default function NavMenuItem(prop){
    return(
        <a href={prop.data.id} className="NavMenuItem text-decoration-none text-center">
            <img src={prop.data.img} alt="" />
            <h5 className="fs-6 text-black text-nowrap pt-2">{prop.data.caption}</h5>
        </a>
    )
}