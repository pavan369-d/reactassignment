import { put, takeEvery } from 'redux-saga/effects';
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';


function* getProducts(){
  
     let data= yield fetch('https://fakestoreapi.com/products/');
     
    data= yield data.json();
    console.warn('action is called',data)
    yield put({type:SET_PRODUCT_LIST,data})
}

function* searchProducts(data){
  
   let result= yield fetch(`https://fakestoreapi.com/products/${data.query}`);
   
 result = yield result.json();
  console.warn('action is called',result)
  yield put({type:SET_PRODUCT_LIST,result})
}

function* productSaga(){
   yield takeEvery(PRODUCT_LIST, getProducts )
   yield takeEvery(SEARCH_PRODUCT,searchProducts)
}

export default productSaga;