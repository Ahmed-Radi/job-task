import './App.css';
import Layout from './components/Layout';
import Discussion from './page/Discussion';
import Unit from './page/Unit';
import {
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path='/' element={<Discussion />} />
                    <Route path='/unit' element={<Unit />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
