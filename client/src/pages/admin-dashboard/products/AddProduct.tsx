import { useState, useRef } from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import preview from '../../../assets/preview.jpg'
import confident from '../../../assets/confident.jpg'
import medicalScrub from '../../../assets/medicalScrub.jpg'
import {IoIosArrowDown} from 'react-icons/io'
import sizeChart from '../../../assets/sizeChart.webp'
import { IconContext } from 'react-icons'


const AddProduct = () => {

    const ImageScrollerRef = useRef<HTMLDivElement>(null)


    const [ProductImages, setProductImages] = useState<string[]>([])
    const [MainImage, setMainImage] = useState<number>(0)
    const [ProductInfo, setProductInfo] = useState({name: '',ProductImages: [medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident],PantsType: ["JOGGER","JOGGER"],ProductSizes: ['XS','S','M','L','XL','XLL'],PantsLength: ['PETIT','LARGE'], Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi exercitationem ratione a architecto iure, quibusdam laboriosam sed voluptatem, iusto id obcaecati provident, est adipisci. Ipsa ea non dicta neque voluptatibus.'})
    const [PreviewMainImage, setPreviewMainImage] = useState(0)
    const [SelectedPantsType, setSelectedPantsType] = useState(0)
    const [SelectedProductSize, setSelectedProductSize] = useState(0)
    const [SelectedPantsLength, setSelectedPantsLength] = useState(0)
    const [ExpandedSizeChart, setExpandedSizeChart] = useState(false)
    const [ExpandedDescription, setExpandedDescription] = useState(false)

//     function handleChange(event){
//         setNameError(false)
//         setForm({
//             ...form,
//             [event.target.name]: event.target.value
//         })
//     }

   async  function handleImageInput(e: React.FormEvent){
        const target = e.target as HTMLInputElement
        const files: FileList | null = target?.files
        const reader = new FileReader();
        reader.onload = async function () {
            const pictureAlreadyAdded = ProductImages.some(item => item == reader.result)
            if(reader.result && !pictureAlreadyAdded)
                setProductImages([
                    ...ProductImages,
                    reader.result as string
                ])
            target.value = ''
        }
        if(files)
            reader.readAsDataURL(files[0])
    }

    const handleRemoveProductImage = (e: React.MouseEvent,index: number): void => {
        e.stopPropagation()
        setMainImage(0)
        const temp = ProductImages.filter((item,ind) => {
            return ind != index
        })
        setProductImages(temp)
    }

    const handleSetMainImage = (index: number): void => {
        setMainImage(index)
    }

    const handleChangeMainImage = (index: number) => {
        setMainImage(index)

        ImageScrollerRef.current?.scroll(0,(index -1)  * 188 + 40)

    }


    return (
        <main className="w-full h-full overflow-auto">
            <form className="w-full h-fit overflow-auto py-6 px-3 flex flex-nowrap justify-center items-start gap-8 mb-20">
                <div className="w-1/3 h-fit flex flex-nowrap justify-center items-start gap-5">
                    <section>
                        {ProductImages.map((item,index) => 
                        <div key={`pic${index}`} onClick={() => handleSetMainImage(index)} className={index == MainImage ? "relative w-fit h-fit group before:content-[''] before:inset-0 before:border-[3px] before:border-trendygreen before:absolute" : "relative w-fit h-fit group rounded"}>
                            
                            <img src={item} className="w-28 h-auto mb-5 rounded" />
                            <button type="button" onClick={e => handleRemoveProductImage(e,index)} className="w-4 h-4 absolute -top-1 -right-1 bg-red-500 rounded-full items-center pb-0.5 justify-center font-medium text-xs font-mono text-white hidden group-hover:flex">
                                x
                            </button>

                        </div>
                        )}
                        <input type="file" name="image" className="relative flex py-5 overflow-hidden w-28 h-[165px] before:content-['+'] before:absolute before:inset-0 before:z-10 before:bg-verylighttrendygreen before:border-[1px] before:border-[#5abdbf] before:rounded before:flex before:items-center before:justify-center before:text-[#5abdbf] before:text-2xl before:hover:cursor-pointer" onChange={handleImageInput} />
                    </section>
                    <div className="flex-1">
                    {ProductImages.length > 0 ? 
                    <Zoom>
                        <img src={ProductImages[MainImage]} alt="product" className='w-full h-auto' />
                    </Zoom> :
                    <img src={preview} alt="product" className='w-full h-auto' />
                        }
                    </div>
                </div>
                
                <div className="w-1/3 h-fit grid place-items-start">
                    <div className="w-full h-fit flex flex-nowrap justify-between items-center">
                        <h1 className="text-2xl font-medium text-darkertrendygreen">Product's informations</h1>
                        <button type="button" className="w-fit h-fit px-2 py-0.5 border border-trendygreen text-sm font-medium text-trendygreen rounded-xl hover:text-white hover:bg-trendygreen">Preview</button>
                    </div>
                    <label className="w-full h-fit font-medium text-black grid mt-5">
                        Name
                        <input type="text" value="" className="w-full border h-9 outline-none" />
                    </label>

                    <label className="w-full h-fit font-medium text-black grid mt-5">
                        Price
                        <input type="number" value="" className="w-full border h-9 outline-none" />
                    </label>

                    <label className="w-full h-fit font-medium text-black grid mt-5">
                        Price after sale
                        <input type="number" value="" className="w-full border h-9 outline-none" />
                    </label>

                    <label className="font-medium flex items-center gap-1 text-sm">
                        <input type="checkbox" />
                        Item on sale
                    </label>

                    <label className="w-full h-fit font-medium text-black grid mt-5">
                        Description
                        <textarea value="" cols={50} rows={4} className="w-full border h-40 outline-none"></textarea>
                    </label>

                    <fieldset name="category" className="border border-trendygreen w-full px-2 py-3 mt-5">

                        <legend className=" font-medium px-1">Category</legend>


                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            Men
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            Women
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            Accessories
                        </label>

                    </fieldset>
                    
                    
                    <fieldset name="subcategory" className="border border-trendygreen w-full px-2 py-3 mt-5">

                        <legend className=" font-medium px-1">Sub-category</legend>


                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            Classic
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            Fresh
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            Fall
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            Summer
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" value="" className="w-fit h-fit" />
                            White Coat
                        </label>

                    </fieldset>
                    
                    <button type="submit" className="w-fit h-fit mt-8 bg-darkertrendygreen px-4 py-2.5 text-white font-medium rounded mx-auto">Create product</button>

                </div>
                
            </form>

            <div className="h-fit w-full py-20 flex flex-nowrap justify-center gap-10 items-start">
                <div className='w-4/12 h-fit flex flex-nowrap justify-between items-start gap-4 overflow-hidden'>

                    <div ref={ImageScrollerRef} className='w-28 grid place-content-start gap-5 overflow-auto scroll-smooth removeScrollbar'>
                            {ProductInfo.ProductImages.map((element,index) => <button className={index === MainImage ? "relative before:content-[''] before:inset-0 before:border-2 before:border-black before:absolute" : ""} onClick={() => handleChangeMainImage(index)}><img src={element} alt="product" className='w-full h-auto' /></button>)}
                    </div>
                    <div className='flex-1'>

                        <Zoom>
                            <img src={ProductInfo.ProductImages[MainImage]} alt="product" className='w-full h-auto' />
                        </Zoom>

                    </div>
                </div>

                <div className='w-4/12 h-fit grid place-items-start'>

                    <h1 className='text-3xl font-semibold mb-5 text-darkertrendygreen'>Something</h1>

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

            </div>

        </main>
        
    )
}

export default AddProduct
