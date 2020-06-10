const BASE_URL='https://thinkful-list-api.herokuapp.com/wesley';

let getItems=function(){
  return fetch(`${BASE_URL}/items`);    
};

let createItem=function(name){
  let newItem=JSON.stringify({name});
  return fetch(`${BASE_URL}/items`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:newItem
  });   
};

let updateItem = function(id, updateData) {
  let updateDataJson = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`,{
    method:'PATCH',
    headers:{'Content-Type': 'application/json'},
    body:updateDataJson
  });
};


export default {
  getItems,
  createItem,
  updateItem
};