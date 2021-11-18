import Header from "./components/header/header"
import Main from "./components/main/main"
import Personal from "./components/personal/personal"
import Chef from "./components/chef/chef";
import Work from "./components/work/work";
import Description from "./components/description/description";
import Facts from "./components/facts/facts";
import Reviews from "./components/reviews/reviews";
import Footer from "./components/footer/footer";

import chefMan from "./images/chef-man.png"
import chefWoman from "./images/chef-woman.png"
import food1 from "./images/fono-little.png"
import food2 from "./images/foto-big.png"
import description from "./images/description-foto.png"
import meat from "./images/meat.png"
import fact1 from "./images/5.svg"
import fact2 from "./images/50.000.svg"
import fact3 from "./images/100.svg"
import fact4 from "./images/1000s.svg"
import roz from "./images/Roz.png"
import gina from "./images/Gina.png"
import nina from "./images/Nina.png"
import one from "./images/01.svg"
import two from "./images/02.svg"
import three from "./images/03.svg"

function App() {
  return (
    <>
      <Header
        menu={[
          { title: "Go to menus" },
          { title: "Become a HomeCook" }
        ]}
      />

      <Main title="Authentic, Local, Homemade food. Delivered" />

      <Description
        title="What is homecooks?"
        image = {description}
        alt="Chicken leg with peas"
        paragraph="We believe in providing the chefs in our community - individuals who have always dreamt of building their own food business or sharing their recipes with those around them - the opportunity
        to make an income by doing what they love! We also believe every person should have access to authentic, homemade food at an affordable price."
      />

      <Work items={[
				{
        	image: one,
        	alt: "one",
					title: "Explore chefs in your neighbourhood",
					paragraph: "Get authentic, homemade food prepared locally, by approved chefs."
				},
				{
        	image: two,
        	alt: "two",
					title: "Place your order",
					paragraph: "Order in advance so your chef can buy fresh ingredients, and cook to order."
				},
				{
        	image: three,
        	alt: "three",
					title: "Get your delivery",
					paragraph: "Dishes arrive at your door refrigerated at a time that suits you. Just heat up and enjoy!"
				},
			]}
			/>

      <Personal
        title="Meet the chefs:"
        columnFirst={
          <Chef
            name="John"
            title="After 7 years working as a professional chef - I know now that cooking is my real, true passion! I love trying new recipes, improving my skills and sharing my food with new people. For me, cooking is a pinch of magic, a big spoon of love, topped with art - and of course fresh ingredients!"
            cardFirst={{
              img: food1,
              title: "Name food",
              subtitle: "short description (3-5 words)"
            }}
            cardSecond={{
              img: food2,
              title: "Food",
              subtitle: "very tasty food"
            }}
            position="left"
          />
        }
        columnSecond={
          <Chef
            name="Kate"
            title="My name is Kate and I am a North Londoner born and bred! I have had an appetite for cooking since I was 6 years old - it all started with my Grandma teaching me the basics, cooking from scratch and using lots of fresh ingredients.I love big flavours and traditional methods of cookery - I believe that food made with love tastes so much better!"
            cardFirst={{
              img: food2,
              title: "Name food",
              subtitle: "short description (3-5 words)"
            }}
            cardSecond={{
              img: food1,
              title: "Food",
              subtitle: "very tasty food"
            }}
            position="right"
          />
        }
        columnFirstImg={chefMan}
        columnSecondImg={chefWoman}
      />

      <Facts items={[
				{
					figcaption: "Average happiness rating from thousands of customers",
        	image: fact1,
        	alt: "4.8/5"
				},
				{
					figcaption: "homemade meals sold by certified, real chefs to date",
        	image: fact2,
        	alt: "50.000+"
				},
				{
					figcaption: "Of our chefs are food safety certified",
        	image: fact3,
        	alt: "100%"
				},
				{
					figcaption: "Of authentic, homemade dishes to choose from",
        	image: fact4,
        	alt: "1000s"
				},
			]}
      />

      <Reviews items={[
				{
        	image: roz,
        	alt: "Roz",
					name: "Roz",
					text: "I love the diversity of food - cooked in small batches by fantastic, local chefs and then delivered! The food is very different to traditional takeaways and always feels freshly cooked with pride and love."
				},
				{
        	image: gina,
        	alt: "Gina",
					name: "Gina",
					text: "The food is amazing, everyone is incredibly kind - and there is a great variety of food, all so skilfully prepared! It feels like a homely community!"
				},
				{
        	image: nina,
        	alt: "Nina",
					name: "Nina",
					text: "It’s great being the opportunity to try food that I would likely not encounter unless I was abroad! Many dishes take me back to my childhood memories - and I love supporting local chefs."
				},
			]}
			/>

      <Description
        title="What is homecooks?"
        image = {meat}
        alt="Meat"
        paragraph="We take food safety extremely seriously and are committed to helping ensure that your food will
        always be safe to eat. All HomeCooks applicants are required to provide food safety documentation, as well as registration with their local council. If you’re unsure of the procedure - our team will be more than happy to provide you with support throughout the process."
      />

      <Footer />
    </>
  );
}

export default App;