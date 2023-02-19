import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
	const showPassword = () => {
		if (iconPassword === "eye-outline") {
			setIconPassword("eye-off-outline");
			setTypePassword("text");
		}
		else {
			setIconPassword("eye-outline");
			setTypePassword("password");
		}
	};

	const [lastname, setLastname] = useState("");
	const [password, setPassword] = useState("");

	const [iconPassword, setIconPassword] = useState("eye-outline");
	const [typePassword, setTypePassword] = useState("password");

	useEffect(() => {
		window.onload = () => {
			const local = window.localStorage;

			if (local.length !== 0 || JSON.parse(local.getItem("user") !== null)) {
				const user = JSON.parse(local.getItem("user"));
				setLastname(user.lastname);
				setPassword(user.password);
			}
		}
	}, []);

	const submitForm = () => {
		const local = window.localStorage;

		if (lastname === "" || password === "") {
			window.alert("Some fields are not valid. Please try again.");
			return;
		}
		if (local.length === 0 || JSON.parse(local.getItem("user") === null)) {
			window.alert("You have to register first!");
			return;
		}

		const user = JSON.parse(local.getItem("user"));

		if (lastname !== user.lastname || password !== user.password) {
			window.alert("Your credentials are not registered!");
			return;
		}

		const form = document.getElementById("form");
		form.action = "/game";
		form.submit();

		window.alert("You are correctly login.");
	}
	const resetForm = () => {
		setLastname("");
		setPassword("");
	}

    return (
        <div className="h-screen flex justify-center items-center personal-bg">
			<form id="form" method="GET" className="bg-slate-400 border border-black rounded-lg p-4 space-y-2">
				<h1 className="text-5xl text-center mb-5">Sign-in</h1>

				<div className="form-control">
					<label className="input-group">
						<span>Lastname</span>
						<input name="lastname" className="input input-bordered" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
					</label>
				</div>

				<div className="form-control">
					<label className="input-group">
						<span>Password</span>
						<input name="password" className="input input-bordered" type={typePassword} value={password} onChange={(e) => setPassword(e.target.value)} />
						<button type="button" className="btn btn-square" onClick={() => showPassword()}>
							<ion-icon name={iconPassword}></ion-icon>
						</button>
					</label>
				</div>

				<div className="flex justify-center items-center space-x-7">
					<Link to="/" className="btn">Home</Link>
					<button type="button" className="btn" onClick={() => submitForm()}>Submit</button>
					<button type="button" className="btn btn-error" onClick={() => resetForm()}>Reset</button>
				</div>
			</form>
		</div>
    );
};