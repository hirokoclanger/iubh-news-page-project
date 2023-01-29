import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import TitleBar from "./components/TitleBar";
import "./app.css";

// Default body of the app that will be  loaded by default and run all other 
// components inside of it
function App() {
    return (
        <div>
            <TitleBar />
            <NewsContextProvider>
                <News />
            </NewsContextProvider>
        </div>
    );
}

export default App;
