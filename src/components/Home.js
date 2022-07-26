import React from "react"

function Home() {
  const [page, setPage] = React.useState('0');
  if(page == '0') {
    return (
      <div className="Home">
          <button >Make word</button>
          <button >Guess word</button>
      </div>
    );}
  else if(page == '1') {
    return (
      <div className="Home">
        <button onClick={setPage('0')}>Go Back</button>
      </div>
    );}
  else if(page == '2') {
    return (
      <div className="Home">
        <button onClick={setPage('0')}>Go Back</button>
      </div>
    );}
}

export default Home;
