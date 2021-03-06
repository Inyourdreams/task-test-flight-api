import React from 'react'
import './Card.css'

const Card = ({
  dTime,
  aTime,
  cityFrom,
  cityTo,
  price,
  travelDuration,
  returnTravelDuration,
  returnCityFrom,
  returnCityTo,
  returnPrice,
  returnDTime,
  returnATime,
}) => {
  return (
    <div className="card bkp-itinerary">
      <div className="card-body it-card-body">
        <table className="leg-table">
          <colgroup>
            <col width="30" />
            <col width="50" />
            <col width="35" />
            <col width="50" />
          </colgroup>
          <tbody>
            <tr>
              <td className="leg-logo-td" rowSpan={2}>
                <img
                  className="leg-airline-logo"
                  src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
                  alt="E"
                />
              </td>
              <td>{dTime}</td>
              <td className="leg-arrow" rowSpan={2}>
                &nbsp;&#10140;&nbsp;
              </td>
              <td>{aTime}</td>
              <td className="leg-last-col leg-duration">{travelDuration}</td>
            </tr>
            <tr>
              <td className="leg-place-code">{cityFrom}</td>
              <td className="leg-place-code">{cityTo}</td>
              <td className="col it-price-col">{` €${price}`}</td>
            </tr>
            <tr>
              <td className="leg-logo-td" rowSpan={2}>
                <img
                  className="leg-airline-logo"
                  src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
                  alt="E"
                />
              </td>
              <td>{returnDTime}</td>
              <td className="leg-arrow" rowSpan={2}>
                &nbsp;&#10140;&nbsp;
              </td>
              <td>{returnATime}</td>
              <td className="leg-last-col leg-duration">
                {returnTravelDuration}
              </td>
            </tr>
            <tr>
              <td className="leg-place-code">{returnCityFrom}</td>
              <td className="leg-place-code">{returnCityTo}</td>
              <td className="col it-price-col">{` €${returnPrice}`}</td>
            </tr>
          </tbody>
        </table>
        <div className="container">
          <div className="row">
            {/* <div className="col it-price-col">{` €${returnPrice}`}</div>
          <div className="col it-price-col">{` €${price}`}</div> */}
            <div className="col it-select-col">
              <button type="button" className="btn btn-sm it-select-btn">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
