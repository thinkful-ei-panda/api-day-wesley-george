import store from './store';

const BASE_URL='https://thinkful-list-api.herokuapp.com/wesley';

let getItems=function(){
  return listApiFetch(`${BASE_URL}/items`);    
};

let createItem=function(name){
  let newItem=JSON.stringify({name});
  return listApiFetch(`${BASE_URL}/items`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:newItem
  });
};

let updateItem = function(id, updateData) {
  let updateDataJson = JSON.stringify(updateData);
  return listApiFetch(`${BASE_URL}/items/${id}`,{
    method:'PATCH',
    headers:{'Content-Type': 'application/json'},
    body:updateDataJson
  });
};

let deleteItem = function(id) {
  return listApiFetch(`${BASE_URL}/items/${id}`,{
    method:'DELETE'
  });
};

	
function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        // Valid HTTP response but non-2xx status - let's create an error!
        error = { code: res.status };
      }
 
      // In either case, parse the JSON stream:
      return res.json();
    })
 
    .then(data => {
      // If error was flagged, reject the Promise with the error object
      if (error) {
        error.message = data.message;
        this.store.error=error.message;
      }
 
      // Otherwise give back the data as resolved Promise
      return data;
    });
}



export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};