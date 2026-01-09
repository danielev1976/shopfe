import ProductCard from "./productcard"

export default async function Products(){
    const response = await fetch('http://localhost:8080/products', {
        cache: "no-store"
    })
    console.log(response);
    
    const products = await response.json()

    console.log(products);
    
    return (
        <div className="flex">
        { 
        products.map(product =>(   
            <ProductCard key={product.name} product={product}/>
        )) }
        </div>
        )
}