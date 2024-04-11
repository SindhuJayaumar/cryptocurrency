import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <div className="coin-box-content">
      <li className="list-items">
        <img src={currencyLogo} alt="currency_logo" className="image" />
        <p className="head">{currencyName}</p>
        <p className="used">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </li>
    </div>
  )
}

export default CryptocurrencyItem
