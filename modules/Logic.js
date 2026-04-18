import { url } from "./Data.js";

export async function productsApi() {
    let data = await url()
    let {products} = await data.json()
    console.log(products);

    return products
    
}