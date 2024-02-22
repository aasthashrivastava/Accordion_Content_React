import React, { useState } from 'react'
import Accordion from './Accordion';

const Content = () => {
    const accordionData =[
        {
        title:"Unique Design",
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero'
    },
    {
        title:"Natural Materials",
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero'
    },
    {
        title:"Eco Production",
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero'
    }
]
    const [openAccordion, setOpenAccordion] = useState(null)

    function handleAccordionClick(index){
        setOpenAccordion(index === openAccordion ? null : index);
    }

  return (
    <>
    <div className='accordion'>
        {accordionData.map(({title,content},index)=>{
           return <Accordion 
           key={index} 
           title={title} 
           content={content}
           isActive={index === openAccordion}
           handleAccordionClick={()=>handleAccordionClick(index)}
           />
        })}
    </div>
    </>
  )
}

export default Content