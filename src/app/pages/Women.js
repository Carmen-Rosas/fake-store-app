import { useFetch } from "../functions/useFetch";
import Card from "../components/Card";

export default function Women() {
    const data = useFetch("/category/women's%20clothing");

    return (
        <div>
            <Card data={data}/>
        </div>
            
    )
}