import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// Rutas a manejar dentro de la APP
const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

// Routing handler
const router = async () => {
  // establecer template del DOM
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  header.innerHTML = await Header();
  content.innerHTML = await render();
};

export default router;
