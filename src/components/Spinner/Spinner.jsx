import './Spinner.scss';

const Spinner = () => {

    return (
        <div className="Spinner" data-testid="Spinner">
            <div className="pos-center">
                <div className="loader"></div>
            </div>
        </div>
    )
};

export default Spinner;
