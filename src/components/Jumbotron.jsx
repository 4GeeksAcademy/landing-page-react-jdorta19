import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Jumbotron = () => {
  return (
    <Card style={{ width: "118rem" }}>
      <Card.Body>
        <Card.Title>A warm welcome</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          cupiditate a saepe similique itaque! Officiis, vitae consequatur!
          Modi, perspiciatis quas quos eaque omnis voluptatem ipsam enim aut
          unde dicta temporibus.
        </Card.Text>
        <Button variant="primary">Call to action!</Button>
      </Card.Body>
    </Card>
  );
};

export default Jumbotron;
