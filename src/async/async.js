const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const anotherFn = async url=> {
    try{
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${url}/products/${products[0].id}`);
        const category = await fetchData(`${url}/categories/${product.category.id}`);
        const fetchedData = {
            product : product.title,
            category : category.name
        }
        console.log(fetchedData)
    }catch(e){
        console.error(e)
    }
}
anotherFn(API)