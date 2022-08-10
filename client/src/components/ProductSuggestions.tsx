import confident from '../assets/product.webp'
import medicalScrub from '../assets/product2.webp'

const ProductSuggestions = () => {
  return (
    <div className='w-3/4 h-fit mx-auto my-20'>
        <h1 className='text-darkgray text-xl font-medium my-5 text-center w-full'>You may also like</h1>
        <div className='w-full h-fit flex justify-center gap-10'>
            <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                <img src={confident} alt="product" className='w-full h-auto' />
                <h1 className='font-bold poppinsFont hover:underline'>Product name</h1>
                <h2>80$</h2>
            </div>
            <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                <img src={medicalScrub} alt="product" className='w-full h-auto' />
                <h1 className='font-bold poppinsFont hover:underline'>Product name</h1>
                <h2>80$</h2>
            </div>
            <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                <img src={confident} alt="product" className='w-full h-auto' />
                <h1 className='font-bold poppinsFont hover:underline'>Product name</h1>
                <h2>80$</h2>
            </div>
            <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                <img src={medicalScrub} alt="product" className='w-full h-auto' />
                <h1 className='font-bold poppinsFont hover:underline'>Product name</h1>
                <h2>80$</h2>
            </div>
        </div>
    </div>
  )
}

export default ProductSuggestions