
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function MyNav(props) {
    const navigate = useNavigate()
    const RoutHome = () => {
        navigate('/')
    }
    const RoutAbout = () => {
        navigate('/about')
    }
    const RoutServe = () => {
        navigate('/services')
    }
    const RoutPro = () => {
        navigate('/projects')
    }
    const RoutCont = () => {
        navigate('/contact')
    }
    return (
        <>        
        <Navbar bg='dark' className='p-3 position-fixed top-0 w-100' expand="lg">
            <Container>
                    <Navbar.Brand to="/" className='text-white fw-bold'>Web Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><button className='navbtn' onClick={RoutHome}>Home</button></Nav.Link>
                            <Nav.Link ><button className='navbtn' onClick={RoutAbout}>About</button></Nav.Link>
                            <Nav.Link><button className='navbtn' onClick={RoutServe}>Services</button></Nav.Link>
                            <Nav.Link><button className='navbtn' onClick={RoutPro}>Projects</button></Nav.Link>
                            <Nav.Link><button className='navbtn' onClick={RoutCont}>Contact</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
