import React from 'react'
import {
	Card
} from '@material-ui/core';
import './StatsLeft.css';
import results from './Data/IPL_dataset.json';
import {Pie} from 'react-chartjs-2';

function StatsLeft({ team }) {
	const chartData = {
		labels: ['Bat First', 'Field First'],
		datasets: [
			{
				label: 'Population',
				data: [],
				backgroundColor: [
					'rgba(255, 99, 132, 0.6)',
					'rgba(54, 162, 235, 0.6)',
				]
			}
		]
	}
	return (
		<Card className='statsLeft'>
			{
				results.filter(i => i.Team === team)
					.map(i => {
						chartData.datasets[0].data.push(i.Bat_First_Win)
						chartData.datasets[0].data.push(i.Field_First_Win)
						return (
							<div className='statsLeft'>
								<div className='statsLeft__1'> Total Matches Played: {i.Total_Matches} </div>
								<div className='statsLeft__2'> Overall Win Percentage: {Number(i.Win_Percentage).toFixed(2)}%</div>
								<div className='statsLeft__3'>
									<p> Matches Won When Bat First V/s Field First</p>
									<Pie  
										height= '250px'
										data={chartData}
										options={{}}
									/>
								</div>
							</div>
						)
					})

			}
		</Card>
	)
}

export default StatsLeft





