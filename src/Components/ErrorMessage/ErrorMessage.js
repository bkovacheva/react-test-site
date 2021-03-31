import "./ErrorMessage.css"

const ErrorMessage = ({
    children,
}) => {
    if (!children) {
        return null;
    }

    return (
        <p className="input-error">{children}</p>
    );
}

export default ErrorMessage;
