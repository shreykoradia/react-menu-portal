# react-menu-portal

React Menu Portal is a lightweight React component that simplifies the integration of custom dropdown menus into your applications. Whether you're building a table, form, or any other UI component, React Menu Portal allows you to easily open dropdown menus in a portal, ensuring proper rendering and positioning regardless of the parent container.

## Features

- Seamlessly integrate custom dropdown menus into any React application.
- Render dropdown menus in a portal to avoid styling and positioning issues.
- Easily open dropdown menus on user interaction, such as clicking or hovering.

## Why We Built It

Integrating dropdown menus into complex UI components like tables or forms can be challenging, especially when dealing with z-index stacking contexts and overflow issues. React Menu Portal simplifies this process by handling the rendering of dropdown menus in a portal, ensuring they appear above other elements and are positioned correctly within the viewport.

## Key Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Get Started

To get started with React Menu Portal, install the package via npm:

```bash
npm install react-menu-portal
```

## How to use react-menu-portal component

Import PortalWrapper where you want to open the dropdown let's say in a form you built a custom dropdown with react-select named `CommonDropdown`.

```
import {PortalWrapper} from "react-menu-portal"

// rest of the code

<PortalWrapper ref={dropdownRef}>
          {(position) => (
            <CommonDropdown
              {...props}
              menuListPosition={position}
            />
          )}
</PortalWrapper>

```

now let's see how do you configure your custom dropdown that is built in react-select for example, we will just use createPortal from `react-dom`

```
import createPortal from 'react-dom'

const MenuList = wrapMenuList((props) =>
    menuListPosition ? (
      createPortal(
        <div
          style={{ position: "absolute", top: menuListPosition.top, left: menuListPosition.left }}
        >
          <CustomMenuComponent
            props={props}
            title={createTitle}
            isVisible={!isEmpty(createDetails)}
            handleCreate={() => setIsModalOpen(true)}
          />
        </div>,
        document.body
      )
    ) : (
      <CustomMenuComponent
        props={props}
        title={createTitle}
        isVisible={!isEmpty(createDetails)}
        handleCreate={() => setIsModalOpen(true)}
      />
    )
  );

```

So we just need to add our menuList Component and load it inside the create-portal component.

```
createPortal(
        <div
          style={{ position: "absolute", top: menuListPosition.top, left: menuListPosition.left }}
        >
         <!-- Any Menu Component of the dropdown (React-Select , React-Async-Paginate and many more) above we configured MenuList Component of React-Select -->
        </div>,
        document.body
      )
```

Future Enhancement :

Currently We are developing and testing more and more to cancel out and optimise the above steps,

If you're interested in contributing to or collaborating on React Menu Portal, we'd love to hear from you! Feel free to reach out to us via email at [Shrey's Email](device.shreykoradia@gmail.com) or on Twitter [@shreykoradia](https://twitter.com/shreykoradia). Let's work together to make React Menu Portal the go-to solution for integrating custom dropdown menus in React applications!
