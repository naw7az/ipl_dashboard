// just type 'rfce'(react functional component export) and press enter

import React from 'react';
import './TeamLogo.css';
import {
	Card
} from '@material-ui/core';


function TeamLogo({image, active, ...props}) {
    return (
        <Card onClick={props.onClick} className={`teamLogo ${active && 'teamLogo--selected'}`}>
            <img src={image} alt="team logo" className="teamLogo__image"/>
        </Card>
    )
}

export default TeamLogo

