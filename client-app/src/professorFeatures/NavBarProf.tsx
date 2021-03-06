import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { useStore } from "../app/stores/store";
// import "./styles.css";

export default observer(function NavBarProf() {

  const { profesoriStore: {  logoutProf } } = useStore();
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

        <Menu.Item as={NavLink} to="/professorPage/ProfProfili" name="Profili im" />
        <Menu.Item as={NavLink} to="/professorPage/ProfNjoftimet" content='Njoftimet'/>
        <Menu.Item as={NavLink} to="/professorPage/Vlersimet" name="Vlersimet" />
        <Menu.Item as={NavLink} to="/professorPage/Studentet" name="Studentet" />
        <Menu.Item onClick={logoutProf} text='Ckycu' icon='power' />


      </Container>
    </Menu>
  );
})