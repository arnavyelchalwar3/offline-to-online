import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function Accordions() 
{
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen >
      <Accordion.Item eventKey="0" className='bg-warning'>
        <Accordion.Header>Reason For Building This site? </Accordion.Header>
        <Accordion.Body>
       According to GSMA real-time intelligence data, there are now over 11.148 Billion mobile connections worldwide, which surpasses the current world population of 8.019 Billion implied by UN digital analyst estimates.
       <h3>To Know More visit:-</h3>
      <a href='https://www.bankmycell.com/blog/how-many-phones-are-in-the-world'>click here</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='bg-warning'>
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;