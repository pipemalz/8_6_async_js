// [POST] https://api.escuelajs.co/api/v1/products/
// # Body
// {
//   "title": "New Product",
//   "price": 10,
//   "description": "A description",
//   "categoryId": 1,
//   "images": ["https://placeimg.com/640/480/any"]
// }

const API = "https://api.escuelajs.co/api/v1";

// GET → Sirve para solicitar recurso.
// POST → Sirve para la creación de recursos en el servidor.
// PUT → Sirve actualizar por completo un recurso.
// DELETE → Sirve para eliminar un recurso.

function postData(url, data) {
  const response = fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "este producto sera eliminado",
  price: 1000000,
  description:
    "Soy una descripcion que sera eliminada en cualquier instante, adios.",
  categoryId: 3,
  images: [
    "https://images.com/image-that-will-be-deleted.jpg",
  ],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

// function updateData(url, data){
//     const response = fetch(url,{
//         method: "PUT",
//         mode: "cors",
//         credentials: "same-origin",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//     return response;
// }

// const newData = {
//     title: 'Gaming mouse with purple neon light',
//     price: 80
// }

// updateData(`${API}/products/206`, newData)
//     .then(response=> response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(()=>console.log('Finally'))

function deleteData(url,id){
    const response = fetch(`${url}/${id}`, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return response;
}

const idToDelete = 208;

deleteData(`${API}/products`, idToDelete)