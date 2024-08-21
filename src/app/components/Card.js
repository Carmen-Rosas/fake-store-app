import { Link } from "react-router-dom"
import cropText from "../functions/cropText"

export default function Card({ data }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data?.map((element) => (
                <div key={element.id} className="flex flex-col items-center justify-evenly bg-white rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 shadow-md">
                    <Link to={`../product/${element.id}`}><img className="w-20" src={element.image} alt={element.title} /></Link>
                    <p className="text-center">{cropText(element.title, 30)}</p>
                    <small>${element.price}</small>
                </div>
            ))}
        </div>      
    )
}


