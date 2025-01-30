import React from 'react'
import { Accordion } from 'react-bootstrap'
import styles from './filter.module.scss'

export const Filter: React.FC = () => {
  return (
    <div className={styles.filter}>


      <Accordion title='' className={styles.filter}>    
        <Accordion.Item eventKey="0">
            <Accordion.Header>Товары</Accordion.Header>
            <Accordion.Body> 
              1
            </Accordion.Body>
            <Accordion.Body> 
              2
            </Accordion.Body>
            <Accordion.Body> 
              3
            </Accordion.Body>
        </Accordion.Item>
        
      </Accordion>
    </div>
    
  )
}

export default Filter