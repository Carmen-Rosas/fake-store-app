import Card from "../components/Card";
import { useFetch } from "../functions/useFetch";

export default function Electronics() {
    const data = useFetch("/category/electronics");

    return (
        <div>
            <Card data={data}/>
        </div>
            
    )
}