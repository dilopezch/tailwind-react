import { Hero } from "./components/hero"
import { RatingContainer } from "./components/rating-container"
import { ReviewContainer } from "./components/review-container"

function App() {
  return (
    <main className="font-League Spartan px-6 py-20">
      <Hero />
      <RatingContainer />
      <ReviewContainer />
    </main>
  )
}

export default App
