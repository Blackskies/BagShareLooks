import { ReactNode, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FlightsList from "../../../types/flights";
import { SlPlane } from "react-icons/sl";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

type Props = {
  flights: FlightsList[];
  children: ReactNode | undefined;
};

const FlightResults = ({ flights, children }: Props) => {
  const [expandRows, setExpandRows] = useState<number[]>([]);

  const handleExpandRows = (id: number) => {
    let expandedRowList = expandRows;
    let isCurrentRowExpanded = expandedRowList.includes(id);
    let newExpandRows = isCurrentRowExpanded
      ? expandedRowList.filter((row) => row !== id)
      : expandedRowList.concat(id);
    setExpandRows(newExpandRows);
  };

  return (
    <div className="mt-4">
      {children}
      {flights.map((flight, index) => {
        return (
          <Card key={index} className="m-1 my-2" border="dark">
            <Card.Header>
              <Row
                className="text-center align-items-center"
                onClick={() => handleExpandRows(index)}
              >
                <Col className="text-start text-md-center">
                  <div>{flight.airlines}</div>
                </Col>
                <Col className="d-none d-md-block">
                  <SlPlane size="15px" /> {flight.flightNumber}
                </Col>
                <Col>
                  <div>{flight.departureTime}</div>
                  <div>{flight.fromCity}</div>
                </Col>
                <Col>
                  <div>{flight.arrivalTime}</div>
                  <div>{flight.toCity}</div>
                </Col>
                <Col className="text-end">
                  {expandRows.includes(index) ? (
                    <FiChevronUp size="30px" />
                  ) : (
                    <FiChevronDown size="30px" />
                  )}
                </Col>
              </Row>
            </Card.Header>
            {expandRows.includes(index) && (
              <>
                <Card.Body onClick={() => handleExpandRows(index)}>
                  <Row className="text-center align-items-center">
                    <Col className="col-6">
                      <div>{flight.airlines}</div>
                      <div>{flight.stops}</div>
                    </Col>
                    <Col>
                      <div>{flight.departureTime}</div>
                      <div>{flight.fromCity}</div>
                    </Col>
                    <Col>
                      <div>{flight.arrivalTime}</div>
                      <div>{flight.toCity}</div>
                    </Col>
                  </Row>
                  <Row className="text-center align-items-center mt-3 justify-content-between">
                    <Col className="p-0">
                      <Row>
                        <Col>
                          <div>
                            <SlPlane size="15px" /> {flight.flightNumber}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="text-center">
                      <Button variant="dark" className="px-3 py-2">
                        Continue
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default FlightResults;
