import React from 'react'
import {
	Card
} from '@material-ui/core';
import './StatsMid.css';
import results from './Data/IPL_dataset.json';

function StatsMid({team}) {
    return (
        <Card className='statsMid'>
            {
                results.filter(i => i.Team === team)
                .map(i => {
                    return (
                        <div>
                            <div className='statsMid__1'> Toss Winning Chance: {i.Toss_Win}% </div>
                            <div className='statsMid__2'> Season Active: {i.Seaon_Active} </div>
                            <div className='statsMid__3'> Home Ground: {i.Favourable_Venue} </div>
                            <div className='statsMid__4'> MVP: {i.MVP} </div>
                            <div className='statsMid__5'> Most Played Against: {i.Most_Played} </div>
                            <div className='statsMid__6'> Most First Umpire: {i.Max_Umpire1} </div>
                            <div className='statsMid__7'> Most Second Umpire: {i.Max_Umpire2} </div>
                            <div className='statsMid__warn'> ***All the Data present in this webpage are from 2008-2017 and may not be accurate now.</div>
                            
                        </div>
                    )  
                })

            }
        </Card>
    )
}

export default StatsMid





