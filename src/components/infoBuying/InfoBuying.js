import {connect} from "react-redux";

function InfoBuying({deviceInfo, customerInfo}) {
    return (
        <div className="w-max m-auto my-5">
            <table className="table-auto" >
                <thead>
                <tr>
                    <th className="px-4 py-1 text-light-blue-600">Product</th>
                    <th className="px-4 py-2 text-light-blue-600">SKU</th>
                    <th className="px-4 py-2 text-light-blue-600">RAM</th>
                    <th className="px-4 py-2 text-light-blue-600">HDD</th>
                    <th className="px-4 py-2 text-light-blue-600">Price</th>
                </tr>
                </thead>
                <tbody>
                    <tr className="bg-light-blue-200" >
                        <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium ">{deviceInfo.product}</td>
                        <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{deviceInfo.SKU}</td>
                        <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{deviceInfo.RAM}</td>
                        <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{deviceInfo.HDD}</td>
                        <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{deviceInfo.Price}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table-auto" >
                <thead>
                <tr>
                    <th className="px-4 py-1 text-light-blue-600">Full Name</th>
                    <th className="px-4 py-2 text-light-blue-600">Email</th>
                    <th className="px-4 py-2 text-light-blue-600">Country</th>
                    <th className="px-4 py-2 text-light-blue-600">City</th>
                    <th className="px-4 py-2 text-light-blue-600">Address </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-light-blue-200" >
                    <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium ">{customerInfo.fullName}</td>
                    <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{customerInfo.email}</td>
                    <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{customerInfo.country}</td>
                    <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{customerInfo.city}</td>
                    <td className="border border-light-blue-500 px-4 py-2 text-light-blue-400 font-medium">{customerInfo.address}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps =(state)=> {
    return {
        deviceInfo: state.tableReducer.dataPickRow,
        customerInfo: state.formReducer
    }
}

export default connect(mapStateToProps, null)(InfoBuying)