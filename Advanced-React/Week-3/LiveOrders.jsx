import React from "react";

const Row = ({children, spacing}) => {
    const childStyle = {
        marginLeft: `${spacing}px`,
    };
    return (
        <div className="Row">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style,
                    }
                });
            })}
        </div>
    );
}

export default function LiveOrders() {
    return (
        <div>
            <Row spacing={32}>
                <p>Pizza  Margratia</p>
                <p>2</p>
                <p>30$</p>
                <p>10:30</p>
                <p>John</p>
            </Row>
        </div>
    );
}