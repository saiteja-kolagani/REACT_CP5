// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  btnFuntion = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    let contentContainer
    let heading
    let btnText
    if (isDarkMode === true) {
      contentContainer = 'content-container-dark'
      heading = 'heading-dark'
      btnText = 'Light Mode'
    } else {
      contentContainer = 'content-container-light'
      heading = 'heading-light'
      btnText = 'Dark Mode'
    }

    return (
      <div className="bg-container">
        <div className={contentContainer}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.btnFuntion}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
