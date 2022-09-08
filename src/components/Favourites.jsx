import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

const Favourites = () => {
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Container >
      <Row className="my-4">
        <Col xs={10} className="mx-auto my-3">
          <Button variant="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          {favourites.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
