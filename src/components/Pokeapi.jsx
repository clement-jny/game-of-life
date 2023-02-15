import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Pokeapi = () => {
	const [pokemons, setPokemons] = useState([]);
	const [search, setSearch] = useState("");

	const [limit, setLimit] = useState(20);
	const [urlToFetch, setUrlToFetch] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`);

	const [previousUrl, setPreviousUrl] = useState(null);
	const [nextUrl, setNextUrl] = useState(null);

	useEffect(() => {
		setUrlToFetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`);

		fetch(urlToFetch)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				setPokemons(res.results);
				setPreviousUrl(res.previous);
				setNextUrl(res.next);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [limit, urlToFetch]);

	return (
		<div>
			<Link to="/" className="btn">Accueil</Link>
			<h1>Les pokémons</h1>

			<div className="form-control">
				<label className="input-group input-group-vertical">
					<span>Search</span>
					<input className="input input-bordered" type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Number</span>
					<select className="select select-bordered" onChange={(e) => setLimit(e.target.value)}>
						<option defaultValue="20">20</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
				</label>
			</div>

			<p>Number of pokemon : {pokemons.length}</p>

			<div className="btn-group">
				<button className={`btn ${previousUrl ?? "btn-disabled"}`}
				onClick={() => {
					setUrlToFetch(previousUrl);
				}}>Prev</button>

				<button className={`btn ${nextUrl ?? "btn-disabled"}`}
					onClick={() => {
						setUrlToFetch(nextUrl);
					}}>Next</button>
			</div>

			{
				pokemons.length > 0 ? (
					<div className="grid grid-cols-4 gap-7 m-8">
						{
							pokemons
								.filter(({ name }) => name.includes(search))
								.map(({ name, url }) => (
									<>
										<div className="card card-bordered bg-slate-100" key={name}>
											<figure className="px-10 pt-10">
												<img src="" alt={name} className="rounded-xl" />
											</figure>
											<div className="card-body items-center text-center">
												<h2 className="card-title">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
												<div className="card-actions">
													<label htmlFor={`modal-${name}`} className="btn">See more</label>
												</div>
											</div>
										</div>


										<input type="checkbox" htmlFor={`modal-${name}`} className="modal-toggle" />
										<label htmlFor={`modal-${name}`} className="modal cursor-pointer">
											<label className="modal-box relative" htmlFor=""></label>
											<h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
											<p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
										</label>
									</>
								))
						}
					</div>
				) : (<p>Pas de pokémon</p>)
			}
		</div>
	);
};