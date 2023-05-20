import { ChangeEvent, ReactNode, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FlightsList from "../../../types/flights";
import bagsharemind from "../../../apis/bagsharemind";
import { Cities } from "../../constants";
import { getDate, getFullFormattedDate } from "../../../utilities/common";
import { VscCircleSmallFilled } from "react-icons/vsc";
import { TbPlane } from "react-icons/tb";

type Props = {
  setFlights: React.Dispatch<React.SetStateAction<FlightsList[]>>;
  isSearchTriggered: boolean;
  setIsSearchTriggered: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchHeader: React.Dispatch<React.SetStateAction<ReactNode | undefined>>;
};

const SearchFlight = ({
  setFlights,
  isSearchTriggered,
  setIsSearchTriggered,
  setSearchHeader,
}: Props) => {
  const [fromCity, setFromCity] = useState("Delhi");
  const [toCity, setToCity] = useState("Visakhapatnam");
  const [travelDate, setTravelDate] = useState<string>(getDate());

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "fromCity") {
      setFromCity(e.target.value);
    } else {
      setToCity(e.target.value);
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLDataElement>) => {
    setTravelDate(e.target.value);
  };

  const searchFlights = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isSearchTriggered) {
      setIsSearchTriggered(true);
    }
    event.preventDefault();
    const fromCityObj = Cities.filter((city) => {
      return city.value === fromCity;
    });
    const toCityObj = Cities.filter((city) => {
      return city.value === toCity;
    });
    const response = await bagsharemind.get(
      `/flights?fromCity=${fromCityObj[0].key}&toCity=${toCityObj[0].key}&travelDate=${travelDate}`
    );
    const searchHeader = (
      <div className="m-1 mb-3">
        <TbPlane /> {fromCity} to {toCity} <VscCircleSmallFilled />{" "}
        {getFullFormattedDate(travelDate)}
      </div>
    );
    setFlights(response.data);
    setSearchHeader(searchHeader);
  };

  return (
    <Form className="m-1">
      <Row className="d-flex align-items-end">
        <Form.Group as={Col} xs={12} md={3} className="mt-2 mb-2">
          <Form.Label>From</Form.Label>
          <Form.Select
            name="fromCity"
            aria-label="From"
            value={fromCity}
            onChange={(event) => handleSelectChange(event)}
          >
            {Cities.map((city, index) => {
              return (
                <option value={city.value} key={index}>
                  {city.value}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} xs={12} md={3} className="mt-2 mb-2">
          <Form.Label>To</Form.Label>
          <Form.Select
            name="toCity"
            aria-label="To"
            value={toCity}
            onChange={(event) => handleSelectChange(event)}
          >
            {Cities.map((city, index) => {
              return (
                <option value={city.value} key={index}>
                  {city.value}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} xs={12} md={3} className="mt-2 mb-2">
          <Form.Label>Travel Date</Form.Label>
          <Form.Control
            type="date"
            value={travelDate}
            onChange={(event) => handleDateChange(event)}
          />
        </Form.Group>
        <Form.Group as={Col} xs={12} md={3}>
          <Button
            as="input"
            type="submit"
            value="Search"
            className="form-control mb-sm-2 mt-3"
            variant="dark"
            onClick={(event) => searchFlights(event)}
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default SearchFlight;
