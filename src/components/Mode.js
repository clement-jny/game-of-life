export const Mode = () => {
	return (
		<fieldset>
			<legend>Sélectionner un mode</legend>

			<div>
				<input
					type="radio"
					id="manuel"
					name="mode"
					value="manuel"
					checked
				/>
				<label for="manuel">Manuel</label>
			</div>

			<div>
				<input type="radio" id="auto" name="mode" value="auto" />
				<label for="auto">Automatique</label>
			</div>
		</fieldset>
	);
};
