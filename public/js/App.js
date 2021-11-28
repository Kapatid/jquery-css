import About from './components/About.js'
import IronMan from './components/IronMan.js'
import AppDOM from './index.js'

/**
 * Initialize app
 * @param {AppDOM} AppDOM 
 */
const App = (AppDOM) => {
  AppDOM.render([IronMan, About], 'root')

  // For responsive image maps
  // Github: https://github.com/stowball/jQuery-rwdImageMaps
  $('img[usemap]').rwdImageMaps()
}

export default App