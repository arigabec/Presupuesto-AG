import { useState } from "react";

export const Card = () => {
    const [presupuesto, setPresupuesto] = useState(0);

    const handleSubmit = () => {
        console.log(presupuesto);
    }

    return (
        <div className="bg-white shadow-lg rounded-md py-5">
            <h2 className="text-stone-500 text-3xl text-center font-bold">Presupuesto</h2>
            <form className="py-5 my-5" onSubmit={handleSubmit}>
                <input 
                    id="presupuesto" 
                    type="text" 
                    placeholder="Ingrese presupuesto" 
                    value={presupuesto}
                    onChange={e => {console.log(e.target.value)}}
                    className="border-2 w-full p-1"
                />
                <input 
                    type="submit"
                    className="bg-sinc-700 w-full p-5 rounded-md my-5 text-white font-bold cursor-pointer hover:bg-zinc-300"
                />
            </form>
        </div>
    );
};

export default Card