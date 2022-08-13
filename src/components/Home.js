import Nav from './Nav'

function Home(props) {
    return (
      <div className="Home">
        <Nav />
        {props.words}
      </div>
    )
}

export default Home;
