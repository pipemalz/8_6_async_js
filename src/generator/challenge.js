const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function* anotherFn(url) {
    try{
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${url}/products/${products[0].id}`);
        yield console.log(product);
        const category = await fetchData(`${url}/categories/${product.category.id}`);
        yield console.log(category);
        const fetchedData = {
            product : product.title,
            category : category.name
        }
        yield console.log(fetchedData)
    }catch(e){
        console.error(e)
    }
}
const gen = anotherFn(API);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);