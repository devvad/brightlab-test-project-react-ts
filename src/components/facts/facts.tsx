import "./facts.css"

interface FactsProps {
  image: string;
  figcaption: string;
  alt: string;
}

interface FactProps {
  factFirst: FactsProps;
  factSecond: FactsProps;
}

function Facts(props: FactsProps) {
  return (
    <section className="facts">
      <div className="facts__fact">
        <img src={props.image} alt={props.alt} />
        <h2 className="facts__figcaption">{props.figcaption}</h2>
      </div>
    </section>
  );
}

export default Facts