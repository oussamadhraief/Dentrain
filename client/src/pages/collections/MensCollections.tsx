import confident from '../../assets/confident.jpg'
import medicalScrub from '../../assets/medicalScrub.jpg'

const MensCollections = () => {
    
  return (
    <main className='w-full h-fit py-20 flex flex-nowrap justify-evenly'>
        <aside className='w-2/12 h-fit'>
            <input type="checkbox" name="availability" />

        </aside>
        <section className='w-9/12 h-fit flex flex-wrap justify-start gap-12'>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
        </section>
    </main>
  )
}

export default MensCollections