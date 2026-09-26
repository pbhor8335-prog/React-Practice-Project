function Product(){

    let product={
        name:"Laptop",
        price:"50000",
        category:"Electronic",
       details:{
        brand:"Apple",
        color:"white",
        size:500
       }
    }
    return(
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",
            marginTop:"30px"

        }}>
            <div style={{width:"400px",height:"350px",color:"red",backgroundColor:"lightpink",
                textAlign:"center",
                border:"4px solid black",
                boxShadow:"10px 10px 10px black",

                }}>
                <h1>Product  Information</h1>
                <p>Name :{product.name}</p>
                <p>Price :{product.price}</p>
                <p>Category :{product.category}</p>
                <p>Details :{product.details.brand}</p>
                <p>{product.details.color}</p>
                <p>{product.details.size}</p>

                <button>purchase</button>
            </div>
        </div>
    )
    
}

// XPathExpression
// XPathExpression
export default Product;