import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import {Routes, Route, Navigate} from 'react-router-dom';

import HomePage from "./pages/homePage";
// import MoodBoardPage from "./pages/moodBoardPage";
import ProjectsPage from "./pages/projectsPage";
import ServicesPage from "./pages/servicesPage";
import ContactUsPage from "./pages/contactUsPage";
import Header from "./components/navbar";
import Footer from "./components/footer";
import PageNotFound from "./pages/pageNotFound";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                {/*<Route path={'/moodboard'} element={<MoodBoardPage/>}/>*/}
                <Route path={'/projects'} element={<ProjectsPage/>}/>
                <Route path={'/services'} element={<ServicesPage/>}/>
                <Route path={'/contactUs'} element={<ContactUsPage/>}/>
                <Route path={'/404'} element={<PageNotFound/>}/>
                <Route path={'/*'} element={<Navigate to='/'/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
