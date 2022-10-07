import { useEffect, useState } from "react"




export default function FliterArea(prop){
    
    const [inp, setInp] = useState({
        search:"",
        tick:false
    })
    const [style, setstyle] = useState({})
    function focusHandle(){
        setstyle({
            fontSize:"10px",
            top:"-16px"
        })
    }
    function blurHandle(){
        if(inp.search.length === 0){
            setstyle({})
        }
    }
    function changeHandle(event){
        const {name, value, type, checked} = event.target
        setInp(oldInp=>{
            return{
                ...oldInp,
                [name]: type === "checkbox"?checked:value
            }
        })
        
    }
    useEffect(() => {
      prop.func1(inp.tick)
      prop.func2(inp.search)
    }, [inp, prop])
    
    return(
        <div className="filter bg-white d-flex justify-content-between px-3 py-3">
            <div>
                <button className="fa fa-search bg-white search position-relative"></button>
                <input
                    type="seach" 
                    name="search" 
                    id="search" 
                    onFocus={focusHandle} 
                    onBlur={blurHandle} 
                    onChange={changeHandle} 
                    value={inp.search} />
                <label className="position-relative lbl bg-white text-secondary" htmlFor="search" style={style}> جست و جوی سریع </label>
            </div>
            <div>
                <input type="checkbox" id="tick" name="tick" onChange={changeHandle} checked={inp.tick}/>
                <label htmlFor="tick" > فقط موجود ها </label>
            </div>
        </div>
    )
}