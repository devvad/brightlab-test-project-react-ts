import { ReactElement } from "react";
import "./personal.css"

interface PersonalProps {
  title: string;
  columnFirst: ReactElement;
  columnSecond: ReactElement;
  columnFirstImg: string;
  columnSecondImg: string;
}

function Personal(props: PersonalProps) {
    return (
        <section className="personal">
          <h2 className="personal__title">{props.title}</h2>
          <div className="personal__columns">
              {props.columnFirst}
              <img className="personal__chef" src={props.columnFirstImg} alt="Chef man" />
          </div>
          <div className="personal__columns">
              <img className="personal__chef" src={props.columnSecondImg} alt="Chef woman" />
              {props.columnSecond}
          </div>
        </section>
    );
}

export default Personal;