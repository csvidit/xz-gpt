import NavItem from "./NavItem";

const DesktopNav = (props: { isAuthenticated: boolean }) => {
  if (props.isAuthenticated) {
    return (
      <nav className="flex flex-row space-x-4 items-center">
        <NavItem href="/chat">Chat</NavItem>
        <NavItem href="/history">History</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/api/auth/logout">Log Out</NavItem>
      </nav>
    );
  }
  else
  {
    return (
        <nav className="flex flex-row space-x-4 items-center">
          <NavItem href="/api/auth/login">Log In</NavItem>
          <NavItem href="/about">About</NavItem>
        </nav>
      );
  }
};

export default DesktopNav;
