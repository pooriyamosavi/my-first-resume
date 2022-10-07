
import { useRef} from 'react'
import NavMenuItem from './navMenuItem'





export default function NavMenu(prop){
    
    const navMenuItemElement = prop.data.map(item=>{
        return (
            <NavMenuItem data={item} />
        )
    })
    function scroll(x){
        ref.current.scrollLeft += x
    }
    const ref = useRef()
    return(
        <div className="navmenu d-flex position-sticky top-0">
            <div className="scrollbtn fa fa-angle-right fs-1 text-center pt-4" onClick={()=>scroll(120)}></div>
            <div className="navbtn d-flex py-3 px-2" ref={ref}>
                {navMenuItemElement}
            </div>
            <div className="scrollbtn fa fa-angle-left fs-1 text-center pt-4" onClick={()=>scroll(-120)}></div>
        </div>
    )
}