const initialState = {
    productList: [
        {product: 'Lenovo IC-512', SKU: 'ZC11501', RAM : 4, HDD: 512 , Price: 550},
        {product: 'HP Megabook 14', SKU: 'ZC12001', RAM : 2, HDD: 240 , Price: 420},
        {product: 'Lenovo IC-520', SKU: 'ZC22004', RAM : 8, HDD: 1024 , Price: 600},
        {product: 'Asus ThinkPad 15-1554', SKU: 'ZC15030', RAM : 16, HDD: 1024 , Price: 700},
        {product: 'Lenovo IC-512', SKU: 'ZC11501', RAM : 4, HDD: 512 , Price: 550},
        {product: 'HP Elitebook 15', SKU: 'ZXC5460', RAM : 12, HDD: 515 , Price: 889}
    ],
    dataPickRow: {}
}

export function tableReducer(state=initialState, action){
    switch (action.type) {
        case 'SELECTED_DATA':
            return {...state ,dataPickRow : action.payload}
        case 'PRODUCT_LIST':
            return {...state ,productList : action.payload}
        default:
            return state
    }
}