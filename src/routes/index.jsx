import App from "../App";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const routes = [
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default routes;
