import { ReactNode, useState } from "react";
import { Container, ThemeProvider } from "react-bootstrap";
import FlightSearch from "../components/views/flights/flight_search";
import FlightResults from "../components/views/flights/flight_results";
import FlightsList from "../types/flights";

const Flights = () => {
  //const location = useLocation();
  const [flights, setFlights] = useState<FlightsList[]>([]);
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  const [searchHeader, setSearchHeader] = useState<ReactNode | undefined>(
    undefined
  );

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container>
        <FlightSearch
          setFlights={setFlights}
          isSearchTriggered={isSearchTriggered}
          setIsSearchTriggered={setIsSearchTriggered}
          setSearchHeader={setSearchHeader}
        />
        {flights.length > 0 ? (
          <FlightResults flights={flights}>{searchHeader}</FlightResults>
        ) : isSearchTriggered ? (
          <div className="text-center mt-4">
            <div>Flights on these dates are not available.</div> Please change
            the search criteria.
          </div>
        ) : (
          <div className="text-center mt-4">
            <div>Placeholder for Homepage Content </div>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Flights;
