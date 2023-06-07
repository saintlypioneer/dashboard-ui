import styled from "styled-components";
import LineChart from "./charts/Linechart";
import { useState } from "react";
import PieChart from "./charts/Piechart";

function DashboardActivity(){

    const expenseData = {
        "May - June 2021": {
            "guest": [
                400,
                300,
                500,
                200,
            ],
            "user": [
                200,
                100,
                300,
                100,
            ]
        },
        "June - July 2021": {
            "guest": [
                400,
                300,
                700,
                200,
            ],
            "user": [
                200,
                150,
                300,
                100,
            ]
        },
        "July - August 2021": {
            "guest": [
                250,
                300,
                500,
                200,
            ],
            "user": [
                200,
                100,
                50,
                100,
            ]
        },
    };

    const [selected, setSelected] = useState("May - June 2021");
    
    function handleChange(e){
        setSelected(e.target.value);
    }

    return (
        <Container>
            <h1>Activities</h1>
            <div id="activity__filter">
                <select onChange={e => handleChange(e)} value={selected} >
                    {
                        Object.keys(expenseData).map((key, index) => {
                            return(
                                <option value={key}>{key}</option>
                            );
                        })
                    }
                </select>
                <UserTypes>
                    <User>
                        <div class="circle"></div>
                        <span>User</span>
                    </User>
                    <User>
                        <div class="circle guest"></div>
                        <span>Guest</span>
                    </User>
                </UserTypes>
            </div>
            <LineChart userData={expenseData[selected].user} guestData={expenseData[selected].guest} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    background-color: white;
    padding: 40px;
    border-radius: 20px;
    overflow-x: scroll;

    h1{
        font-weight: 700;
        font-size: 1rem;
    }

    #activity__filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        &>select{
            border: none;
            color: #858585;
            font-weight: 400;
            padding-left: 0px;

            &:focus{
                outline: none;
            }
        }
    }

`;

const UserTypes = styled.div`
    display: flex;
    gap: 30px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    &>span{
        font-family: 'Lato';
        font-weight: 400;
    }

    .circle{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #E9A0A0;
    }

    .guest{
        background-color: #9BDD7C;
    }
`;

export default DashboardActivity;