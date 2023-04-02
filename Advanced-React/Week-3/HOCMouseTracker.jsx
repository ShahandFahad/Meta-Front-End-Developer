import { useState, useEffect, React } from "react";

// HOC is a function take a component and return new component
const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition(
          {
            x: e.clientX,
            y: e.clientY,
          }
        )
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      }
    }, []);
    return (
      <WrappedComponent {...props} mousePosition={mousePosition} />
    )
  }
}

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div className="BasicTracker">
      <p>Mouse Position</p>
      <div className="Row">
        <span>X: {mousePosition.x}  </span>
        
        <span>Y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

// 
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

export default function HOCMouseTracker() {
  return (
    <div>
        <header>
          Little Lemon Resturant 🍕
        </header>
        <PanelMouseTracker />
        <PointMouseTracker />
    </div>
  );
}