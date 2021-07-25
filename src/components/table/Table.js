import {NavLink} from "react-router-dom"
import {connect} from "react-redux";
import {setSelectedData} from "../../store/actions/actionTypes"
import {setProductList} from "../../store/actions/actionTypes"

function Table({setSelectedData, setProductList, productList}) {

    const handlerData =(el)=> {
        setSelectedData(el)
    }
    const sortHandler =(key)=> {
        let sortedArr = [...productList].sort((a,b)=> parseFloat(b[key]) - parseFloat(a[key]))
        setProductList(sortedArr)
    }
    const sortStringHandler =(key)=> {
        let sortedArr = [...productList].sort((a,b)=> a[key].localeCompare(b[key]))
        setProductList(sortedArr)
    }

    return (
        <table className="table-auto w-max m-auto my-5" >
            <thead>
            <tr>
                <th onClick={()=>sortStringHandler('product')} className="px-4 py-1 text-light-blue-600">product</th>
                <th onClick={()=>sortStringHandler('SKU')} className="px-4 py-2 text-light-blue-600">SKU</th>
                <th onClick={()=>sortHandler('RAM')} className="px-4 py-2 text-light-blue-600">RAM</th>
                <th onClick={()=>sortHandler('HDD')} className="px-4 py-2 text-light-blue-600">HDD</th>
                <th onClick={()=>sortHandler('Price')} className="px-4 py-2 text-light-blue-600">Price</th>
            </tr>
            </thead>
            <tbody>
            {
                productList.map((product, index) => {
                    return (
                        <tr className="bg-light-blue-200" key={index}>
                            <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium ">{product.product}</td>
                            <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{product.SKU}</td>
                            <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{product.RAM}</td>
                            <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{product.HDD}</td>
                            <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{product.Price}</td>
                            <td>
                                <NavLink to="/form">
                                    <button
                                        onClick={()=>handlerData(product)}
                                        className=" text-green-500 border-solid border-green-500 border-2 rounded-full py-0.5 px-4">
                                       Buy
                                    </button>
                                </NavLink>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}

const mapStateToProps =(state)=> {
    return {
        productList: state.tableReducer.productList,
    }
}
const mapDispatchToProps = {
    setSelectedData,
    setProductList
}
export default connect(mapStateToProps, mapDispatchToProps)(Table)