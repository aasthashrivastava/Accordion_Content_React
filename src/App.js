import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Content from './components/Content';

function App() {
  const [openAccordion, setOpenAccordion] = useState(null);

  function handleAccordionClick(title){
      setOpenAccordion((elem)=>elem === title ? null : title);
  }
   
  return (
    <div className="App">
    {/* <Content/> */}

    <Accordion
     title="Unique Design"
     content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero'
     isActive={openAccordion === "Unique Design"}
     handleAccordionClick={handleAccordionClick}
   />
     <Accordion
     title="Natural Materials"
     content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero'
     isActive={openAccordion === "Natural Materials"}
     handleAccordionClick={handleAccordionClick}
   />
     <Accordion
     title="Eco Production"
     content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero'
     isActive={openAccordion === "Eco Production"}
     handleAccordionClick={handleAccordionClick}
  />
    </div>
  );
}

export default App;
