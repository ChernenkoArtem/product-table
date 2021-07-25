import {connect} from "react-redux";
import {setCustomerInfo} from "../../store/actions/actionTypes";
import {NavLink} from "react-router-dom"

function Form({setCustomerInfo}) {

    const inputHandler =(key, el)=>{
        setCustomerInfo({ [key]:el.target.value} )
    }

    return (
        <div className="mt-10 sm:mt-0 w-2/5 m-auto">
            <form action="" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md ">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Full
                                    name</label>
                                <input type="text" name="first_name" id="first_name" autoComplete="given-name"
                                       onChange={inputHandler.bind(null,'fullName')}
                                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email_address"
                                       className="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="text" name="email_address" id="email_address" autoComplete="email"
                                       onChange={inputHandler.bind(null,'email')}
                                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="street_address"
                                       className="block text-sm font-medium text-gray-700">Country
                                </label>
                                <input type="text" name="street_address" id="street_address"
                                       autoComplete="street-address"
                                       onChange={inputHandler.bind(null,'country')}
                                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="city"
                                       className="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" name="city" id="city"
                                       onChange={inputHandler.bind(null,'city')}
                                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="street_address"
                                       className="block text-sm font-medium text-gray-700">Address
                                </label>
                                <input type="text" name="street_address"
                                       autoComplete="address"
                                       onChange={inputHandler.bind(null,'address')}
                                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md"/>
                            </div>

                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <NavLink to="/buying-information">
                            <button type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Confirm order
                            </button>
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    setCustomerInfo
}
export default connect(null, mapDispatchToProps)(Form)