import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { useStore } from "../app/stores/store";
// import "./styles.css";

export default observer(function NavBar() {
  const {
    adminStore: { user, logout },
    profesoriStore: { prof, logoutProf },
    prindStoreAccount: { prindi, logoutPrindi },
  } = useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          <Link to="/">Gjimnazi</Link>
        </Menu.Item>
        <Dropdown item text='Organizimi i klasave'>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/adminPage/klasat" name="Klasat" >Klasat </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/adminPage/sallat" name="Sallat" >Sallat </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/adminPage/paralelet" name="Paralelet" >Paralelet </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text='Frymore'>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/adminPage/profesoret" name="Profesoret">Profesoret</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/adminPage/prinderit" name="Prinderit">Prinderit</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/adminPage/nxenesit" name="Nxenesit">Nxenesit</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/adminPage/familjet" name="Familjet">Familjet</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown >

        <Dropdown item text='Jo Frymore'>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/adminPage/oraret" name="Oraret" >Oraret</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/adminPage/lendet" name="Lendet" >Lendet</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/adminPage/njoftimet" name='Njoftimet'>Njoftimet</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <Menu.Item as={NavLink} to="/adminPage/librat" name='Librat' />
        <Menu.Item as={NavLink} to="/adminPage/syllabuset" name='Syllabuset' />

        <Menu.Item position="right">
          <Image
            src={user?.image || "/assets/user.png"}
            avatar
            spaced="right"
          />
          <Dropdown spaced="right" pointing="top right" text={user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={NavLink}
                to={`/adminPage/Profili/`}
                text="Profili Im"
                icon="user"
              />
              <Dropdown.Item onClick={logout} text="Çkyçu" icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
   
      </Container>
    </Menu>
  );
});
