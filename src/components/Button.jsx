//import { useState } from "react";

export const Button = ({ title, click }) => {
    //const [title, setTitle] = useState(title);

    return(
        <button>{title}</button>
        // onClick={() => {
        //     setTitle((previousTitle) => {
        //         return previousTitle === 'test' ? 'test2' : 'test';
        //     })
        // }}
    );
};