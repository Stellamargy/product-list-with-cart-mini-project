const getProducts = () => {
    fetch(`http://localhost:3000/items`)
    .then((response)=>{
        if(!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json()
    })
    .then((products)=>console.log(products))
    .catch((error)=>console.log("error:" , error))
  
    
};

// INITIALIZE
getProducts();

