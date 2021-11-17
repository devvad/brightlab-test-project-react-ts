import roz from "../../images/Roz.png"
import gina from "../../images/Gina.png"
import nina from "../../images/Nina.png"
import "./reviews.css"

function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews__title">What our customers say:</h2>
      <div className="reviews__container">
        <div className="reviews__card">
          <div className="reviews__content">
            <img src={roz} alt="Roz" />
            <p className="reviews__name">Roz F</p>
          </div>
          <p className="reviews__text">I love the diversity of food - cooked in small batches by fantastic, local chefs and then delivered! The food is very different to traditional takeaways and always feels freshly cooked with pride and love.</p>
        </div>
        <div className="reviews__card">
          <div className="reviews__content">
            <img src={gina} alt="Gina"/>
            <p className="reviews__name">Gina J</p>
          </div>
          <p className="reviews__text">The food is amazing, everyone is incredibly kind - and there is a great variety of food, all so skilfully prepared! It feels like a homely community!</p>
        </div>
        <div className="reviews__card">
          <div className="reviews__content">
            <img src={nina} alt="Nina" />
            <p className="reviews__name">Nina H</p>
          </div>
          <p className="reviews__text">It’s great being the opportunity to try food that I would likely not encounter unless I was abroad! Many dishes take me back to my childhood memories - and I love supporting local chefs</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews