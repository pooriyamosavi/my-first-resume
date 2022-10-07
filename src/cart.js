import CartItem from "./cartItem"





export default function Cart(prop){
    const cartItemElement = prop.data.map(item=>{
        return<CartItem data={item} />
    })
    let humanRead = (num,intSep = ',',floatSep = '.') => {

        return new Intl
           .NumberFormat('en-US')
           .format(num)
           .replaceAll('.',floatSep)
           .replaceAll(',',intSep);
       
    }
       
    return(
        <div className="cart bg-white my-4 mx-3">
            <div className="border-bottom py-2 px-3">
                <h4>سبد خرید </h4>
            </div>
            <div className="order-cart ">
                {prop.data.length === 0 && <h5 className="text-center mt-5 pt-5"> سبد خرید خالی است </h5>}
                {prop.data.length !== 0 &&  
                <div> 
                    {cartItemElement}
                    <div className="d-flex justify-content-between py-3 px-3">
                        <h5 className="text-black"> هزینه کل </h5>
                        <h5 className="text-black">{humanRead(prop.OV * 1000)} تومان</h5>
                    </div>
                    <h3 className=" fs-4 mt-4 text-danger text-center" > کد تخفیف دارید؟ </h3>
                    <button className="btn btn-danger w-75 mx-auto d-block mt-1 mb-3"> نهایی کردن سفارش </button>
                </div>}
            </div>
        </div>
    )
}