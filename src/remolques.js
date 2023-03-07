import { Row, Col, Table } from 'react-bootstrap';
import Sidebar from './sidebar';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

function Remolques() {
  // para filtrar
  const [filterValue, setFilterValue] = useState('all'); // valor inicial del filtro

  // datos de ejemplo para la tabla
  const tableData = [
    { id: 1, f_tiempo: '', f_datos: 'k-404 T-234 </br>40% diecel</br> nombre</br>exportacion', progreso: 'Progreso 1', f_terminal: 'CUU', f_cliente: 'cliente 1' },
    { id: 2, f_tiempo: '', f_datos: 'k-404 T-234 </br>40% diecel</br> nombre</br>exportacion', progreso: 'Progreso 2', f_terminal: 'JRZ', f_cliente: 'cliente 2' },
    { id: 3, f_tiempo: '', f_datos: 'k-404 T-234 </br>40% diecel</br> nombre</br>exportacion', progreso: 'Progreso 3', f_terminal: 'CUU', f_cliente: 'cliente 2' },
    { id: 4, f_tiempo: '', f_datos: 'k-404 T-234 </br>40% diecel</br> nombre</br>exportacion', progreso: 'Progreso 4', f_terminal: 'JRZ', f_cliente: 'cliente 3' },
    { id: 5, f_tiempo: '', f_datos: 'k-404 T-234 </br>40% diecel</br> nombre</br>exportacion', progreso: 'progreso 5', f_terminal: 'CUU', f_cliente: 'cliente 3' },
    { id: 6, f_tiempo: '', f_datos: 'k-404 T-234 </br>40% diecel</br> nombre</br>exportacion', progreso: 'Progreso 1', f_terminal: 'CUU', f_cliente: 'cliente 5' },

  ];









  // función para filtrar los datos según el valor del filtro

  
  const filteredTableData = filterValue === 'all' ? tableData : tableData.filter(item => item.f_terminal === filterValue || item.f_cliente === filterValue);


  // cambia el color de acuerdo a la respuesta del microservicio
  const getMicroserviceResponse = () => {
    const responses = ['a tiempo', 'retardado'];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };


  return (
    <Row>
      <Col md={2} className="bg-success d-flex">
        <Sidebar />
      </Col>
      <Col md={10}>
        <Row>
          <Col md={12}>
            <div className="d-flex justify-content-between align-items-center">
              <h1 style={{ marginTop: '80px' }}>Disponibilidad de Remolques</h1>
              <div style={{ marginTop: '30px' }}>
                <span className="me-3">Hugo Solis</span>
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
            </div>
            <hr style={{ border: '0', borderTop: '3px solid #000000', width: '100%',flex: '1',marginBottom: '30px'}}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                {/* Dropdown para seleccionar el filtro */}
                <div className="me-3">
                <select 
                    value={filterValue} onChange={e => setFilterValue(e.target.value)} className="border border-success rounded-pill px-5 py-1" style={{ width: "180px", height: "50px" }}>
                    <option value="all">Terminal</option>
                    <option value="CUU">CUU</option>
                    <option value="JRZ">JRZ</option>
                    <option value="ELP">ELP</option>
                </select>
                </div>
                <div>
                <select value={filterValue} onChange={e => setFilterValue(e.target.value)} className="border border-success rounded-pill px-5 py-1" style={{ width: "180px", height: "50px" }}>
                    <option value="all">Clientes</option>
                    <option value="cliente 1">cliente 1</option>
                    <option value="cliente 2">Cliente 2</option>
                    <option value="cliente 3">Cliente 3</option>
                </select>
                  
                </div>
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-outline-success rounded me-2" style={{ width: "300px", height: "50px" }}>Embarques totales: 5</button>
                <button type="button" className="btn btn-outline-danger rounded" style={{ width: "300px", height: "50px" }}>Embarques retrasados: 30% </button>
             </div>

            </div>
 {/* Tabla con los datos filtrados */}
          
 <Table striped bordered hover style={{marginTop: "50px"}}>
            
            <tbody>
              
              {filteredTableData.map(item => (
                <tr key={item.id}>
                  <td style={{maxWidth: "1px", width: "0.1px", backgroundColor: getMicroserviceResponse() === 'a tiempo' ? 'green' : 'red' }}></td>

                  <td style={{width: '130px'}} dangerouslySetInnerHTML={{ __html: item.f_datos.replace(/<\/br>/g, '<br/>') }}></td>
                  <td style={{ verticalAlign: 'middle', paddingLeft: '10px', paddingRight: '10px' }}>
                  <ProgressBar now={50} label={`${50}%`} />
                   </td>




                </tr>
              ))}

          </tbody>
          </Table>
          </Col>
         </Row>      
        </Col>
    </Row>

    );
};

  export default Remolques;


