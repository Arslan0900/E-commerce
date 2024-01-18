// A mock function to mimic making an async request for data
export function  fetchAllProducts() {
  return new  Promise( async (resolve) =>{
    const responce  = await fetch('http://localhost:8080/products')
    const data = await responce.json()
    resolve({data});
    // console.log(data)
  }
  );
}
export function  fetchProductsByfilter(filter) {
  let queryStringe = '';
  for(let key in filter){
    queryStringe += `${key}=${filter[key]}&`
  }
  // console.log(queryStringe)
  return new  Promise( async (resolve) =>{
    const responce  = await fetch('http://localhost:8080/products'+"?"+queryStringe);
    const data = await responce.json()
    resolve({data});
    // console.log(data)
  }
  );
}
