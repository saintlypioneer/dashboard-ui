import styled from "styled-components";

function DashboardCard({card, index}){
    return (
        <Card style={{backgroundColor: card.background}}>
            <div id="icon">
                <img src={card.icon} />
            </div>
            <div id="content">
                <h3>{card.title}</h3>
                <h1>{card.text}</h1>
            </div>
        </Card>
    );
}

const Card = styled.div`
    flex: 1;
    height: 120px;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    min-height: 120px;
    height: 100%;

    #icon{
        display: flex;
        justify-content: end;
    }

    #content{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3{
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 1rem;
        }

        h1{
            font-family: 'open sans', sans-serif;
            font-weight: 700;
            font-size: 1.5rem;
        }

        @media (max-width: 1200px){
            h1{
                font-size: 1.8rem;
            }
        }

        @media (max-width: 950px){
            h1{
                font-size: 1.5rem;
            }
        }

    }

`;

export default DashboardCard;