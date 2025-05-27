import StarImg from '../assets/images/icon-star.svg';

export const RatingCard = ({text}) => {
  return(
    <section>
      <div>
        <img src={StarImg} alt="" />
        <img src={StarImg} alt="" />
        <img src={StarImg} alt="" />
        <img src={StarImg} alt="" />
        <img src={StarImg} alt="" />
      </div>
      <p>{text}</p>
    </section>
  )
}