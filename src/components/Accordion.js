import React from 'react'

const Accordion = ({title, content, handleAccordionClick, isActive}) => {
    // const index = useId()
    // const [isActive, setIsActive] = useState(false)
    // const [openAccordion, setOpenAccordion] = useState('')


    // function handleAccordionClick(title){
    //     setOpenAccordion(title === openAccordion ? '' : title);
    //     setIsActive(!isActive)
    // }

  return (
    <>
    <div  className='accordion-item'>
            <div className='accordion-header'
           onClick={()=>handleAccordionClick(title)}
           >
                <h1 className='accordion-title'>{title}</h1>
                <i>{isActive ? '-' : '+'}</i>
            </div>
           {isActive &&  <div className='accordion-content'>{content}</div>}
        </div>
    </>
  )
}

export default Accordion