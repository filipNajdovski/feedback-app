import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLInk from './components/AboutIconLInk';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

    const HomePage = () => {
        return(
            <>
            <FeedbackForm />
    
            <FeedbackStats />
    
            <FeedbackList />
            </>
        )
    }

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={<HomePage/>} />

                    
                        <Route path='/about' element={<AboutPage/>} />                    
                    </Routes>
                </div>

                <AboutIconLInk />
            </Router>
        </FeedbackProvider>
    )
}

export default App;