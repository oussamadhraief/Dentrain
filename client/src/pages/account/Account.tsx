import { Link } from "react-router-dom"
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { RiFileList2Line } from 'react-icons/ri'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IconContext } from "react-icons"

const Account = () => {
    
  return (
    <div className="flex-1">
        <h1 className='w-full h-fit text-2xl font-bold text-darkgray text-center'>Your account's activity</h1>
        <section className='w-full h-fit flex flex-nowrap justify-center gap-[8%] mt-3 py-5'>
    
            <div className='w-[22.5%] py-8 flex flex-nowrap items-center justify-between px-5 rounded h-fit shadow-modern'>
                <div className="">
                    <h3 className='font-medium text-darkgray drop-shadow-xl text-center w-full'>Total products ordered</h3>
                    <h2 className='text-2xl text-darkertrendygreen font-bold drop-shadow-xl gap-1'>4</h2>
                </div>
                <IconContext.Provider value={{ className: 'text-darkertrendygreen w-12 h-12 '}}>
                    <div className="w-fit h-fit p-4 bg-verylighttrendygreen rounded-full">
                        <AiOutlineUsergroupAdd />
                    </div>
                </IconContext.Provider>
            </div>
            <div className='w-[22.5%] py-8 flex flex-nowrap items-center justify-between px-5 rounded h-fit shadow-modern'>
                <div className="">
                    <h3 className='font-medium text-darkgray drop-shadow-xl text-center w-full'>Total orders</h3>
                    <h2 className='text-2xl text-darkertrendygreen font-bold drop-shadow-xl gap-1'>6</h2>
                </div>
                <IconContext.Provider value={{ className: 'text-darkertrendygreen w-10 h-10 '}}>
                    <div className="w-fit h-fit p-5 bg-verylighttrendygreen rounded-full">
                        <RiFileList2Line />
                    </div>
                </IconContext.Provider>
            </div>
            <div className='w-[22.5%] py-8 flex flex-nowrap items-center justify-between px-5 rounded h-fit shadow-modern'>
                <div>
                    <h3 className='font-medium text-darkgray drop-shadow-xl text-center w-full'>Total money spent</h3>
                    <h2 className='text-2xl text-darkertrendygreen font-bold drop-shadow-xl gap-1'>$520</h2>
                </div>
                <IconContext.Provider value={{ className: 'text-darkertrendygreen w-10 h-10 '}}>
                    <div className="w-fit h-fit p-5 bg-verylighttrendygreen rounded-full">
                        <FaFileInvoiceDollar />
                    </div>
                </IconContext.Provider>
            </div>
            

        </section>

        <p>Recently visited products</p>


        <div className="flex justify-between px-10 py-2 items-end gap-4 text-darkertrendygreen mt-32 mb-2 ">
            <h1 className='w-fit h-fit text-xl font-bold text-darkgray text-center'>Recent orders </h1>
            <Link to='/admin-dashboard/orders/manage' className="text-darkertrendygreen hover:underline font-medium flex items-center gap-1">View all <span><FaLongArrowAltRight /></span></Link>
            </div>


<table className="w-[98%] mx-auto">
    <thead className="w-full text-center font-medium h-12 border-b border-darkertrendygreen text-darkertrendygreen">
        <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Total amount</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody className="w-full text-center font-medium">
        <tr>
            <td className="w-1/5 h-16">62e00aea7ecc0a2c24fefd7b</td>
            <td className="w-1/5 h-16">27 July 2022</td>
            <td className="w-1/5 h-16">Oussema Dhraief</td>
            <td className="w-1/5 h-16">299$</td>
            <td className="w-1/5 h-16">Delivered</td>
        </tr>
        <tr>
            <td className="w-1/5 h-16">62e00aea7ecc0a2c24fefd7b</td>
            <td className="w-1/5 h-16">27 July 2022</td>
            <td className="w-1/5 h-16">Oussema Dhraief</td>
            <td className="w-1/5 h-16">299$</td>
            <td className="w-1/5 h-16">Delivered</td>
        </tr>
        <tr>
            <td className="w-1/5 h-16">62e00aea7ecc0a2c24fefd7b</td>
            <td className="w-1/5 h-16">27 July 2022</td>
            <td className="w-1/5 h-16">Oussema Dhraief</td>
            <td className="w-1/5 h-16">299$</td>
            <td className="w-1/5 h-16">Delivered</td>
        </tr>
        <tr>
            <td className="w-1/5 h-16">62e00aea7ecc0a2c24fefd7b</td>
            <td className="w-1/5 h-16">27 July 2022</td>
            <td className="w-1/5 h-16">Oussema Dhraief</td>
            <td className="w-1/5 h-16">299$</td>
            <td className="w-1/5 h-16">Delivered</td>
        </tr>
        <tr>
            <td className="w-1/5 h-16">62e00aea7ecc0a2c24fefd7b</td>
            <td className="w-1/5 h-16">27 July 2022</td>
            <td className="w-1/5 h-16">Oussema Dhraief</td>
            <td className="w-1/5 h-16">299$</td>
            <td className="w-1/5 h-16">Delivered</td>
        </tr>
        
    </tbody>
</table>
    </div>
  )
}

export default Account