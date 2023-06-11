import { useEffect, useState, useCallback } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { MdLuggage } from "react-icons/md";
import { useLocation } from "react-router-dom";
import bagsharemind from "../../../apis/bagsharemind";
import { TbPlane } from "react-icons/tb";
import { getFullFormattedDate } from "../../../utilities/common";
import { VscCircleSmallFilled } from "react-icons/vsc";
import { GiWeight } from "react-icons/gi";
import { BsCurrencyRupee } from "react-icons/bs";

import Bag from "../../../types/bags";

const BagResults = () => {
  const location = useLocation();

  const [bags, setBags] = useState<Bag[]>([]);

  const getBagsList = useCallback(async () => {
    const response = await bagsharemind.get(
      `/bag?flightNumber=${location.state.flightNumber}&travelDate=${location.state.travelDate}`
    );
    setBags(response.data);
  }, [location.state.flightNumber, location.state.travelDate]);

  useEffect(() => {
    getBagsList();
  }, [getBagsList]);

  return (
    <Container>
      <div className="m-1 mt-4 mb-3">
        <TbPlane /> {location.state.fromCity} to {location.state.toCity}{" "}
        <VscCircleSmallFilled />{" "}
        {getFullFormattedDate(location.state.travelDate)}{" "}
        <VscCircleSmallFilled /> {location.state.flightNumber}
      </div>
      <div className="mt-4">
        {bags.map((bag, index) => {
          return (
            <Card key={index} className="m-1 my-2" border="dark">
              <Card.Header>
                <Row className="text-center align-items-center mb-3 mb-lg-0">
                  <Col className="d-lg-none">
                    <div className="d-flex align-items-center text-center">
                      <div className="flex-fill">
                        <GiWeight size={"18px"} />
                        <span> {bag.weightAvailable}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-center">
                      <div className="flex-fill">
                        <MdLuggage /> <span>x{bag.numberOfBags}</span>
                      </div>
                    </div>
                  </Col>
                  <Col className="d-none d-lg-block">
                    {bag.userInfo.firstName}
                  </Col>
                  <Col className="d-none d-lg-block">
                    <div className="d-flex align-items-center text-center">
                      <div className="flex-fill">
                        <GiWeight size={"18px"} />
                        <span> {bag.weightAvailable}</span>
                      </div>
                    </div>
                  </Col>
                  <Col className="d-none d-lg-block">
                    <div className="d-flex align-items-center text-center">
                      <div className="flex-fill">
                        <MdLuggage /> <span>x{bag.numberOfBags}</span>
                      </div>
                    </div>
                  </Col>
                  <Col className="d-none d-lg-block">
                    <div>
                      <BsCurrencyRupee />
                      {bag.price}
                    </div>
                  </Col>
                  <Col className="text-center">
                    <Button variant="dark">BOOK</Button>
                  </Col>
                </Row>
                <Row className="text-center align-items-center d-lg-none">
                  <Col>{bag.userInfo.firstName}</Col>
                  <Col className="text-center">
                    <BsCurrencyRupee />
                    {bag.price}
                  </Col>
                </Row>
              </Card.Header>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default BagResults;
