import "./facts.css"

interface Fact {
  image: string;
  figcaption: string;
  alt: string;
}

interface FactsProps {
	items: Fact[];
}

function Facts(props: FactsProps) {
  return (
    <section className="facts">
      { props.items.map((item) => {
					return(
						<div className="facts__fact">
							<img src={item.image} alt={item.alt} />
							<h2 className="facts__figcaption">{item.figcaption}</h2>
						</div>
					)
				})
			}
    </section>
  );
}

export default Facts