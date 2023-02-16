import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { App } from "./components/App";
import { NotFound } from "./components/NotFound";
import { Labo } from "./components/Labo";

import "../src/index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/signin",
		element: <Signin />,
	},
	{
		path: "/app",
		element: <App />,
	},
	{
		path: "/labo",
		element: <Labo />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
