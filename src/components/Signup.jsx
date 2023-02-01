import { useState } from 'react';

export const Signup = () => {
    const [gender, setGender] = useState(``);

    return (
        <form>
            <h1>Inscription</h1>

            <div>
                <label htmlFor={`firstname`}>Prénom</label>
                <input id={`firstname`} name={`firstname`} type={`text`} placeholder={`Prénom`} />
            </div>

            <div>
                <label htmlFor={`lastname`}>Nom</label>
                <input id={`lastname`} name={`lastname`} type={`text`} placeholder={`Nom`} />
            </div>

            <div>
                <label htmlFor={`email`}>Email</label>
                <input id={`email`} name={`email`} type={`email`} placeholder={`Email`} />
            </div>

            <div>
                <label htmlFor={`password`}>Mot de passe</label>
                <input id={`password`} name={`password`} type={`password`} placeholder={`Mot de passe`} />
            </div>

            <div>
                <label htmlFor={`passwordConfirm`}>Confirmation du mot de passe</label>
                <input id={`passwordConfirm`} name={`passwordConfirm`} type={`password`} placeholder={`Confirmation du mot de passe`} />
            </div>

            <div>
                <label htmlFor={`birthday`}>Date de naissance</label>
                <input id={`birthday`} name={`birthday`} type={`date`} placeholder={`Date de naissance`} />
            </div>

            <div>
                <label htmlFor={`gender`}>Genre</label>
                <input id={`gender`} name={`gender`} type={`radio`} value={`male`} onChange={(e) => setGender(e.target.value)} /> Homme
                <input id={`gender`} name={`gender`} type={`radio`} value={`female`} onChange={(e) => setGender(e.target.value)} /> Femme
                <input id={`gender`} name={`gender`} type={`radio`} value={`other`} onChange={(e) => setGender(e.target.value)} /> Autre

                <select id={`gender`} name={`gender`}>
                    <option value={`male`}>Homme</option>
                    <option value={`female`}>Femme</option>
                    <option value={`other`}>Autre</option>
                </select>
            </div>

            <div>
                <meter id={`passwordStrength`} value={`24`} min={`0`} max={`100`} low={`25`} high={`75`} optimum={`100`}></meter>
            </div>

            <button type={`submit`}>S'inscrire</button>

            <p>{gender}</p>
        </form>
       
    );
};