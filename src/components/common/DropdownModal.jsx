/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";

const DropdownModal = ({ isOpen, onClose, triggerRef, buttons }) => {
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [placement, setPlacement] = useState("bottom");

  useEffect(() => {
    if (isOpen && triggerRef?.current && modalRef?.current) {
      calculateOptimalPosition();

      const handleResize = () => calculateOptimalPosition();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isOpen, buttons?.length]);

  const calculateOptimalPosition = () => {
    if (!triggerRef?.current || !modalRef?.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const modalRect = modalRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };

    const spacing = 8;
    let newPosition = { top: 0, left: 0 };
    let newPlacement = "bottom";

    const spaceBelow = viewport.height - (triggerRect.bottom + spacing);
    const spaceAbove = triggerRect.top - spacing;
    const spaceRight = viewport.width - (triggerRect.right + spacing);
    const spaceLeft = triggerRect.left - spacing;

    if (spaceBelow >= modalRect.height) {
      newPlacement = "bottom";
      newPosition.top = triggerRect.bottom + spacing + viewport.scrollY;
      newPosition.left = triggerRect.left + viewport.scrollX;
    } else if (spaceAbove >= modalRect.height) {
      newPlacement = "top";
      newPosition.top =
        triggerRect.top - modalRect.height - spacing + viewport.scrollY;
      newPosition.left = triggerRect.left + viewport.scrollX;
    } else if (spaceRight >= modalRect.width) {
      newPlacement = "right";
      newPosition.top = triggerRect.top + viewport.scrollY;
      newPosition.left = triggerRect.right + spacing + viewport.scrollX;
    } else if (spaceLeft >= modalRect.width) {
      newPlacement = "left";
      newPosition.top = triggerRect.top + viewport.scrollY;
      newPosition.left =
        triggerRect.left - modalRect.width - spacing + viewport.scrollX;
    } else {
      if (spaceBelow >= spaceAbove) {
        newPlacement = "bottom";
        newPosition.top = triggerRect.bottom + spacing + viewport.scrollY;
        newPosition.left = triggerRect.left + viewport.scrollX;
      } else {
        newPlacement = "top";
        newPosition.top = Math.max(
          spacing + viewport.scrollY,
          triggerRect.top - modalRect.height - spacing + viewport.scrollY
        );
        newPosition.left = triggerRect.left + viewport.scrollX;
      }
    }

    if (newPlacement === "bottom" || newPlacement === "top") {
      const centeredLeft =
        triggerRect.left +
        (triggerRect.width - modalRect.width) / 2 +
        viewport.scrollX;

      if (
        centeredLeft >= spacing &&
        centeredLeft + modalRect.width <= viewport.width - spacing
      ) {
        newPosition.left = centeredLeft;
      } else if (
        newPosition.left + modalRect.width >
        viewport.width - spacing
      ) {
        newPosition.left =
          viewport.width - modalRect.width - spacing + viewport.scrollX;
      } else if (newPosition.left < spacing) {
        newPosition.left = spacing + viewport.scrollX;
      }
    }

    if (newPlacement === "left" || newPlacement === "right") {
      const centeredTop =
        triggerRect.top +
        (triggerRect.height - modalRect.height) / 2 +
        viewport.scrollY;

      if (
        centeredTop >= spacing &&
        centeredTop + modalRect.height <= viewport.height - spacing
      ) {
        newPosition.top = centeredTop;
      } else if (
        newPosition.top + modalRect.height >
        viewport.height - spacing
      ) {
        newPosition.top =
          viewport.height - modalRect.height - spacing + viewport.scrollY;
      } else if (newPosition.top < spacing) {
        newPosition.top = spacing + viewport.scrollY;
      }
    }

    setPosition(newPosition);
    setPlacement(newPlacement);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        triggerRef?.current &&
        !triggerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className={`fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-48 max-w-64 ${
        placement === "top" ? "animate-slideUp" : "animate-slideDown"
      }`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {buttons?.map((button, index) => {
        const IconComponent = button.icon;
        return (
          <button
            key={button.id || index}
            onClick={() => {
              if (button.onClick) button.onClick();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 text-left"
          >
            {IconComponent && <IconComponent size={16} />}
            <span className="flex-1">{button.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DropdownModal;
