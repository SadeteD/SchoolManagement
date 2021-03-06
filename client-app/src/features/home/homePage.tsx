import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginFormProf from '../profesoret/form/LoginFormProf';
import RegisterFormProf from '../profesoret/form/RegisterFormProf';
import LoginFormPrindi from '../prinderit/form/LoginFormPrindi';
import RegisterFormPrindi from '../prinderit/form/RegisterFormPrindi';
import LoginForm from '../users/LoginForm';
import LoginFormNxenesi from '../nxenesit/form/LoginFormNxenesi';
import './style.css';

export default observer(function HomePage() {
    const { adminStore, modalStore, profesoriStore, nxenesiStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
            {/* <Image  src='assets/school.png'  style={{ marginBottom: 12 }} /> */}
                <Header as='h1' inverted>
                   
                    Menaxhimi i Shkollës

                </Header>
                {adminStore.isLoggedIn ? (
                    <>
                        <Header as='h2' content='Mire se vini' />
                        <Button as={Link} to='/adminPage/paneli' size='huge' inverted>
                            Vazhdo Tek Paneli!
                        </Button>
                    </>
                ) : (<>
                    <Button onClick={() => modalStore.openModal(<LoginForm />)} to='/login' size='huge' inverted>
                        Kyçu si Admin!
                    </Button>
                </>
                )}
                {profesoriStore.isLoggedIn ? (
                    <>
                        {/* <Header as='h2' content='Mire se vini' /> */}
                        <Button as={Link} to='/professorPage/ProfProfili' size='huge' inverted>
                            Vazhdo Tek Profili!
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginFormProf />)} size='huge' inverted>
                            Kyçu si Profesor!
                        </Button>

                    </>
                )}
                {nxenesiStore.isLoggedIn ? (
                    <>
                        <Button as={Link} to='/nxenesiPage/Profili' size='huge' inverted>
                            Vazhdo te profili i nxënësit!
                        </Button>
                    </>

                ) : (
                    <Button onClick={() => modalStore.openModal(<LoginFormNxenesi />)} size='huge' inverted>
                        Kyçu si Nxënës!
                    </Button>

                )}
            </Container>
        </Segment>
    )
})