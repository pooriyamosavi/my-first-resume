import Dbtn from "./doubleBtn"
import Cart from "./cart"
import NavMenu from "./navMenu"
import FliterArea from "./filterArea"
import list from "./list"
import MenuItem from "./menuItem"
import Footer from "./footer"
import { useEffect, useState } from "react"
import StickyCart from "./stickyCard"



export default function HomeBody(prop){
    const [count, setcount] = useState(0)
    const [OV, setOV] = useState(0)
    const [cartData, setcartData] = useState([])
    function clickHandle(name, val, num) {

            setcartData(olddata=>{
            let newdata;
            cartData.length > 0?newdata = olddata.filter(item=>item.name !== name):newdata = []
            newdata.push({
                name:name,
                value:val,
                count:num
            })
            newdata = newdata.filter(item=>item.count!==0)
            
            return newdata
            })
            
            
            
        }
    useEffect(()=>{
        setOV(item=>{
            let newOV = 0;
            for (let i = 0; i < cartData.length; i++) {
                newOV += parseInt(cartData[i].value) * cartData[i].count                
            }
            return newOV
        })
        console.log(OV)
        console.log(cartData)
    },[cartData, OV])

    const [isChecked, setChecked] = useState(false)
    const [keyword, setkeyword] = useState("")
    function checkhandle(bool){
        setChecked(bool)
    }
    function searchHandle(str){
        setkeyword(str)
    }

    const menuItemElement1 = list.americanPizza.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement2 = list.italianPizza.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement3 = list.doublePizza.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement4 = list.italianSandwich.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement5 = list.chipsAndChees.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement6 = list.hamberger.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement7 = list.sandwich.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement8 = list.fried.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement9 = list.appetizer.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const menuItemElement10 = list.drinks.map(item=>{
        if (isChecked) {
            if(item.available){
                return <MenuItem data={item} func={clickHandle} />
            }
            return null
        }
        return <MenuItem data={item} func={clickHandle} />
    })
    const searchElement = [list.americanPizza, list.italianPizza, list.doublePizza, list.italianSandwich, list.chipsAndChees, list.hamberger, list.sandwich, list.fried, list.appetizer, list.drinks].map(element=>element.map(item=>{
        if(item.title.includes(keyword) || item.ingredient.includes(keyword)){
            return <MenuItem data={item} func={clickHandle} />
        }
        return null
    })) 
    return(
        <>
        <div>
        <div className="body d-flex mb-5">
            <div className="shop">
                <Dbtn />
                <NavMenu data={prop.data} />
                <FliterArea func1={checkhandle} func2={searchHandle} />
                <div className="menuBody bg-white border-top-0">
                    {keyword.length <= 0 && <div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">پیتزا امریکایی(خمیرضخیم)</h1>
                    <div className="GRID" id="americanpizza" >
                        {menuItemElement1}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">پیتزا ایتالیایی(خمیرنازک)</h1>
                    <div className="GRID" id="italianpizza" >
                        {menuItemElement2}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">پیتزا 2 نفره</h1>
                    <div className="GRID" id="doublepizza" >
                        {menuItemElement3}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">ساندویچ ایتالیایی</h1>
                    <div className="GRID" id="italiansandwich" >
                        {menuItemElement4}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">چیپس و پنیر</h1>
                    <div className="GRID" id="chipsandchees" >
                        {menuItemElement5}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">همبرگر</h1>
                    <div className="GRID" id="hamberger" >
                        {menuItemElement6}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">ساندویچ</h1>
                    <div className="GRID" id="sandwich" >
                        {menuItemElement7}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">سوخاری</h1>
                    <div className="GRID" id="fried" >
                        {menuItemElement8}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">پیش غذا</h1>
                    <div className="GRID" id="appetizer" >
                        {menuItemElement9}
                    </div>
                    <h1 className="fs-3 py-3 text-secondary px-4 pt-5">نوشیدنیها</h1>
                    <div className="GRID pb-3" id="drinks" >
                        {menuItemElement10}
                    </div>
                    </div>}
                    {keyword.length > 0 && 
                        <div className="GRID">
                            {searchElement}
                        </div>}
                </div>
                <StickyCart data={cartData} OV={OV} />
            </div>
            <div className="cartbody">
                <Cart data={cartData} OV={OV} />
            </div>
        </div>
        <Footer />
        
        </div>
        </>
    )
}