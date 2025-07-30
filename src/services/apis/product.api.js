// import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
// import { SuccessResponse } from 'src/types/utils.type'
// import http from 'src/utils/http'
import { instance } from './index'


const URL_PRODUCTS = 'products';
const productApi = {
  // getProducts(params: ProductListConfig) {
  //   return http.get<SuccessResponse<ProductList>>(URL, {
  //     params
  //   })
  // },
  // getProductDetail(id: string) {
  //   return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  // }
  getAllProducts() {
    return instance.get(URL_PRODUCTS);
  },
  getProductDetail(id) {
    return instance.get(`${URL_PRODUCTS}/${id}`);
  },
}

export default productApi;
