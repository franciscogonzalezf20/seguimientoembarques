import React from "react";
import {  Row, Col, Table } from 'react-bootstrap';
import Sidebar from "./sidebar";

const Tractores = () => {
  return (
<Row>
  <Col md={2} className="bg-success d-flex">
    <Sidebar />
  </Col>
  <Col md={8} className="mr-auto" >
    <h1>Tractores SIN INFORMACION DE LA PANTALLA</h1>
    
    <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Año</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Kenworth</td>
                    <td>T680</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Freightliner</td>
                    <td>Cascadia</td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Peterbilt</td>
                    <td>579</td>
                    <td>2018</td>
                  </tr>
                </tbody>
              </Table>
  </Col>
</Row>

  );
};

export default Tractores;