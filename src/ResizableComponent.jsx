import { useState } from "react";

import "./ResizableComponent.css";

const ResizableComponent = ({ Component }) => {
  const [isDragged, setIsDragged] = useState(false);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleBeforeDrag = (e) => {
    setCurrentX(e.clientX);
    setCurrentY(e.clientY);
    setIsDragged(true);
  };

  const handleAfterDrag = (e) => {
    setIsDragged(false);
  };

  const handleDrag = (e) => {
    if (isDragged) {
      const xDiff = Math.abs(currentX - e.clientX);
      const yDiff = Math.abs(currentY - e.clientY);
      const newWidth = currentX > e.clientX ? width - xDiff : width + xDiff;
      const newHeight = currentY > e.clientY ? height - yDiff : height + yDiff;

      setCurrentX(e.clientX);
      setCurrentY(e.clientY);

      setWidth(newWidth);
      setHeight(newHeight);
    }
  };

  return (
    <>
      {isDragged && (
        <div
          className="resizable_component_overlay"
          onMouseUp={handleAfterDrag}
          onMouseMove={handleDrag}
        />
      )}
      <div className="resizable_component_container">
        <Component width={width} height={height} />
        <img
          draggable={false}
          width="18px"
          onMouseDown={handleBeforeDrag}
          src="resize_icon.svg"
          className="resizable_component_icon"
        />
      </div>
    </>
  );
};

export default ResizableComponent;
