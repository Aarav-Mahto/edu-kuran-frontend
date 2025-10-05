import App from "@/src/App";
import { registerRootComponent } from 'expo';

function Main(){
    return <App />
}

registerRootComponent(Main);

export default Main;