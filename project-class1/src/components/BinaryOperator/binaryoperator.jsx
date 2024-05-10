import React from 'react'

const BinaryOperator = ({condition}) => {
  return (
    <>
        {condition && (
            <>
                <p>BinaryOperator</p>
                <span>Hello</span>
            </>
        )}
        {! condition && <p>BinaryOperator false</p>}
    </>    
    // CUANDO IMPORTE EL COMPONENTE EN LA APP, TENGO QUE PONER EL condition "TRUE" <BinaryOperator condition={true} /> 
  )
}

export default BinaryOperator