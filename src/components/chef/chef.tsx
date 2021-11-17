import "./chef.css"

interface CardProps {
	img: string;
	title: string;
	subtitle: string;
}

interface ChefProps {
	position: "left" | "right";
	name: string;
	title: string;
	cardFirst: CardProps;
	cardSecond: CardProps;
}

function Chef(props: ChefProps) {
	return (
		<div className="chef">
            <h3 className="chef__name">{props.name}</h3>
            <p className="chef__description">
                {props.title}
            </p>
            <div className="chef__dishes">
                <div className="chef__card">
                   <img className={`chef__image ${props.position === "left" ? "chef__image_little" : "chef__image_big"}`} src={props.cardFirst.img} alt="Chocolate pie" />
                    <p className="chef__title">{props.cardFirst.title}</p>
                    <p className="chef__paragraph">{props.cardFirst.subtitle}</p> 
                </div>
                <div className="chef__card">
                    <img className={`chef__image ${props.position === "right" ? "chef__image_little" : "chef__image_big"}`} src={props.cardSecond.img} alt="Cakes" />
                     <p className="chef__title">{props.cardSecond.title}</p>
                     <p className="chef__paragraph">{props.cardSecond.subtitle}</p> 
                 </div>
            </div>
        </div>
	);
}

export default Chef;