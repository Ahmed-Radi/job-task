import './App.css';
import Layout from './components/Layout';
import Discussion from './page/Discussion';

function App() {
    return (
        <div className="App">
            <Layout>
                <Discussion />
            </Layout>
        </div>
    );
}

export default App;
