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


export default {
  getItems,
  createItem
};