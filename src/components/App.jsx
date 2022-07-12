import '../assets/application.scss';
import React, { Component }  from 'react';
import Searchbar from './search-bar';
import Gif from './gif';
import GifList from './gif_list';
import { GiphyFetch } from '@giphy/js-fetch-api'
// import giphy from 'giphy';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "kFCgYTogamVZiOIOYQ"
    }

    this.search("homer thinking");
  }

  search = async (query) => {
    //giphy API call
    const gf = new GiphyFetch('nT31BoMYeWTGDOfQRTX0jtFyQc1CV175')
    const  { data: gifs } = await gf.search(`${query}`, { sort: 'relevant', lang: 'eng', limit: 10, type: 'stickers' })
    console.log({ data: gifs })
    }

  render() {
    // const gifs = [
    //   { id: "kFCgYTogamVZiOIOYQ"},
    //   { id: "iI3hqm5ytUT36D2jHP" }
    // ];

    return(
      <div>
        <div className="left-scene">
          <Searchbar />
          <div className="selected-gif">
          <Gif id ={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    )
  }
}

export default App;
