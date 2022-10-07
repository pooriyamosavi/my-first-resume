import { Link } from "react-router-dom";




export default function Nav(){
    return(
        <div className="d-flex justify-content-between bg-white nav px-5 py-1 align-items-center">
            <img src="https://www.dolphin-fastfood.com/2.4.2.9/img/264186f00263c8e80c5e14ddb4a178ef.png" alt="" />
            <Link to="/login" class="btn btn-outline-danger py-2 px-3 button"> ورود / عضویت </Link>
        </div>
    )
}