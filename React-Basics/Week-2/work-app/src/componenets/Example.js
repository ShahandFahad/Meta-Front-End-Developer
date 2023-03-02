const bool = false; 

function Example(props) {
    const getRandomNum = () => Math.floor(Math.random() * 10) + 1;

    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>

            <h1>
              New Random  {
                getRandomNum() > 5 ? "Greater than Five" : "Less Than Five"
              }
            </h1>
            <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
        </div>
    );
};

export default Example;

