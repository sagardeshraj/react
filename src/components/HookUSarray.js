import React,{ useState }from 'react'

function HookUSarray() {
    const [item, setItem] = useState([])

 const addItem =()=>{
     setItem([...item, {
         id:item.length,
         value: Math.floor(Math.random()* 10)+1
     }])
 }
    
  return (
    <div>
        <button onClick={addItem}>add a number</button>
        <ol>
            {
                item.map((item)=>(
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ol>
        
    </div>
  )
}

export default HookUSarray