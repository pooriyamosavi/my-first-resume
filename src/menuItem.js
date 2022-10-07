import { useState, useEffect } from "react"


export default function MenuItem(prop){
    const [count, setCount] = useState(0)
    function clickHandle(num){
        setCount(count + num)
    }
    useEffect(() => {
        prop.func(prop.data.title, prop.data.prise, count)
    }, [count])
    
    return(
        <div className="menuItem p-0 mx-2">
            <img src={prop.data.img} alt="" />
            <div className="title py-3 px-2">
                <h5 className="fs-4">{prop.data.title}</h5>
                <div className="d-flex justify-content-between">
                    <h6 className="fs-5">{prop.data.prise} تومان</h6>
                    <div className="d-flex justify-content-center">
                        { count === 0 || <div className="BTN text-center mx-1" onClick={()=>clickHandle(-1)}>-</div>}
                        { count === 0 || <div className="mx-1">{count}</div>}
                        <div className="BTN mx-1 text-center" onClick={()=>clickHandle(+1)}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}