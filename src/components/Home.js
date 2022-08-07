import { Link } from "react-router-dom";

function Home(props) {
    return (
      <div className="Home">
          <Link to={'/make'}>Make word</Link>
          <Link to={'/guess'}>Guess word</Link>
          {props.words}
      </div>
    )
}

export default Home;
