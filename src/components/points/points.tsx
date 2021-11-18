import points from "../../images/eat.png"
import "./points.css"

interface Points {
  image: string;
	alt: string;
  title: string;
	paragraph: string;
}

interface PointsProps {
	items: Points[];
}

function Work(props: PointsProps) {
  return (
    <section className="points">
      <h2 className="points__title">Why try homecooks?</h2>
      <div className="points__points">
			{ props.items.map((item) => {
					return(
						<article className="points__point">
							<img className="points__image" src={item.image} alt={item.alt} />
							<div className="points__text">
								<h2 className="points__point-title">{item.title}</h2>
								<p className="points__paragraph">{item.paragraph}</p>
							</div>
						</article>
					)
				})
			}
      </div>
      <div className="points__foto">
        <img src={points} alt="Eat" />
      </div>
    </section>
  );
}

export default Work