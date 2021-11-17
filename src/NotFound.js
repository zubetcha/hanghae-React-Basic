import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = (props) => {

    const history = useHistory();

    return (
        <div>
            <h2>주소가 올바르지 않습니다.</h2>
            <button
                onClick={() => { history.push("/") }}
                style={{
                    outline: "0",
                    border: "1px solid transparent",
                    borderRadius: "20px",
                    backgroundColor: "seagreen",
                    color: "whitesmoke",

                    width: "120px",
                    height: "40px",
                    margin: "20px auto",

                    fontSize: "16px",
                    cursor: "pointer",
                }}>
                go back
            </button>
        </div>

    )
};

export default NotFound;