import work from "../../images/work-foto.png"
import "./work.css"

interface Points {
  image: string;
	alt: string;
  title: string;
	paragraph: string;
}

interface WorkProps {
	items: Points[];
}

function Work(props: WorkProps) {
  return (
    <section className="work">
      <h2 className="work__title">How it works:</h2>
      <div className="work__points">
			{ props.items.map((item) => {
					return(
						<article className="work__point">
							<img className="work__image" src={item.image} alt={item.alt} />
							<div className="work__text">
								<h2 className="work__point-title">{item.title}</h2>
								<p className="work__paragraph">{item.paragraph}</p>
							</div>
						</article>
					)
				})
			}
      </div>
      <div className="work__foto">
        <img src={work} alt="Eat" />
      </div>
    </section>
  );
}

export default Work