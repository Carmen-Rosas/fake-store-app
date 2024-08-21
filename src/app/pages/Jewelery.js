import { useFetch } from "../functions/useFetch";
import Card from "../components/Card";

export default function Jewelery() {
    const data = useFetch("/category/jewelery");

    return (
        <div>
            <Card data={data}/>
        </div>
    )
}