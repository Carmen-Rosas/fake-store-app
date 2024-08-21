import { useFetch } from "../functions/useFetch";
import Card from "../components/Card";

export default function Men() {
    const data = useFetch("/category/men's%20clothing");

    return (
        <div>
            <Card data={data}/>
        </div>
            
    )
}