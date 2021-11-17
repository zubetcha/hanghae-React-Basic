import React from 'react';
import styled from 'styled-components';

const Circle = (props) => {

    const [count, setCount] = React.useState(5);

    const circle_count = Array.from({ length: count }, (el, i) => i);
    console.log(circle_count);

    let random = Math.floor(Math.random() * 5)

    let sum = 0;

    return (
        <Circlewrap>
            {circle_count.map((num, index) => {
                if (index <= random) {
                    sum += 1;
                    return (
                        <div>
                            <Click key={sum}></Click>
                        </div>
                    )
                }
            })}
        </Circlewrap>
    )
}


// 0~4까지 랜덤 정수 Math.floor(Math.random()*5)
// if 

const Circlewrap = styled.div`
    width: 300px;
    display: flex;
    margin: auto;
`;

const Click = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    margin: 12px 10px;
    border: 5px solid #8FBC8F;
    border-radius: 50%;
    background-color: white;
`;

const Nonclick = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    margin: 12px 10px;
    border: 5px solid lightgrey;
    border-radius: 50%;
    background-color: white;
`;

export default Circle;