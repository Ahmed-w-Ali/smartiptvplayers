import { Col, Row } from "react-bootstrap";

const Features = () => {
  return (
    <Row className="my-5">
      <Col xs={12} md={8}>
        <div className="w-100">
          <img
            src="/features.png"
            alt="features"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div>
      </Col>
      <Col xs={12} md={4}>
        <p className="my-1 fs-5 fw-light">
          Ability to add external Players Speed Test facility Integrated
          Support: Dynamic language switching Support: Picture-in-Picture Chrome
          Casting Improvements New Controls on the Media Player Auto Next
          Episode Play Supported Support: Clear Cache automatically and Manually
          TabView Supported The new way to download the content Load Your
          Playlist Or File/URL Improvements Ability to open the channel list on
          the video Player Ability to open “ List of episodes” on the video
          Player
        </p>
      </Col>
    </Row>
  );
};

export default Features;
