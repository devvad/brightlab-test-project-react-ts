import "./main.css";

interface MainProps {
  title: string;
}

function Main(props: MainProps) {
    return (
      <section className="main">
        <h1 className="main__title">{props.title}</h1>
        <button type="submit" className="main__button">Sign up</button>
      </section>
    );
}

export default Main;