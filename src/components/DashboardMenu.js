import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

function DashboardMenu() {
  const menuItems = [
    {
      icon: "/assets/svg/dashboard_light.svg",
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "/assets/svg/tag_light.svg",
      text: "Transactions",
      link: "/transactions",
    },
    {
      icon: "/assets/svg/schedule_light.svg",
      text: "Schedules",
      link: "/schedules",
    },
    {
      icon: "/assets/svg/user_light.svg",
      text: "Users",
      link: "/users",
    },
    {
      icon: "/assets/svg/setting_light.svg",
      text: "Settings",
      link: "/settings",
    },
  ];

  return (
    <Menu>
      <h1>Board.</h1>
      <MenuItems>
        {menuItems.map((item, index) => {
          return (
            <StyledMenuItem activeClassName="current" to={item.link}>
              <img src={item.icon} />
              <span>{item.text}</span>
            </StyledMenuItem>
          );
        })}
      </MenuItems>
      <MenuFooter>
        <StyledLink to="/help">Help</StyledLink>
        <StyledLink to="/contact">Contact Us</StyledLink>
      </MenuFooter>
    </Menu>
  );
}

const Menu = styled.div`
  width: 280px;
  min-height: 100%;
  height: fit-content;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 50px;

  @media (max-width: 1200px) {
        display: none;
    }

  h1 {
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }
`;

const MenuItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;

  .active {
    font-weight: 700;
  }
`;

const StyledMenuItem = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
  font-weight: 300;
  font-size: 1rem;

  & > img {
    width: 18px;
    height: 18px;
  }
`;

const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 300;
  font-size: 0.9rem;
`;

export default DashboardMenu;
