import Nav from '../Nav/Nav'
import { Div, Back } from "./Home.elements"

function Home() {
    return (
      <div className="Home">
        <Div>
          <Back>Mastordle</Back>
          <Nav />
        </Div> 
      </div>
    )
}

export default Home;
