import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
	const getTodayDate = () => {
		let today = new Date();

		var date = today.getDate();
		var month = today.getMonth() + 1;
		var year = today.getFullYear();

		if (date < 10) date = "0" + date;
		if (month < 10) month = "0" + month;

		return year + "-" + month + "-" + date;
	}

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
	const showPasswordConfirm = () => {
		if (iconPasswordConfirm === "eye-outline") {
			setIconPasswordConfirm("eye-off-outline");
			setTypePasswordConfirm("text");
		}
		else {
			setIconPasswordConfirm("eye-outline");
			setTypePasswordConfirm("password");
		}
	};


	const [lastname, setLastname] = useState("");
	const [firstname, setFirstname] = useState("");

	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const [birthday, setBirthday] = useState(getTodayDate());

	const [gender, setGender] = useState("male");

	const [iconPassword, setIconPassword] = useState("eye-outline");
	const [iconPasswordConfirm, setIconPasswordConfirm] = useState("eye-outline");

	const [typePassword, setTypePassword] = useState("password");
	const [typePasswordConfirm, setTypePasswordConfirm] = useState("password");


	const submitForm = () => {
		if (lastname === "" || firstname === "" || email === "" || password === "" || passwordConfirm === "" || birthday === getTodayDate()) {
			window.alert("Some fields are not valid. Please try again.");
			return;
		}
		if (password !== passwordConfirm) {
			window.alert("The passwords are not identical.");
			return;
		}

		// if("") { //birthday
		// 	window.alert("You must be at least 18 years old.");
		// }
		
		const user = { lastname: lastname, password: password};
		window.localStorage.clear();
		window.localStorage.setItem("user", JSON.stringify(user));

		const form = document.getElementById("form");
		form.action = "/";
		form.submit();

		window.alert("You are correctly registered.");
		
	}
	const resetForm = () => {
		setLastname("");
		setFirstname("");
		
		setEmail("");

		setPassword("");
		setPasswordConfirm("");

		setBirthday(getTodayDate());

		setGender("male");
	}


	return (
		<div className="h-screen flex justify-center items-center personal-bg">
			<form id="form" method="POST" className="bg-slate-400 border border-black rounded-lg p-4 space-y-2">
				<h1 className="text-5xl text-center mb-5">Sign-up</h1>

				<div className="form-control">
					<label className="input-group">
						<span>Lastname</span>
						<input name="lastname" className="input input-bordered" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
					</label>
				</div>

				<div className="form-control">
					<label className="input-group">
						<span>Firstname</span>
						<input name="firstname" className="input input-bordered" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
					</label>
				</div>
				
				<div className="form-control">
					<label className="input-group">
						<span>Email</span>
						<input name="email" className="input input-bordered" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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

				<div className="form-control">
					<label className="input-group">
						<span>Confirm password</span>
						<input name="passwordConfirm" className="input input-bordered" type={typePasswordConfirm} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
						<button type="button" className="btn btn-square" onClick={() => showPasswordConfirm()}>
							<ion-icon name={iconPasswordConfirm}></ion-icon>
						</button>
					</label>
				</div>

				<div className="form-control">
					<label className="input-group">
						<span>Birthday</span>
						<input name="birthday" className="input input-bordered" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
					</label>
				</div>

				<div className="form-control">
					<label className="input-group">
						<span>Gender</span>
						<select className="select select-bordered" value={gender} onChange={(e) => setGender(e.target.value)}>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
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