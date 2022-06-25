// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestTeamMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestTeamMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="head">Latest Matches</h1>
      <div className="match-latest-details">
        <div className="latest-match-logo-container">
          <div className="latest-match-details-container">
            <p className="team-name-competing">{competingTeam}</p>
            <p className="team-match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-team-logo"
          />
        </div>
        <hr className="hr-line" />
        <div className="latest-match-details-container-2">
          <p className="latest-match-first-innings-label">First Innings</p>
          <p className="latest-match-first-innings-label">{firstInnings}</p>
          <p className="latest-match-first-innings-label">Second Innings</p>
          <p className="latest-match-first-innings-label">{secondInnings}</p>
          <p className="latest-match-first-innings-label">Man Of The Match</p>
          <p className="latest-match-first-innings-label">{manOfTheMatch}</p>
          <p className="latest-match-first-innings-label">Umpires</p>
          <p className="latest-match-first-innings-label">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
