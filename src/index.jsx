import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/home";
import { Signup } from "./components/signup";
import { Signin } from "./components/signin";
import { Game } from "./components/game";
import { Labo } from "./components/labo";

import "../src/index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
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
		path: "/game",
		element: <Game />,
	},
	{
		path: "/labo",
		element: <Labo />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
