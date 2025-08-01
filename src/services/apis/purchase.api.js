import { instance } from '.'

const URL = 'purchases'

const purchaseApi = {
  // addToCart(body: { product_id: string; buy_count: number }) {
  //   return http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, body)
  // },
  // getPurchases(params: { status: PurchaseListStatus }) {
  //   return http.get<SuccessResponse<Purchase[]>>(`${URL}`, {
  //     params
  //   })
  // },
  // buyProducts(body: { product_id: string; buy_count: number }[]) {
  //   return http.post<SuccessResponse<Purchase[]>>(`${URL}/buy-products`, body)
  // },
  // updatePurchase(body: { product_id: string; buy_count: number }) {
  //   return http.put<SuccessResponse<Purchase>>(`${URL}/update-purchase`, body)
  // },
  // deletePurchase(purchaseIds: string[]) {
  //   return http.delete<SuccessResponse<{ deleted_count: number }>>(`${URL}`, {
  //     data: purchaseIds
  //   })
  // }
  addToCart: ({product_id, buy_count}) => {
    return instance.post(`${URL}/add-to-cart`, {product_id, buy_count});
  },
  getPurchases: ({status}) => {
    return instance.get(URL, {params: {status}})
  },
  deletePurchase: (purchaseIds) => {
    return instance.delete(URL, {data: purchaseIds})
  }
}

export default purchaseApi;
