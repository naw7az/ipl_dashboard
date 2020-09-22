import React from 'react'
import {
	Card
} from '@material-ui/core';
import './StatsRight.css';
import {Bar} from 'react-chartjs-2';
import results from './Data/IPL_dataset.json';


function StatsRight({team}) {
    const chartData = {
		labels: ["2008", "2009" , "2010", '2011', "2012", '2013', "2014", '2015', "2016", '2017'],
		datasets: [
			{
				label: null,
				data: [],
				backgroundColor: [
					'rgba(255, 99, 132, 0.6)',
					'rgba(54, 162, 235, 0.6)',
					'rgba(44, 12, 25, 0.6)',
					'rgba(96, 152, 200, 0.6)',
					'rgba(0, 152, 25, 0.6)',
					'rgba(255, 99, 132, 0.6)',
					'rgba(54, 162, 235, 0.6)',
					'rgba(44, 12, 25, 0.6)',
					'rgba(96, 152, 200, 0.6)',
					'rgba(0, 152, 25, 0.6)'
				]
			}
		]
	}
    return (
        <Card className='statsRight'>
            {
                results.filter(i => i.Team === team)
                .map(i => {
							chartData.datasets[0].data.push(i.Win_Perc2008)
							chartData.datasets[0].data.push(i.Win_Perc2009)
							chartData.datasets[0].data.push(i.Win_Perc2010)
							chartData.datasets[0].data.push(i.Win_Perc2011)
							chartData.datasets[0].data.push(i.Win_Perc2012)
							chartData.datasets[0].data.push(i.Win_Perc2013)
							chartData.datasets[0].data.push(i.Win_Perc2014)
							chartData.datasets[0].data.push(i.Win_Perc2015)
							chartData.datasets[0].data.push(i.Win_Perc2016)
							chartData.datasets[0].data.push(i.Win_Perc2017)
							return(
								<div>
									<h6> Win Percentage for each Season</h6>
									<p className= 'statsRight__warn'> **0% shows that the team did not play that particular season </p>
									<Bar className='statsRight__1'
										height= '145vh'
										data={chartData}
										options={{
											legend: {
												display: false
											}
										}}
									/>
								</div>
							)
						})
            }
        </Card>
    )
}

export default StatsRight





