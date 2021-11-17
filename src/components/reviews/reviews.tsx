import "./reviews.css"

interface Review {
  image: string;
	alt: string;
  name: string;
  text: string;
}

interface ReviewsProps {
	items: Review[];
}

function Reviews(props: ReviewsProps) {
  return (
    <section className="reviews">
			<h2 className="reviews__title">What our customers say:</h2>
			<div className="reviews__container">
				{ props.items.map((item) => {
					return(
					<div className="reviews__card">
						<div className="reviews__content">
							<img src={item.image} alt={item.alt} />
							<p className="reviews__name">{item.name}</p>
						</div>
						<p className="reviews__text">{item.text}</p>
					</div>
					)
					})
				}
      </div>
		</section>
	);
}

export default Reviews