import { v4 as uuidv4} from 'uuid'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLInk from './components/AboutIconLInk';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])

    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const HomePage = () => {
        return(
            <>
            <FeedbackForm handleAdd={addFeedback}/>
    
            <FeedbackStats feedback={feedback} />
    
            <FeedbackList 
            feedback={feedback}
            handleDelete={deleteFeedback} 
            />
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