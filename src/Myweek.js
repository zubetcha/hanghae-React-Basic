import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Circle from './Circle';


const Myweek = (props) => {

    const history = useHistory();

    const my_days = props.day;
    console.log(props);

    return (
        <div>
            <Title>How you feel today?</Title>
            {my_days.map((day, index) => {
                console.log(day);
                return (
                    <div key={index} style={{display: "flex"}}>
                        <Day>{day}</Day>
                        <Circle />
                        <div 
                        onClick={() => { history.push("/detail/:days")}}
                        style={{
                            width: "0px",
                            height: "0px",
                            margin: "10px",
                            borderTop: "20px solid transparent",
                            borderBottom: "20px solid transparent",
                            borderRight: "20px solid none",
                            borderLeft: "30px solid seagreen",
                            cursor: "pointer",
                        }}></div>
                    </div>
                );
            })}
        </div>
    );
};

const Title = styled.h2`
    margin: 30px auto;
`;

const Day = styled.div`
    width: 40px;
    font: 14px bold;
    vertical-align: middle;
    line-height: 64px;
    margin-left: 10px;
`;

export default Myweek;

