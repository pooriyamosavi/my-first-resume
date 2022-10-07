import React, { useEffect, useState } from "react";
import CartItem from "./cartItem";




export default function StickyCart(prop){
    const cartItemElement = prop.data.map(item=>{
        return<CartItem data={item} />
    })
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
    }
    let humanRead = (num,intSep = ',',floatSep = '.') => {

        return new Intl
           .NumberFormat('en-US')
           .format(num)
           .replaceAll('.',floatSep)
           .replaceAll(',',intSep);
       
    }
    return(
        <>
            <div className="d-flex justify-content-between align-items-center stick bg-danger p-2 text-white" onClick={handleScroll}>
                <div className="d-flex">
                    <i class="fa-light fa-bag-shopping ms-2"></i>
                    <h4>سبد خرید</h4>
                </div>
                <div>{humanRead(prop.OV * 1000)} تومان</div>
            </div>
            {prop.data.length !== 0 && <div className="cart2">
                <div>  
                    {cartItemElement}
                    <div className="d-flex justify-content-between py-3 px-3">
                        <h5 className="text-black"> هزینه کل </h5>
                        <h5 className="text-black">{humanRead(prop.OV * 1000)} تومان</h5>
                    </div>
                    <h3 className=" fs-4 mt-4 text-danger text-center" > کد تخفیف دارید؟ </h3>
                    <button className="btn btn-danger w-75 mx-auto d-block mt-1 mb-3"> نهایی کردن سفارش </button>
                </div>
            </div>}
        </>
    )
}