import { Link } from "react-router-dom";

function Home(props) {
    return (
      <div className="Home">
        <div className="make">
          <Link to={'/make'}>Make word</Link>
        </div>
        <div className="guess">
          <Link to={'/guess'}>Guess word</Link>  
        </div>
        {props.words}
      </div>
    )
}

export default Home;
