import App from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />
    children: [
      {
        index: true,
        //element:<Home />
      },
      {
        path: "info",
        //element:<Info />
      },
      {
        path: "projects",
        //element:<Projects />
      },
      {
        path: "contact",
        //element:<Contact />
      },
    ],
  },
];

export default routes;
