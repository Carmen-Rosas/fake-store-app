import { useFetch } from "../functions/useFetch";
import Card from "../components/Card";

export default function Shop() {
    const data = useFetch("");

    return (
        <div>
            <Card data={data}/>
        </div>
        
    )
}