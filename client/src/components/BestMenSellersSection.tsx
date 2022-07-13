import confident from '../assets/confident.jpg'
import medicalScrub from '../assets/medicalScrub.jpg'

const BestMenSellersSection = () => {
  return (
    <section className='w-full h-fit grid mb-52 place-content-center place-items-center'>
        <h2 className='text-lg'>MEN'S BEST SELLERS</h2>
        <div className='w-fit h-fit flex flex-nowrap gap-5 text-xl font-bold'>
            <button>
                OPTION 1
            </button>
            <button>
                OPTION 2
            </button>
        </div>
        <div className='w-full h-fit grid mt-10 place-items-center place-content-center'>
            <div className='w-2/3 h-fit flex justify-center gap-10'>
                <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='w-fit h-fit grid place-content-start place-items-start gap-1'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
            </div>
            <button className='mt-14 bg-darkgray px-5 py-2 rounded shadow text-white'>
                View all
            </button>
        </div>
    </section>
  )
}

export default BestMenSellersSection