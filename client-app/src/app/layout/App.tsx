import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import HomePage from "../../features/home/homePage";
import Dashboard from "../../features/nxenesiFromAdmin/dashboard/Dashboard";
import LendetDashboard from "../../features/lendet/dashboard/LendetDashboard";
import LendetDetails from "../../features/lendet/details/LendetDetails";
import LendaForm from "../../features/lendet/form/LendaForm";
import NxenesiDashboard from "../../features/nxenesit/dashboard/NxenesiDashboard";
import LoginFormPrindi from "../../features/prinderit/form/LoginFormPrindi";
import ShowPrinderit from "../../features/prinderit/showPrindi";
import LoginFormProf from "../../features/profesoret/form/LoginFormProf";
import ShowProfessors from "../../features/profesoret/profesoret";
import ProfProfileDashboard from "../../features/profesoret/profProfile/ProfProfileDashboard";
import LoginForm from "../../features/users/LoginForm";
import ProfessorPage from "../../professorFeatures/ProfessorPage";
import ModalContainer from "../common/modals/ModalContainer";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import NavBar from "../../features/NavBar";
import adminPage from "../../features/adminPage";
import NavBarProf from "../../professorFeatures/NavBarProf";
import PrindiPage from "../../prindiFeatures/PrindiPage";
import NavBarPrindi from "../../prindiFeatures/NavBarPrindi";
import ShowKontaktetProf from "../../professorFeatures/kontaktetProf";
import PrindProfileDashboard from "../../features/prinderit/prindProfile/PrindProfileDashboard";
import kontaktet from "../../prindiFeatures/kontaktet";
import NavBarNxenesi from "../../nxenesiFeatures/NavBarNxenesi";
import NxenesiPage from "../../nxenesiFeatures/NxenesiPage";
import OraretDashboard from "../../features/oraret/dashboard/OraretDashboard";
import SallaDashboard from "../../features/sallat/dashboard/SallaDashboard";
import SallaDetails from "../../features/sallat/details/SallaDetails";
import ParaleljaDetails from "../../features/paralelet/details/ParaleljaDetails";
import ParaleljaDashboard from "../../features/paralelet/dashboard/ParaleljaDashboard";
import KlasaDashboard from "../../features/klasat/dashboard/KlasaDashboard";
import KlasaDetails from "../../features/klasat/details/KlasaDetails";
import ShowVlersimet from "../../professorFeatures/vleresimet";
import LibriDashboard from "../../features/librat/dashboart/LibriDashboard";
import DashboardLibri from "../../features/librat/libratViewFromNxenesi/DashboardLibri";
import FamiljaDetails from "../../features/familjet/FamiljaDetails";
import FamiljaDashboard from "../../features/familjet/FamiljaDashboard";
import NxenesiFeedbacks from "../../nxenesiFeatures/dashboard/NxenesiFeedbacks";
import AdminProfileDashboard from "../../features/admin/AdminProfileDashboard";
import SyllabusetDashboard from "../../features/syllabuset/dashboard/SyllabusetDashboard";
import ShowFeedbacks from "../../professorFeatures/feedbacks/ShowFeedbacks";
import OraretDashboardStudenti from "../../features/oraret/OraretDashboardStudenti";


import FemijaDashboard from "../../prindiFeatures/dashboard/FemijaDashboard";



function App() {
  const { commonStore, adminStore, profesoriStore } = useStore();

  commonStore.setAppLoaded();



  if (!commonStore.appLoaded) return <LoadingComponent content="Loading..." />;


  return (

    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <ModalContainer />
      <Route exact path="/" component={HomePage} />
      <Route path="/professorPage" component={ProfessorPage} />
      <Route
        path={"/professorPage/(.+)"}
        render={() => (
          <>
            <NavBarProf />

            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route path="/professorPage/ProfFeedbacks" component={ShowFeedbacks} />

                <Route
                  path="/professorPage/ProfProfili"
                  component={ProfProfileDashboard}
                />
                
                <Route
                  path="/professorPage/Vlersimet"
                  component={ShowVlersimet}
                />
                <Route
                  path="/professorPage/Kontaktet"
                  component={ShowKontaktetProf}
                />

              </Switch>
            </Container>
          </>
        )}
      />

      <Route path="/prindiPage" component={PrindiPage} />
      <Route
        path={"/prindiPage/(.+)"}
        render={() => (
          <>
            <NavBarPrindi />

            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route
                  path="/prindiPage/PrindProfili"
                  component={PrindProfileDashboard}
                />
                <Route path="/prindiPage/Kontaktet" component={kontaktet} />
                <Route path="/prindiPage/Femija" component={FemijaDashboard} />
              </Switch>
            </Container>
          </>
        )}
      />

      <Container style={{ marginTop: "7em" }}>
        <Switch></Switch>
      </Container>

      <Route path="/nxenesiPage" component={NxenesiPage} />
      <Route
        path={"/nxenesiPage/(.+)"}
        render={() => (
          <>
            <NavBarNxenesi />

            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route
                  exact
                  path="/nxenesiPage/Profili/"
                  component={NxenesiDashboard}
                />
                <Route
                  exact
                  path="/nxenesiPage/librat"
                  component={LibriDashboard}
                />
                <Route
                  path="/nxenesiPage/feedbacks"
                  component={NxenesiFeedbacks}
                />
                <Route
                  path="/nxenesiPage/oraret"
                  component={OraretDashboardStudenti}
                />
              </Switch>
            </Container>
          </>
        )}
      />

      <Route path="/adminPage" component={adminPage} />
      <Route
        path={"/adminPage/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route
                  exact
                  path="/adminPage/Profili"
                  component={AdminProfileDashboard}
                />
                <Route
                  path="/adminPage/profesoret"
                  component={ShowProfessors}
                />
                <Route path="/adminPage/oraret" component={OraretDashboard} />
                <Route path="/adminPage/nxenesit" component={Dashboard} />
                <Route path="/adminPage/prinderit" component={ShowPrinderit} />
                <Route
                  exact
                  path="/adminPage/lendet"
                  component={LendetDashboard}
                />
                <Route path="/adminPage/lendet/:id" component={LendetDetails} />

                <Route path="/adminPage/login" component={LoginForm} />
                <Route path="/adminPage/loginProf" component={LoginFormProf} />
                <Route
                  path="/adminPage/loginPrindi"
                  component={LoginFormPrindi}
                />
                <Route
                  path="/adminPage/syllabuset"
                  component={SyllabusetDashboard}
                />
                <Route
                  path={["/adminPage/krijoLende", "/adminPage/manageLenda/:id"]}
                  component={LendaForm}
                />
                <Route
                  exact
                  path="/adminPage/sallat"
                  component={SallaDashboard}
                />
                <Route path="/adminPage/paralelet/:id" component={SallaDetails} />
                <Route
                  exact
                  path="/adminPage/paralelet"
                  component={ParaleljaDashboard}
                />
                <Route path="/adminPage/paralelet/:id" component={ParaleljaDetails} />

                <Route
                  exact
                  path="/adminPage/klasat"
                  component={KlasaDashboard}
                />
                <Route
                  exact
                  path="/adminPage/librat"
                  component={LibriDashboard}
                />
                <Route path="/adminPage/klasat/:id" component={KlasaDetails} />

                <Route
                  exact
                  path="/adminPage/familjet"
                  component={FamiljaDashboard}
                />
                <Route path="/adminPage/familjet/:id" component={FamiljaDetails} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
