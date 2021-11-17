import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// constß

const Detail = (props) => {
    const history = useHistory();
    const daydays = props.dayday;
    console.log(props);

    const [count, setCount] = React.useState(5);
    const circle_count = Array.from({ length: count }, (el, i) => i);
    console.log(circle_count);

    return (
        <div>
            {daydays.map((dayday, index) => {
                return (
                    <div>
                        <h2>
                            How was your {dayday}
                        </h2>
                        <Circlewrap>
                            {circle_count.map((num, index) => {
                                return (
                                    <Nonclick key={index}>
                                    </Nonclick>
                                )
                            })}
                        </Circlewrap>
                        <Complete
                            onClick={() => { history.push("/") }}>
                            Complete
                        </Complete>
                    </div>
                )
            })}
        </div>
    )
}

const Circlewrap = styled.div`
    width: 300px;
    display: flex;
    margin: auto;
`;

const Nonclick = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    margin: 22px 10px;
    border: 5px solid lightgrey;
    border-radius: 50%;
    background-color: white;
`;

const Complete = styled.button`
    outline: 0;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: seagreen;
    color: whitesmoke;

    width: 120px;
    height: 40px;
    margin: 20px auto;

    cursor: pointer;
`;



export default Detail;