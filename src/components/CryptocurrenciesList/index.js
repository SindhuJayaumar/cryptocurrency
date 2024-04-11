import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptocurrenciesApiUrl: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getcoinData()
  }

  getcoinData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachdata => ({
      currencyName: eachdata.currency_name,
      usdValue: eachdata.usd_value,
      euroValue: eachdata.euro_value,
      id: eachdata.id,
      currencyLogo: eachdata.currency_logo,
    }))
    this.setState({cryptocurrenciesApiUrl: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesApiUrl, isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="img"
        />
        <div>
          <div className="coin-box-head">
            <p className="content-1">Coin Type</p>
            <p className="content-2">USD</p>
            <p className="content-3">EURO</p>
          </div>
        </div>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="coin-box-content">
            <ul className="coin-sub-box">
              {cryptocurrenciesApiUrl.map(eachCoin => (
                <CryptocurrencyItem
                  cryptocurrencyDetails={eachCoin}
                  key={eachCoin.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
