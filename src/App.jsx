import React, {useState, useEffect} from 'react';
import scrollreveal from 'scrollreveal';

import './sass/index.scss';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Free from './components/Free';
import Clients from './components/Clients';
import SuperRare from './components/superRare';
import Release from './components/Release';
import Like from './components/Like';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('dark');

    // change light mode or dark mode
    const changeTheme = () => {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    };

    // scrollreveal =  ScrollReveal is a JavaScript library for easily 
    // animating elements as they enter/leave the viewport.
    useEffect(() => {
        // initialize animation
        const registerAnimation = () => {
            const sr = scrollreveal({
                origin: 'bottom',
                distance: '80px',
                duration: 200,
                reset: false,
            });
            sr.reveal(
                `
                    nav,
                    .home,
                    .free,
                    .clients,
                    .super-rare,
                    .release,
                    .like,
                    .signup,
                    footer
                `,
                { interval: 500 }
            );
        };
        registerAnimation();
    }, []);

    window.setTimeout(() => {
        const home = document.getElementsByClassName("home");
        home[0].style.transform = "none";
        const nav = document.getElementsByTagName("nav");
        nav[0].style.transform = "none";
    }, 1500);

    return (
        <div data-theme = {theme} className = 'app-container'>
            <ScrollToTop />
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <Home />
            <Free />
            <Clients />
            <SuperRare />
            <Release />
            <Like />
            <Signup />
            <Footer />
        </div>
    )
}

export default App
