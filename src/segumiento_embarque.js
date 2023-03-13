import { Row, Col, Table } from 'react-bootstrap';
    import Sidebar from './sidebar';
    import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import React, { useState, useEffect } from 'react';
    
    import Tabla from './tabla';


    function SeguimientoEmbarques() {
    // para filtrar
    const [filterValue, setFilterValue] = useState('all'); // valor inicial del filtro
    const [tableData, setTableData] = useState([]);


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
                {/* Dropdown para seleccionar el filtro */}
                <Col md={12}>  
                {/* Tabla con los datos filtrados */}
                <Tabla />
                </Col>
                </Row>      
                </Col>

            </Row>
            

            );
        };



        export default SeguimientoEmbarques;







