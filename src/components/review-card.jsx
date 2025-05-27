export const ReviewCard = ({name, imgUrl, buyerType, review}) => {
  return (
    <section>
      <div>
        <img src={imgUrl} alt="" />
        <div>
          <p>{name}</p>
          <p>{buyerType}</p>
        </div>
      </div>
      <p>{review}</p>
    </section>
  )
}

