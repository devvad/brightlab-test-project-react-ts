import "./description.css"

interface DescriptionProps {
  image: string;
  title: string;
  paragraph: string;
  alt: string;
}

function Description(props: DescriptionProps) {
  return (
    <section className="description">
      <img className="description__image" src={props.image} alt={props.alt} />
      <div className="description__text">
        <h2 className="description__title">{props.title}</h2>
        <p className="description__paragraph">{props.paragraph}</p>
      </div>
    </section>
  );
}

export default Description