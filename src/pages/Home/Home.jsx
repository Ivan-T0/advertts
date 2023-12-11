import { Container } from "../../pages/Catalog/Catalog.styled";
import {  BigTitle, ContactTitle, List, ListItemsTitle, ServicesTitle, Text } from "./Home.styled";

const Home = () => { 
  return (
       <Container>
      <BigTitle>Welcome</BigTitle>
      
      <Text>Here, everyone can find something special: from efficient electric cars to powerful sports cars. We take pride in offering you a wide selection of vehicles from the world's most renowned brands.</Text>
      <ServicesTitle>Our Services</ServicesTitle>
      <List>
        <li>
          <ListItemsTitle>Car Rentals</ListItemsTitle>
          <Text>We offer a wide selection of cars of various classes and brands so that you can find the one that suits your needs. You can rent a car by the hour, day, or even for an extended period, depending on your requirements.</Text>
        </li>
        <li>
          <ListItemsTitle>Travel Cars</ListItemsTitle>
          <Text>If you're planning a vacation or an important trip, we offer travel cars that will provide you with comfort and freedom of movement. You can enjoy every moment of your journey.</Text>
        </li>
        <li>
          <ListItemsTitle>Corporate Services</ListItemsTitle>
          <Text>Our company also specializes in providing corporate car rental services. We work with many companies to ensure their employees have reliable and comfortable transportation for business trips.</Text>
        </li>
      </List>
      <ContactTitle>Contact Us</ContactTitle>
      <Text>We are ready to answer all your questions and provide additional information. Please <a href={`tel:+380730000000`}>contact us</a>.
        Thank you for visiting our homepage. We are delighted to be your partners in the car rental business and guarantee you the best service.
      </Text>
    </Container>
  );
};

export default Home;