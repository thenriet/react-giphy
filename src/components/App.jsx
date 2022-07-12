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
  }

  search = async (query) => {
    //giphyJSfetch API call
    const gf = new GiphyFetch('nT31BoMYeWTGDOfQRTX0jtFyQc1CV175')
    const results = await gf.search(`${query}`,
    { sort: 'relevant', lang: 'eng', limit: 10, type: 'stickers' })
    console.log(results.data)
    this.setState({
      gifs: results.data
    })
    }

  render() {
    // const gifs = [
    //   { id: "kFCgYTogamVZiOIOYQ"},
    //   { id: "iI3hqm5ytUT36D2jHP" }
    // ];

    return(
      <div>
        <div className="left-scene">
        {/* the App will pass to its child Searchbar a props named "searchFunction" which contains the search function defined line 41 */}
          <Searchbar searchFunction={this.search}/>
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
