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
                        <Detail onClick={() => { history.push("/detail")}}>
                        </Detail>
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

const Detail = styled.div`
    width: 0px;
    height: 0px;
    margin: 10px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    borderright: 20px solid none;
    border-left: 30px solid seagreen;
    cursor: pointer;
`;

export default Myweek;

