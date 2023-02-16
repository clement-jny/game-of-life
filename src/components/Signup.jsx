import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
	const [firstname, setFirstname] = useState("Clément");
	const [lastname, setLastname] = useState("Jaunay");
	const [email, setEmail] = useState("c.j@mail.com");
	const [password, setPassword] = useState("1234");
	const [passwordConfirm, setPasswordConfirm] = useState("1234");
	const [birthday, setBirthday] = useState("2001-10-25");
	const [gender, setGender] = useState("");

	const [iconPassword, setIconPassword] = useState("eye-outline");
	const [iconPasswordConfirm, setIconPasswordConfirm] = useState("eye-outline");

	const [typePassword, setTypePassword] = useState("password");
	const [typePasswordConfirm, setTypePasswordConfirm] = useState("password");

	function showPassword() {
		if (iconPassword === "eye-outline") {
			setIconPassword("eye-off-outline");
			setTypePassword("text");
		}
		else {
			setIconPassword("eye-outline");
			setTypePassword("password");
		}
	};
	function showPasswordConfirm() {
		if (iconPasswordConfirm === "eye-outline") {
			setIconPasswordConfirm("eye-off-outline");
			setTypePasswordConfirm("text");
		}
		else {
			setIconPasswordConfirm("eye-outline");
			setTypePasswordConfirm("password");
		}
	};

	return (
		<form>
			<h1>Inscription</h1>

			<div className="form-control">
				<label className="input-group">
					<span>Firstname</span>
					<input name="firstname" className="input input-bordered" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Lastname</span>
					<input name="lastname" className="input input-bordered" type="text" placeholder="Nom" value={lastname} onChange={(e) => setLastname(e.target.value)} />
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Email</span>
					<input name="email" className="input input-bordered" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Mot de passe</span>
					<input name="password" className="input input-bordered" type={typePassword} placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="button" className="btn btn-square" onClick={() => showPassword()}>
						<ion-icon name={iconPassword}></ion-icon>
					</button>
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Confirmation du mot de passe</span>
					<input name="passwordConfirm" className="input input-bordered" type={typePasswordConfirm} placeholder="Confirmation du mot de passe" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
					<button type="button" className="btn btn-square" onClick={() => showPasswordConfirm()}>
						<ion-icon name={iconPasswordConfirm}></ion-icon>
					</button>
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Date de naissance</span>
					<input name="birthday" className="input input-bordered" type="date" placeholder="Date de naissance" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Genre</span>
					<select className="select select-bordered">
						<option disabled selected>Select</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</label>
			</div>

			<div>
				<meter id="passwordStrength" value="24" min="0" max="100" low="25" high="75" optimum="100"></meter>
			</div>

			<Link to="/" className="btn">Accueil</Link>
			<button type="submit" className="btn">S'inscrire</button>
		</form>
	);
};