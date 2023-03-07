
  
import React from "react";
import { Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

  const Sidebar = () => {
    return (
      <>
        <Col md={2} className="bg-success d-flex">
            <Navbar expand="md" className="flex-md-column">
                <Navbar.Toggle aria-controls="sidebar-nav" />
                    <Navbar.Collapse id="sidebar-nav" className="flex-column">
                        <div className="flex-grow-1">
                            <Nav className="flex-column" style={{ height: '100vh' }}>
                                <Nav.Item>
                                    <Nav.Link disabled style={{ fontSize: '35px', color: 'gold', marginTop: '60px' }}>
                                        Transportes Soto
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Nav.Link href="/pendientes" style={{ color: 'white' }}> Pendientes </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Nav.Link href="/ordenes-embarque" style={{ color: 'white' }}> ordenes de embarque </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="/programacion-de-embarques" style={{ color: 'white' }}> Programación de embarques </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} to="/" > seguimiento embarques</Nav.Link>
                                </Nav.Item>


                                <NavDropdown title="Disponibilidad">
                                    
                                    <Nav.Link as={Link} to="/tractores" className="dropdown-item" > Tractores </Nav.Link>
                                    <Nav.Link as={Link} to="/remolques" className="dropdown-item"> Remolques </Nav.Link>

                                </NavDropdown>

                                <Nav.Item>
                                    <Nav.Link href="/disponibilidad"style={{color: 'white'}}>Catálogos</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="/asignar-clientes-a-binomio"style={{color: 'white'}}>Asignar clientes a binomio</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
            </Navbar>
        </Col>
        <Outlet />
       
      </>
      
    )
  };
  
  export default Sidebar;
