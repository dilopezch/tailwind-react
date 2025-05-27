import { RatingCard } from "./rating-card"

const ratings =[
  'Rated 5 Stars in Reviews',
  'Rated 5 Stars in Report Guru',
  'Rated 5 Stars in BestTech'
]


export const RatingContainer = () => {
  return (
    <section>
      {
        ratings.map(rating => {
          return(
            <RatingCard key={rating} text={rating}/>
          )
        })
      }
    </section>
  )
}
