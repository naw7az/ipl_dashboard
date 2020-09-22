import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import images from './images';
import TeamLogo from './TeamLogo';
import './App.css';
import StatsLeft from './StatsLeft';
import StatsMid from './StatsMid';
import StatsRight from './StatsRight';

function App() {

	const [team, setTeam] = useState("Chennai Super Kings");

	return (
		<div className="app">
			<div className="app__top">
				{/* Header */}
				<div className="app__header">
					<h1> Select Your Team </h1>
				</div>
				{/* Team Logo */}
				<Card className="app__stats">
					{
						images.map(i => {
							return (
									<TeamLogo
										isactive
										active={team === i.team}
										onClick={() => setTeam(i.team)}
										image={i.src}
									/>
								)
							})
						}
				</Card>
			</div>
			{/* Team Name */}
			<div className='app__mid'>
				<h2>{team} Stats</h2>
			</div>
			{/* Stats */}
			<div className='app__down'>
				<StatsLeft team = {team} />
				<StatsMid team = {team} />
				<StatsRight team = {team} />
			</div>
		</div>
	);
}

export default App;
