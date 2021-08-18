import React from 'react'


const ItemCard = ({ item }) => {
    
    const list = item.attributes.map(i => 
        <div key={i.id}>
            
                <img src={i.image} height="200" width="200" alt="item"></img>
                <center>{i.name} ${i.price}</center>
            
        </div>
    )
    

    let total = 0
    
    const totalPrice = item.map(item => total += item.price)
    
       
    return (
        <div key={item.id}>
        
            <h3>{list}</h3>
            <p>Total: ${totalPrice[1]}</p>
            

        </div>
    )
    

    
}

export default ItemCard