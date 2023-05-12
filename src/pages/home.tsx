import { useState, useEffect } from "react";
import { Col, Container, Row, ThemeProvider } from "react-bootstrap";
import bagsharemind from "../apis/bagsharemind";
import BookingList from "../types/bookings";
import { SlPlane } from "react-icons/sl";

const Home = () => {
  const intialBookins = [
    {
      id: null,
      flightNumber: "",
      weightAvailable: "",
      departureTime: "",
      arrivalTime: "",
      departureDate: "",
      departureCity: "",
      arrivalCity: "",
      price: 0,
    },
  ];
  const [bookings, setBookings] = useState<BookingList[]>(intialBookins);

  useEffect(() => {
    getBookingsList();
  }, []);

  const getBookingsList = async () => {
    const response = await bagsharemind.get("/bookings/all");
    setBookings(response.data);
  };

  console.log("Bookings", bookings[0]);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container>
        {bookings.map((booking, index) => {
          return (
            <Row
              key={index}
              className="text-bg-dark p-3 text-center align-items-center m-1 shadow "
            >
              <Col className="text-start d-md-none">
                <div className="d-inline-flex align-items-center">
                  <SlPlane size="15px" />
                  &nbsp;{booking.flightNumber}
                </div>
                <div className="text-white-50 ">{booking.departureDate}</div>
              </Col>
              <Col className="text-start d-none d-md-block">
                <SlPlane size="15px" /> {booking.flightNumber}
              </Col>
              <Col className="text-start d-none d-md-block">
                {booking.departureDate}
              </Col>
              <Col>
                <div>{booking.departureTime}</div>
                <div className="text-white-50">{booking.departureCity}</div>
              </Col>
              <Col>
                <div>{booking.arrivalTime}</div>
                <div className="text-white-50">{booking.arrivalCity}</div>
              </Col>
              <Col>{booking.weightAvailable}</Col>
              <Col>{booking.price}</Col>
            </Row>
          );
        })}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
