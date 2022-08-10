import ProductDetails from "../../components/ProductDetails"
import ProductSuggestions from "../../components/ProductSuggestions"
import ProductReviewsSection from "../../components/ProductReviewsSection"
import ReviewProductSection from "../../components/ReviewProductSection"


const SingleProduct = () => {
  return (
    <main>
        <ProductDetails />
        <ReviewProductSection />
        <ProductReviewsSection />
        <ProductSuggestions />
    </main>
  )
}

export default SingleProduct