type SpinnerProps = {
    message? : string
}

const Spinner = ({message} : SpinnerProps) => {
    return (
        <span className="spinner w-full flex justify-center items-center gap-2 py-5">
            <span className="spinner__spin animate-spin relative flex h-4 w-4 rounded-sm"></span>
            <p className="spinner__text">{message}</p>
        </span>
    );
}

export default Spinner;