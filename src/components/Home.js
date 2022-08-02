import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="Home">
          <Link to={'/make'}>Make word</Link>
          <Link to={'/guess'}>Guess word</Link>
      </div>
    )
}

export default Home;
