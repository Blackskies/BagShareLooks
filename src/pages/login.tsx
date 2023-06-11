import { useGoogleLogin } from "@react-oauth/google";
import { Button, Container } from "react-bootstrap";
import TokenResponse, { ProfileResponse } from "../types/identity";
import { useNavigate } from "react-router-dom";
import bagsharemind from "../apis/bagsharemind";

const Login = () => {
  const navigate = useNavigate();

  const navToFlights = (userProfile: ProfileResponse) => {
    navigate(`/flights`, { state: userProfile });
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse: TokenResponse) => {
      getUserProfile(codeResponse.access_token);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const getUserProfile = async (access_token?: string) => {
    const request = { accessToken: access_token };
    const response = await bagsharemind.post(`/login`, request);
    navToFlights(response.data);
  };

  return (
    <Container className="d-flex vh-100 align-items-center">
      <div className="d-block w-100 text-center">
        <h6>Login into your BagShare account</h6>
        <Button
          as="input"
          type="submit"
          value="Sign in with Google"
          className="mt-3"
          variant="dark"
          onClick={() => login()}
        />
      </div>
    </Container>
  );
};

export default Login;
