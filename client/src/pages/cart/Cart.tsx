import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import medicalScrub from '../../assets/medicalScrub.jpg'

const Cart = () => {

  const navigate = useNavigate()

  return (
    <main className='w-full h-fit py-20 px-10'>
        <div className='w-full mx-auto h-10 flex justify-between items-center font-medium text-darkgray border-b border-zinc-300'>
            <Link to='/' className='w-fit h-fit flex items-center gap-1'>
                <FaLongArrowAltLeft />
                Home
            </Link>
            <p className='text-xl'>Your shopping cart</p>
            <p>Step 1/3</p>
        </div>
        <div className='w-full h-fit flex justify-between items-start flex-nowrap'>

          <table className='w-8/12 text-center bg-white mt-10 poppinsFont'>
            <thead className='font-extrabold h-12'>
              <tr>
                <th></th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody className='font-medium text-sm '>
              <tr className='border-t'>
                <td className='flex items-center justify-start gap-5 px-3 py-5'>
                  <img src={medicalScrub} alt="" className='w-40 h-auto' />
                  <div className='text-left px-3 py-5'>
                    <p>Product name</p>
                    <p>XS / S</p>
                    <p>Open</p>
                    <p>Petit</p>
                  </div>
                </td>
                <td className='px-3 py-5'>
                  <div className='w-fit h-fit flex flex-nowrap border border-zinc-300 text-darkgray mx-auto'>
                    <button className='w-9 h-9 font-mono font-extrabold hover:bg-zinc-100 text-lg'>-</button>
                    <input type="number" name="" value={0} className='removeArrowButtons w-10 h-9 outline-none text-center text-base' />
                    <button className='w-9 h-9 font-mono font-extrabold hover:bg-zinc-100 text-lg'>+</button>
                  </div>
                </td>
                <td className='px-3 py-5'>88.00$</td>
              </tr>
              <tr className='border-t'>
                <td className='flex items-center justify-start gap-5 px-3 py-5'>
                  <img src={medicalScrub} alt="" className='w-40 h-auto' />
                  <div className='text-left px-3 py-5'>
                    <p>Product name</p>
                    <p>XS / S</p>
                    <p>Open</p>
                    <p>Petit</p>
                  </div>
                </td>
                <td className='px-3 py-5'>
                  <div className='w-fit h-fit flex flex-nowrap border border-zinc-300 text-darkgray mx-auto'>
                    <button className='w-9 h-9 font-mono font-extrabold hover:bg-zinc-100 text-lg'>-</button>
                    <input type="number" name="" value={0} className='removeArrowButtons w-10 h-9 outline-none text-center text-base' />
                    <button className='w-9 h-9 font-mono font-extrabold hover:bg-zinc-100 text-lg'>+</button>
                  </div>
                </td>
                <td className='px-3 py-5'>88.00$</td>
              </tr>
              <tr className='border-t'>
                <td className='flex items-center justify-start gap-5 px-3 py-5'>
                  <img src={medicalScrub} alt="" className='w-40 h-auto' />
                  <div className='text-left px-3 py-5'>
                    <p>Product name</p>
                    <p>XS / S</p>
                    <p>Open</p>
                    <p>Petit</p>
                  </div>
                </td>
                <td className='px-3 py-5'>
                  <div className='w-fit h-fit flex flex-nowrap border border-zinc-300 text-darkgray mx-auto'>
                    <button className='w-9 h-9 font-mono font-extrabold hover:bg-zinc-100 text-lg'>-</button>
                    <input type="number" name="" value={0} className='removeArrowButtons w-10 h-9 outline-none text-center text-base' />
                    <button className='w-9 h-9 font-mono font-extrabold hover:bg-zinc-100 text-lg'>+</button>
                  </div>
                </td>
                <td className='px-3 py-5'>88.00$</td>
              </tr>
            </tbody>
          </table>

          <div className='w-96 h-fit mt-12 rounded-xl shadow-modern px-5 py-8'>
            <h1 className='w-full text-2xl text-center text-darkgray poppinsFont font-extrabold'>Summary</h1>
            <form className='w-full h-9 flex items-center gap-1 mt-7'>
              <input type="text" className='flex-1 h-9 border border-trendygreen' />
              <button type='submit' className='w-fit h-9 px-3 bg-trendygreen font-medium text-white rounded'>Apply</button>
            </form>
            <p className='w-full h-fit flex justify-between items-center mb-5 mt-10 font-medium'>Subtotal: <span>299$</span></p>
            <p className='w-full h-fit flex justify-between items-center pb-5 border-b border-darkertrendygreen font-medium'>Estimate shipping: <span>299$</span></p>
            <p className='w-full h-fit flex justify-between items-center mt-5 font-bold'>Total: <span>299$</span></p>
            <button onClick={() => navigate('/cart/checkout')} className='w-full h-fit py-2 bg-trendygreen text-white font-medium text-center rounded shadow-modern shadow-trendygreen/30 mt-7'>
              Proceed to checkout
            </button>

            <button onClick={() => navigate('/')} className='w-full h-fit py-2 border border-trendygreen text-trendygreen font-medium text-center rounded mt-2'>
              Continue shopping
            </button>
            
          </div>

        </div>
    </main>
  )
}

export default Cart