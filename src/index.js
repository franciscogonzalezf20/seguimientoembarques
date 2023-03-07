import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tractores from "./tractores";
import Remolques from "./remolques";
import SeguimientoEmbarques from "./segumiento_embarque";


export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/tractores" element={<Tractores />} />
        <Route path="/remolques" element={<Remolques />} />
        <Route path="/" element={<SeguimientoEmbarques />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// función para hacer la solicitud GET y mostrar la respuesta en la consola
function makeRequest() {
  fetch('https://rickandmortyapi.com/api/episode/25')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// llamar a la función cada 30 segundos
setInterval(makeRequest, 30000);