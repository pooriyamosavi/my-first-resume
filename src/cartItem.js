



export default function CartItem(prop){
    return(
        <div className="border-bottom p-2 d-flex justify-content-between align-items-center">
            <div>
                <h5 className="text-black" >{prop.data.name}</h5>
                <h6>{prop.data.value} تومان</h6>
            </div>
                <div className="mx-1">{prop.data.count}</div>
        </div>
    )
}