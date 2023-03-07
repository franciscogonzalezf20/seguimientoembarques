import { Row, Col, Table } from 'react-bootstrap';
    import Sidebar from './sidebar';
    import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import React, { useState, useEffect } from 'react';
    import { ProgressBar } from 'react-bootstrap';
    import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
    import Tooltip from 'react-bootstrap/Tooltip';

    function SeguimientoEmbarques() {
    // para filtrar
    const [filterValue, setFilterValue] = useState('all'); // valor inicial del filtro
    const [tableData, setTableData] = useState([]);
    const [aka, setAka] = useState('');


    useEffect(() => {
        fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Agregado para imprimir la respuesta de la API en la consola, servicio que va a traer la respuesta que se necesita, primero json, que el json tenga esa estructura (string, int, booleano)
            const newData = data.map((item, index) => {
            return {
                id: index + 1,
                f_tiempo: '',
                f_datos: `${item.name} </br> ${item.aka}`,
                progreso: `Progreso ${index + 1}`,
                f_terminal: '',
                f_cliente: '',
                aka: item.aka,
            };
            });
            console.log(data);
            setTableData(newData);
            setAka(data[0].aka);
        })
        .catch((error) => console.error(error));
    }, [setAka]);


    
  const akas = tableData.map((item) => item.aka);
  const akaSpans = akas.map((aka, index) => (
    <span key={index} style={{ marginRight: '160px' }}>
      {aka}
    </span>
  ));



    // estado para almacenar el porcentaje de embarques retrasados
    const [percentDelayed, setPercentDelayed] = useState(0);

    // función para actualizar el porcentaje de embarques retrasados
    const updatePercentDelayed = React.useCallback(() => {
        const delayedCount = tableData.filter((item) => getMicroserviceResponse() === 'retardado').length;
        const onTimeCount = tableData.length - delayedCount;
        let percent = 0;
        if (delayedCount > 0) {
        percent = (delayedCount / (delayedCount + onTimeCount)) * 100;
        } else {
        percent = 100;
        }
        setPercentDelayed(percent);
    }, [tableData]);

    // actualizar el porcentaje al cargar la página
    useEffect(() => {
        updatePercentDelayed();
    }, [updatePercentDelayed]);

    // función para filtrar los datos según el valor del filtro
    const filteredTableData = filterValue === 'all' ? tableData : tableData.filter((item) => item.f_terminal === filterValue || item.f_cliente === filterValue);

    // cambia el color de acuerdo a la respuesta del microservicio
    const getMicroserviceResponse = React.useCallback(() => {
        const responses = ['a tiempo', 'retardado'];
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }, []);


        return (
            <Row>
            <Col md={2} className="bg-success d-flex">
                <Sidebar />
            </Col>
            <Col md={10}>
                <Row>
                <Col md={12}>
                    <div className="d-flex justify-content-between align-items-center">
                    <h1 style={{ marginTop: '80px' }}>Seguimiento de embarques</h1>
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
                    <button type="button" className="btn btn-outline-success rounded me-2" style={{ width: "300px", height: "50px" }}>Embarques totales: {filteredTableData.length}</button>
                    <button type="button" className="btn btn-outline-danger rounded" style={{ width: "300px", height: "50px" }}>Embarques retrasados: {percentDelayed}%</button>
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
        <div>
        <ProgressBar>
            <ProgressBar
            striped
            variant="black"
            now={25}
            key={1}
            label={
                <OverlayTrigger overlay={<Tooltip id="tooltip-delayed">Retrasado</Tooltip>}>
                <span className="circle" style={{ backgroundColor: "green", border: "2px solid green", display: "inline-block", width: "16px", height: "16px", borderRadius: "50%" }}></span>
                </OverlayTrigger>
            }
            />
            <ProgressBar
            striped
            variant="black"
            now={25}
            key={2}
            label={
                <OverlayTrigger overlay={<Tooltip id="tooltip-on-time">A tiempo</Tooltip>}>
                <span className="circle" style={{ backgroundColor: "green", border: "2px solid green", display: "inline-block", width: "16px", height: "16px", borderRadius: "50%" }}></span>
                </OverlayTrigger>
            }
            />
            <ProgressBar
            striped
            variant="black"
            now={25}
            key={3}
            label={
                <OverlayTrigger overlay={<Tooltip id="tooltip-on-time">A tiempo</Tooltip>}>
                <span className="circle" style={{ backgroundColor: "green", border: "2px solid green", display: "inline-block", width: "16px", height: "16px", borderRadius: "50%" }}></span>
                </OverlayTrigger>
            }
            />
            <ProgressBar
            striped
            variant="black"
            now={25}
            key={4}
            label={
                <OverlayTrigger overlay={<Tooltip id="tooltip-on-time">A tiempo</Tooltip>}>
                <span className="circle" style={{ backgroundColor: "green", border: "2px solid green", display: "inline-block", width: "16px", height: "16px", borderRadius: "50%" }}></span>
                </OverlayTrigger>
            }
            />

    <ProgressBar variant="black" now={1.5}  label={
                <OverlayTrigger overlay={<Tooltip id="tooltip-on-time">A tiempo</Tooltip>}>
                <span className="circle" style={{ backgroundColor: "green", border: "2px solid green", display: "inline-block", width: "16px", height: "16px", borderRadius: "50%" }}></span>
                </OverlayTrigger>
            }
            />

        </ProgressBar>

        </div>
            <span>{akaSpans}</span>
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



        export default SeguimientoEmbarques;












