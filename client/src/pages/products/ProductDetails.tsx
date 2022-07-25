import { useState, useRef, useEffect } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import { IconContext } from 'react-icons'
import { useParams } from 'react-router-dom'
import confident from '../../assets/confident.jpg'
import medicalScrub from '../../assets/medicalScrub.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import sizeChart from '../../assets/sizeChart.webp'


const ProductDetails = () => {

    const { productId } = useParams()

    const ImageScrollerRef = useRef<HTMLDivElement>(null)
    const MainImageRef  = useRef<HTMLDivElement>(null)

    const [ProductInfo, setProductInfo] = useState({name: '',ProductImages: [medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident],PantsType: ["JOGGER","JOGGER"],ProductSizes: ['XS','S','M','L','XL','XLL'],PantsLength: ['PETIT','LARGE'], Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi exercitationem ratione a architecto iure, quibusdam laboriosam sed voluptatem, iusto id obcaecati provident, est adipisci. Ipsa ea non dicta neque voluptatibus.'})
    const [MainImage, setMainImage] = useState(0)
    const [SelectedPantsType, setSelectedPantsType] = useState(0)
    const [SelectedProductSize, setSelectedProductSize] = useState(0)
    const [SelectedPantsLength, setSelectedPantsLength] = useState(0)
    const [ExpandedSizeChart, setExpandedSizeChart] = useState(false)
    const [ExpandedDescription, setExpandedDescription] = useState(false)
    
    useEffect(() => {
        if(ImageScrollerRef.current && MainImageRef.current )
        if(MainImageRef.current?.clientHeight >100)
            ImageScrollerRef.current.style.height = MainImageRef.current?.clientHeight + 'px'

    }, [])
    

    const handleChangeMainImage = (index: number) => {
        setMainImage(index)

        ImageScrollerRef.current?.scroll(0,(index -1)  * 188 + 40)

    }

  return (
    <main className='h-fit w-full py-20 flex flex-nowrap justify-center gap-10 items-start'>
        <div className='w-4/12 h-fit flex flex-nowrap justify-between items-start gap-4 overflow-hidden'>

                <div ref={ImageScrollerRef} className='w-28 grid place-content-start gap-5 overflow-auto scroll-smooth removeScrollbar'>
                        {ProductInfo.ProductImages.map((element,index) => <button className={index === MainImage ? "relative before:content-[''] before:inset-0 before:border-2 before:border-black before:absolute" : ""} onClick={() => handleChangeMainImage(index)}><img src={element} alt="product" className='w-full h-auto' /></button>)}
                </div>
                <div ref={MainImageRef} className='flex-1'>

                    <Zoom>
                        <img src={ProductInfo.ProductImages[MainImage]} alt="product" className='w-full h-auto' />
                    </Zoom>

                </div>
        </div>
        <div className='w-4/12 h-fit grid place-items-start'>

            <h1 className='text-3xl font-semibold mb-5 text-darkertrendygreen'>{productId}</h1>

            <h2 className='text-xl mb-7 font-mono font-bold'>  $88.00</h2>

            <section className='w-full mb-7'>
                <button onClick={() => setExpandedSizeChart(prev => !prev)} className="w-full h-fit flex flex-nowrap justify-between items-center py-2">
                    <span className='font-mono text-darkertrendygreen text-xl'>SIZE CHART</span>
                    <IconContext.Provider value={{className: 'w-4 h-4 text-darkertrendygreen'}}>
                        <IoIosArrowDown />
                    </IconContext.Provider>
                </button>
                <div className={ExpandedSizeChart ? "w-full max-h-[1000px] min-w-full transition-all border-b border-zinc-200 pb-5 fadeInAnimation" : "w-full min-w-full max-h-0 transition-all overflow-hidden border-b border-zinc-200"}>
                    <p className='font-medium my-3'>Always the perfect fit... we recommend you to choose your size as usual</p>
                    <img src={sizeChart} alt=""  />
                </div>
            </section>

            <p className='font-mono text-xl mb-1 text-darkertrendygreen'>PANTS</p>
            <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                {ProductInfo.PantsType.map((item,index) => <button onClick={() => setSelectedPantsType(index)} className={SelectedPantsType === index ? 'w-24 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-24 h-10 border border-zinc-300' }>{item}</button>)}
            </div>

            <p className='font-mono text-xl mb-1 mt-7 text-darkertrendygreen'>SIZE</p>
            <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                {ProductInfo.ProductSizes.map((item,index) => <button onClick={() => setSelectedProductSize(index)} className={SelectedProductSize === index ? 'w-14 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-14 h-10 border border-zinc-300' }>{item}</button>)}
            </div>
            <p className='font-mono text-xl mb-1 mt-7 text-darkertrendygreen'>LENGTH</p>
            <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                {ProductInfo.PantsLength.map((item,index) => <button onClick={() => setSelectedPantsLength(index)} className={SelectedPantsLength === index ? 'w-24 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-24 h-10 border border-zinc-300' }>{item}</button>)}
            </div>

            <button className='w-full text-center h-12 border border-darkertrendygreen text-darkertrendygreen font-medium mt-10'>Add to cart</button>
            <button className='w-full text-center h-12 bg-darkertrendygreen text-white font-medium mt-1'>Buy it now</button>

            <section className='w-full my-7'>
                <button onClick={() => setExpandedDescription(prev => !prev)} className="w-full h-fit flex flex-nowrap justify-between items-center py-2">
                    <span className='font-mono text-darkertrendygreen text-xl'>DESCRIPTION</span>
                    <IconContext.Provider value={{className: 'w-4 h-4 text-darkertrendygreen'}}>
                        <IoIosArrowDown />
                    </IconContext.Provider>
                </button>
                <div className={ExpandedDescription ? "w-full max-h-[1000px] min-w-full transition-all border-b border-zinc-200 pb-5 fadeInAnimation" : "w-full min-w-full max-h-0 transition-all overflow-hidden border-b border-zinc-200"}>
                    <p className='my-3 fadeInAnimation descriptionFont font-medium'>Always the perfect fit... we recommend you to choose your size as usual Always the perfect fit... we recommend you to choose your size as usual Always the perfect fit... we recommend you to choose your size as usual</p>
                </div>
            </section>

        </div>
    </main>
  )
}

export default ProductDetails