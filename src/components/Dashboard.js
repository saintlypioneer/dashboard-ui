import styled from "styled-components";
import DashboardMenu from "./DashboardMenu";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <Container>
      <DashboardMenu />
      <DashboardContent />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  display: flex;
  background-color: #F5F5F5;
  position: relative;

  @media (max-width: 600px) {
        padding: 10px;
    }

`;

export default Dashboard;
