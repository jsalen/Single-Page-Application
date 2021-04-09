import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

const Routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

// Routing handler
const router = async () => {
  // establecer template del DOM
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
};

export default router;
