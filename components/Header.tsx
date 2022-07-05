import { ReactNode } from "react";

// Define default Brand / Logo props.
const defaultBrandProp = {
    brand: <h1>FEM Interactive Comments</h1>,
};

// Define Header props.
type HeaderProps = { children? : ReactNode } & typeof defaultBrandProp;

// Header component.
const Header = ( { brand, children } : HeaderProps ) => {
    return (
        <header className="w-full flex justify-center md:justify-start p-4">
            { brand }
            <div>
                { children }
            </div>
        </header>
    );
}
Header.defaultProps = defaultBrandProp;

export default Header;