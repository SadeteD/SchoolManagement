import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { useStore } from "../app/stores/store";
// import "./styles.css";

export default observer(function NavBarNxenesi() {
  const { nxenesiStore: { nxenesiSelected, logoutNxenesi } } = useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          <Link to="/">PowerSchool</Link>
        </Menu.Item>

        <Menu.Item as={NavLink} to="/nxenesiPage/profili" content="Profili im" />
        <Menu.Item as={NavLink} to="/nxenesiPage/librat" content='Librat' />
        <Menu.Item as={NavLink} to="/nxenesiPage/feedbacks" content='Feedbacks' />
        <Menu.Item as={NavLink} to="/nxenesiPage/oraret" content='Oraret' />



        <Menu.Item onClick={logoutNxenesi} text='Ckycu' icon='power' />


      </Container>
    </Menu>
  );
})