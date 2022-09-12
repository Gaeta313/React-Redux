import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const navigate = useNavigate();
  const jobsStore = useSelector((state) => state.search.content);
  const favLength = useSelector((state) => state.favourites.content.length);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button variant="primary" onClick={() => navigate("/favourites")}>
            Favourites
            <span className="ml-2">{favLength}</span>
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsStore.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
