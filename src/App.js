import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Myweek from './Myweek';
import Detail from './Detail';
import Circle from './Circle';
import NotFound from './NotFound';
import styled from 'styled-components';

function App() {

    const [day, setDay] = React.useState(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']);

    const [dayday, setDayday] = React.useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);

    return (
        <div className="App">
            <Container>
                <Wrap>
                    <Switch>
                        <Route exact path="/" render={(props) => (<Myweek day={day} />)} />
                        <Route path="/detail/:days" render={(props) => (<Detail dayday={dayday} />)} />
                        <Route component={NotFound} />
                    </Switch>
                </Wrap>
            </Container>
        </div>
    );
}

const Container = styled.div`
    width: 500px;
    height: 700px;
    border: 1px solid lightgrey;
    margin: 80px auto;
    border-radius: 20px;

`;

const Wrap = styled.div`
    width: 400px;
    margin: 100px auto;
`;

export default App;
