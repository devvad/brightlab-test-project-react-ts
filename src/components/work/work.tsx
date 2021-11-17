import one from "../../images/01.svg"
import two from "../../images/02.svg"
import three from "../../images/03.svg"
import work from "../../images/work-foto.png"
import "./work.css"

function Work() {
  return (
    <section className="work">
      <h2 className="work__title">How it works:</h2>
      <div className="work__points">
        <article className="work__point">
          <img className="work__image" src={one} alt="01" />
          <div className="work__text">
            <h2 className="work__point-title">Explore chefs in your neighbourhood</h2>
            <p className="work__paragraph">
              Get authentic, homemade food prepared locally, by approved chefs.
            </p>
          </div>
        </article>
        <article className="work__point">
          <img className="work__image" src={two} alt="02" />
          <div className="work__text">
            <h2 className="work__point-title">Place your order</h2>
            <p className="work__paragraph">
              Order in advance so your chef can buy fresh ingredients, and cook to order.
            </p>
          </div>
        </article>
        <article className="work__point">
          <img className="work__image" src={three} alt="03" />
          <div className="work__text">
            <h2 className="work__point-title">Get your delivery</h2>
            <p className="work__paragraph">
              Dishes arrive at your door refrigerated at a time that suits you. Just heat up and enjoy!
            </p>
          </div>
        </article>
      </div>
      <div className="work__foto">
        <img src={work} alt="Eat" /> 
      </div>
    </section>
  );
}

export default Work