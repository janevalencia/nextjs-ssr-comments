import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ( { children } : { children: ReactNode } ) => {
    return (
        <>
            <Header />
            { children }
            <Footer 
                github="https://github.com/janevalencia" 
                instagram="https://www.instagram.com/janevlencia/" 
                linkedin="https://www.linkedin.com/in/janevalencia/" 
                medium="https://medium.com/@janevalencia"
            />
        </>
    );
}

export default MainLayout;