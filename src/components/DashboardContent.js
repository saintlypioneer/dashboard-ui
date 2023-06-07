import styled from "styled-components";
import DashboardNavbar from "./DashboardNavbar";
import DashboardCard from "./DashboardCard";
import DashboardActivity from "./DashboardActivity";
import PieChart from "./charts/Piechart";
import { useState } from "react";
import { Link } from "react-router-dom";

function DashboardContent() {
  const cards = [
    {
      icon: "/assets/svg/revenue.svg",
      title: "Total Revenues",
      text: "$2,129,430",
      background: "#DDEFE0",
    },
    {
      icon: "/assets/svg/tag.svg",
      title: "Total Transactions",
      text: "1,520",
      background: "#F4ECDD",
    },
    {
      icon: "/assets/svg/like.svg",
      title: "Total Likes",
      text: "9,721",
      background: "#EFDADA",
    },
    {
      icon: "/assets/svg/users.svg",
      title: "Total Users",
      text: "892",
      background: "#DEE0EF",
    },
  ];

  const productData = {
    "May - June 2021": [
      { name: "Basic Tees", value: "55" },
      { name: "Custom Short Pants", value: "30" },
      { name: "Hoodies", value: "15" },
    ],
    "June - July 2021": [
      { name: "Hoodie", value: "12" },
      { name: "Groceries", value: "48" },
      { name: "Clothes", value: "40" },
    ],
    "July - August 2021": [
      { name: "Utility", value: "38" },
      { name: "Education", value: "12" },
      { name: "Others", value: "50" },
    ],
  };

  const scheduleData = [
    {
        title: "Meeting with client",
        time: "10:00 AM",
        location: "Malibu Point, California, USA",
    },
    {
        title: "Lunch with Mary",
        time: "12:00 PM",
        location: "In & Out, Texas, USA",
    }
    ];

  const [selected, setSelected] = useState("May - June 2021");

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <Container>
      <DashboardNavbar />
      <DashboardCards>
        {cards.map((card, index) => {
          return <DashboardCard card={card} index={index} />;
        })}
      </DashboardCards>
      <DashboardActivity />
      <DetailedCards>
        <TopProducts>
          <div id="topproducts__heading">
            <h1>Top products</h1>
            <select onChange={(e) => handleChange(e)}>
              {Object.keys(productData).map((key, index) => {
                return <option value={key}>{key}</option>;
              })}
            </select>
          </div>
          <TopProductsContent>
            <div id="piechart">
              <PieChart data={productData[selected]} />
            </div>
            <div id="productsdata">
              {productData[selected].map((item, idx) => {
                return (
                  <div class="productdata">
                    <div
                      className="circle"
                      style={{
                        backgroundColor:
                          idx == 0
                            ? "#98D89E"
                            : idx == 1
                            ? "#F6DC7D"
                            : "#EE8484",
                      }}
                    ></div>
                    <div className="productdata__content">
                      <h3>{item.name}</h3>
                      <h4>{item.value}%</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </TopProductsContent>
        </TopProducts>
        <TodaySchedule>
          <div id="todayschedule__heading">
            <h1>Today's schedule</h1>
            <StyledLink to="/">
              <span>See All</span>
              <img src="/assets/svg/arrow_right.svg" />
            </StyledLink>
          </div>
          <TodayScheduleContent>
            {
                scheduleData.map((item, idx) => {
                    return (
                        <div className="todayschedule__content">
                            <div className="todayschedule__content__left" style={{
                        backgroundColor:
                          idx == 0
                            ? "#9BDD7C"
                            : idx == 1
                            ? "#6972C3"
                            : "#EE8484",
                      }}></div>
                            <div className="todayschedule__content__right">
                                <h3>{item.title}</h3>
                                <h4>{item.time}</h4>
                                <h4>{item.location}</h4>
                            </div>
                        </div>
                    );
                })
            }
          </TodayScheduleContent>
        </TodaySchedule>
      </DetailedCards>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 20px 50px;
  height: calc(100vh-20px);
  overflow-y: scroll;
`;

const DashboardCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  gap: 10px;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const DetailedCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px 0;
  grid-gap: 20px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }

`;

const TopProducts = styled.div`
  width: 100%;
  min-width: 250px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;

  #topproducts__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 1rem;
    }

    & > select {
      border: none;
      color: #858585;
      font-weight: 400;
      padding-left: 0px;

      &:focus {
        outline: none;
      }
    }
  }
`;

const TopProductsContent = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;

  @media (max-width: 520px) {
        flex-direction: column;
        align-items: center;
    }

  #piechart {
    width: 145px;
    height: 145px;
  }

  #productsdata {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;

    @media (max-width: 1200px) {
      padding: 0 10px;
    }

    @media (max-width: 520px) {
        align-items: flex-start;
    }

    .productdata {
      display: flex;
      gap: 10px;
      align-items: first baseline;

      .circle {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: red;
      }

      .productdata__content {
        display: flex;
        flex-direction: column;

        h3 {
          font-weight: 500;
          font-size: 14px;
        }

        h4 {
          font-family: "Lato", sans-serif;
          font-weight: 400;
          font-size: 12px;
          color: #858585;
        }
      }
    }
  }
`;

const TodaySchedule = styled.div`
  width: 100%;
  min-width: 300px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;

  #todayschedule__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: none;
  color: #858585;
  font-weight: 400;
  padding-left: 0px;
  font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;

  &:focus {
    outline: none;
  }
`;

const TodayScheduleContent = styled.div`

    .todayschedule__content {
        display: flex;
        margin-top: 20px;
        gap: 15px;
        /* min-height: 65px; */

        .todayschedule__content__left {
            width: 5px;
            background-color: red;
        }

        .todayschedule__content__right {
            font-family: 'Lato', sans-serif;

            h3{
                color: #666666;
                font-size: 1rem;
                font-weight: 500;
                margin-bottom: 5px;
            }

            h4{
                font-weight: 300px;
                font-size: 12px;
                color: #999999;
                margin-bottom: 5px;
            }
        }
    }

`;

export default DashboardContent;
