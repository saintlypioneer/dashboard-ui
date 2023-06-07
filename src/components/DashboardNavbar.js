import styled from "styled-components";

function DashboardNavbar() {
  return (
    <Header>
      <h1>Dashboard</h1>
      <div id="dashboard__header__controls">
        <SearchBar>
          <input type="text" placeholder="Search..." />
          <img src="/assets/svg/search.svg" />
        </SearchBar>
        <img src="/assets/svg/bell.svg" />
        <Avatar>
          <img src="/assets/images/user1.jpg" />
        </Avatar>
      </div>
    </Header>
  );
}

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  #dashboard__header__controls {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

const SearchBar = styled.div`
  background-color: white;
  border-radius: 10px;
  border: none;
  min-width: 180px;
  width: fit-content;
  display: flex;
  padding: 2px 10px;

  @media (max-width: 650px) {
    display: none;
  }

  & > input {
    padding: 4px;
    border: none;
    font-size: 1rem;
    /* font-weight: 400; */

    &::placeholder {
      color: #b0b0b0;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: clip;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default DashboardNavbar;
