// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const url = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {isLoading: true, teamData: {}}

  componentDidMount = () => {
    this.getTeamData()
  }

  formatData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${url}${id}`)
    const data = await response.json()
    const modifiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.formatData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachRecent =>
        this.formatData(eachRecent),
      ),
    }
    this.setState({teamData: modifiedData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={30} />
    </div>
  )

  getTeamName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderMatchCard = () => {
    const {teamData} = this.state
    const {recentMatches} = teamData
    return (
      <ul className="recent-matches-list">
        {recentMatches.map(recentMatch => (
          <MatchCard matchDetails={recentMatch} key={recentMatch.id} />
        ))}
      </ul>
    )
  }

  renderTeamDetails = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamData
    return (
      <div className="team-details-container">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <LatestMatch latestTeamMatchDetails={latestMatchDetails} />
        {this.renderMatchCard()}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const className = `team-match-details-container${this.getTeamName()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamDetails()}
      </div>
    )
  }
}

export default TeamMatches
