import { useState } from "react"

interface Review {
    title: string;
    body: string;
}

const ReviewProductSection = () => {

    const handleReviewFormChange = ( e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, setIsActive: React.Dispatch<React.SetStateAction<boolean>> ) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement
        setReviewForm({
            ...ReviewForm,
            [target.name]: target.value
        });
      
        if (target.value !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    }

    const [ReviewForm, setReviewForm] = useState<Review>({ title: '', body: '' })
    const [isTitleActive, setisTitleActive] = useState<boolean>(false)
    const [isBodyActive, setisBodyActive] = useState<boolean>(false)

  return (
    <form className="w-full h-fit my-32 grid">
        <h1 className="w-fit h-fit poppinsFont mx-auto text-xl font-bold">Leave a review</h1>
        <h2 className="w-fit h-fit poppinsFont mx-auto font-medium">Tell people what you think</h2>
        <div className="w-1/2 h-fit mx-auto grid mt-5 bg-zinc-50 px-10 py-5">
            <div className="my-3">Rate it: *****</div>


            <div className="flex flex-col floatingLabelInput w-full relative mt-5 mb-3">
                <textarea name="body" id="body" value={ReviewForm.body} onChange={e => handleReviewFormChange(e, setisBodyActive)} cols={50} maxLength={350} rows={4} className="w-full border h-32 outline-none"></textarea>
                <label htmlFor="body" className={ isBodyActive ? "Active" : ""}>Review</label>
            </div>
            
            <div className="flex flex-col floatingLabel w-full relative mb-5">
                <input type="text" name="title" id="title" value={ReviewForm.title} onChange={e => handleReviewFormChange(e, setisTitleActive)} />
                <label htmlFor="title" className={ isTitleActive ? "Active" : ""}>Title &#40;optional&#41;</label>
            </div>

            <p className="poppinsFont font-bold">How should we display your avatar ?</p>
            <label className="flex gap-1 mt-0.5">
            <input type="radio" name="gender" />
            Male
            </label>
            <label className="flex gap-1 mt-0.5">
            <input type="radio" name="gender" />
            Female
            </label>
            <button type="submit" className="w-fit h-fit mx-auto bg-trendygreen px-5 py-2 text-white font-medium rounded shadow-modern shadow-trendygreen/20 mt-5">Submit</button>
        </div>
    </form>
  )
}

export default ReviewProductSection