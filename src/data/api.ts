import axios from "axios";

export const myData: Record<string, any> = {};

export async function apiTest(name: string) {
    try {
        const response = await axios.post('http://localhost:8080/api/greet',{
            name: name,
        },{
            headers:{
                "Content-Type": 'Application/json',
            }
        });
    // }
    //Object.assign(myData, response.data);
    return response.data;
    } catch (error) {
        console.error("API Error: ", error)
        return {"message": "Failed to fetch data"};
    }
    
}