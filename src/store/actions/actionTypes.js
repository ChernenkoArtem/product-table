export function setSelectedData(data){
    return {
        type: 'SELECTED_DATA',
        payload: data
    }
}
export function setCustomerInfo(data){
    return {
        type: 'CUSTOMER_INFO',
        payload: data
    }
}
export function setProductList(data){
    return {
        type: 'PRODUCT_LIST',
        payload: data
    }
}