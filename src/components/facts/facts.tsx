import one from "../../images/5.svg"
import two from "../../images/50.000.svg"
import three from "../../images/100.svg"
import four from "../../images/1000s.svg"
import "./facts.css"

function Facts() {
  return (
    <section className="facts">
      <div className="facts__fact">
        <img src={one} alt="4.8/5" />
        <h2 className="facts__figcaption">Average happiness rating from thousands of customers</h2>
      </div>
      <div className="facts__fact"> 
        <img src={two} alt="50.000+" />
        <h2 className="facts__figcaption">homemade meals sold by certified, real chefs to date</h2>
      </div>
      <div className="facts__fact">
        <img src={three} alt="100%" />
        <h2 className="facts__figcaption">Of our chefs are food safety certified</h2>
      </div>
      <div className="facts__fact">
        <img src={four} alt="1000s" />
        <h2 className="facts__figcaption">Of authentic, homemade dishes to choose from</h2>
      </div>
    </section>
  );
}

export default Facts