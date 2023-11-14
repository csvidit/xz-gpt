import NavItem from "./NavItem";

const DesktopNav = (props: { isAuthenticated: boolean }) => {
  if (props.isAuthenticated) {
    return (
      <div className="flex flex-row space-x-4 items-center">
        <NavItem href="/chat">Chat</NavItem>
        <NavItem href="/history">History</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/api/auth/logout">Log Out</NavItem>
      </div>
    );
  }
  else
  {
    return (
        <div className="flex flex-row space-x-4 items-center">
          <NavItem href="/api/auth/login">Log In</NavItem>
          <NavItem href="/about">About</NavItem>
        </div>
      );
  }
};

export default DesktopNav;
