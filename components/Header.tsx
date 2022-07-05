import { ReactNode } from "react";

// Define default Brand / Logo props.
const defaultBrandProp = {
    brand: <h1 className="header__title">FEM Interactive Comments.</h1>,
};

// Define Header props.
type HeaderProps = { children? : ReactNode } & typeof defaultBrandProp;

// Header component.
const Header = ( { brand, children } : HeaderProps ) => {
    return (
        <header className="header w-full flex justify-center md:justify-start p-2 md:p-8">
            { brand }
            <div>
                { children }
            </div>
        </header>
    );
}
Header.defaultProps = defaultBrandProp;

export default Header;