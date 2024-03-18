import React from "react";

type positionProps = {
  top: number;
  left: number;
};

const PortalWrapper = React.forwardRef<
  HTMLDivElement,
  { children: (position: positionProps) => JSX.Element }
>(({ children }, ref) => {
  const [openDropdownMenu, setOpenDropdownMenu] =
    React.useState<boolean>(false);

  const [position, setPosition] = React.useState<positionProps>({
    top: 0,
    left: 0,
  });

  const handleDropdownClick = () => {
    setOpenDropdownMenu(!openDropdownMenu);
    if (ref && "current" in ref && ref.current) {
      const { top, left, height } = ref.current.getBoundingClientRect();
      setPosition({ top: top + height, left });
    }
  };

  return (
    <div ref={ref} className="w-full" onClick={handleDropdownClick}>
      {children(position)}
    </div>
  );
});

export default PortalWrapper;
