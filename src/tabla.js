import React, { useState, useEffect } from "react";
import { ProgressBar, OverlayTrigger, Tooltip, Table, Button, Col, Row } from "react-bootstrap";

function MyComponent() {
  const [data, setData] = useState(null);
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    const requestData = { "name": "ELP-DANA" };
    fetch("http://127.0.0.1:8000/route/fetch/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(json => {
        const jsonData = json;
        setData(jsonData);
      });
  }, []);

  function getProgressBarData() {
    const checkpoints = data?.["transport-route"]?.checkpoints;
    if (!checkpoints) return null;

    const totalCheckpoints = checkpoints.length;
    const akaCheckpoints = checkpoints.filter(cp => cp.aka).length;
    const progress = akaCheckpoints / totalCheckpoints;
    const delay = data?.["transport-route"]?.["delay"];

    const progressBarData = [];

    for (let i = 0; i < totalCheckpoints; i++) {
      progressBarData.push({
        progress: i < akaCheckpoints ? 1 : 0,
        label: i < akaCheckpoints ? "A tiempo" : "Retrasado"
      });

    }

    return progressBarData;
  }

  const progressBarData = getProgressBarData();
  const numRecords = data?.["transport-route"]?.["name"] ? 1 : 0;
  // estado para almacenar el porcentaje de embarques retrasados
  const [percentDelayed, setPercentDelayed] = useState(0);

  return (
    <>


    {/*        */}
      <div>
      <Row>

      <Col md={12}>
      <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              {/* Dropdown para seleccionar el filtro por Terminal */}
              <div className="me-3">
                <select 
                  value={filterValue} 
                  onChange={e => setFilterValue(e.target.value)} 
                  className="border border-success rounded-pill px-5 py-1" 
                  style={{ width: "180px", height: "50px" }}
                >
                  <option value="all">Terminal</option>
                  <option value="CUU">CUU</option>
                  <option value="JRZ">JRZ</option>
                  <option value="ELP">ELP</option>
                </select>
              </div>
               {/* Dropdown para seleccionar el filtro por Cliente */}
               <div>
                <select 
                  value={filterValue} 
                  onChange={e => setFilterValue(e.target.value)} 
                  className="border border-success rounded-pill px-5 py-1" 
                  style={{ width: "180px", height: "50px" }}
                >
                  <option value="all">Clientes</option>
                  <option value="cliente 1">cliente 1</option>
                  <option value="cliente 2">Cliente 2</option>
                  <option value="cliente 3">Cliente 3</option>
                </select>
              </div>
              </div>
             

                    <div className="btn-group">
                    <Button style={{ width: "300px", height: "50px", backgroundColor: "transparent", color: "green"}}  type="button" className=" btn btn-outline-success rounded me-2 border border-success" variant="primary">Embarques totales: {numRecords} </Button>
                    <Button style={{ width: "300px", height: "50px", backgroundColor: "transparent", color: "red"}}  type="button" className=" btn btn-outline-danger rounded me-2 border border-success" variant="primary">Embarques totales: {numRecords} </Button>
                    </div>
                    </div>
      </Col>
      </Row>              
        <Table striped bordered hover style={{ marginTop: "20px" }}>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{data?.["transport-route"]?.["name"]}</td>
              <td>
                {progressBarData && (
                  <>
                    <div>
                      <ProgressBar variant={data?.["transport-route"]?.["delay"] ? "danger" : "black"}>
                        {progressBarData.map((item, index) => (
                          <ProgressBar
                            striped
                            key={index}
                            variant={item.progress ? "black" : "warning"}
                            now={item.progress ? 25 : 0}
                            label={
                              <OverlayTrigger
                                overlay={<Tooltip id={`tooltip-${index}`}>{item.label}</Tooltip>}
                              >
                                <span
                                  className="circle"
                                  style={{
                                    backgroundColor: item.progress ? "green" : "red",
                                    border: `2px solid ${item.progress ? "green" : "red"}`,
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%"
                                  }}
                                ></span>
                              </OverlayTrigger>
                            }
                          />
                        ))}
                      </ProgressBar>
                  </div>
                  <div>
                    {data?.["transport-route"]?.checkpoints
                      .filter(cp => cp.aka)
                      .map((cp, index) => (
                        <span key={index} style={{ marginRight: "100px" }}>{cp.aka}</span>
                      ))}
                  </div>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );                                                                               
}

function Tabla() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default Tabla;
