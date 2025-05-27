import { useState, useRef, useEffect } from "react";

const DropdownModal = ({ isOpen, onClose, triggerRef, buttons }) => {
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && triggerRef?.current && modalRef?.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const modalRect = modalRef.current.getBoundingClientRect();

      const top = triggerRect.top - window.scrollY - 90;
      const left =
        triggerRect.left +
        window.scrollX +
        triggerRect.width / 2 -
        modalRect.width / 2;

      setPosition({ top, left });
    }
  }, [isOpen, triggerRef]);

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
      className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-48"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: position.left < 0 ? "translateX(50%)" : "none",
      }}
    >
      {buttons.map((button, index) => {
        const IconComponent = button.icon;
        return (
          <button
            key={button.id || index}
            onClick={() => {
              if (button.onClick) button.onClick();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            {IconComponent && <IconComponent size={16} />}
            <span>{button.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DropdownModal;
