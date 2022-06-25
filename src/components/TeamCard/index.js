// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageURL} = teamDetails
  return (
    <li className="team-name-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
