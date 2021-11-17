import image from "./description-foto.png"
import "./description.css"

function Description() {
  return (
    <section className="description">
    <img className="description__image" src={image} alt="Chicken leg with peas" />
    <div className="description__text">
      <h2 className="description__title">What is homecooks?</h2>
      <p className="description__paragraph">We believe in providing the chefs in our community - individuals who have always dreamt of building their own food business or sharing their recipes with those around them - the opportunity
        to make an income by doing what they love! We also believe every person should have access to authentic, homemade food at an affordable price.
      </p>
    </div>
  </section>
  );
}

export default Description