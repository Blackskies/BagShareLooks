import { googleLogout } from "@react-oauth/google";
import { Container, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const PostLoginLayout = () => {
  const navigate = useNavigate();

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    navigate(`/`);
  };

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand className="text-light">BagShare</Navbar.Brand>
          <IoMdLogOut
            className="justify-content-end text-light"
            onClick={() => logOut()}
          />
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default PostLoginLayout;
