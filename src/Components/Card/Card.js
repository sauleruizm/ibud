import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 *
 * @returns A Card for display accion to do
 */
export const Card = ({ tittle }) => {
  return (
    <CardStyled>
      <Title>{tittle}</Title>      
    </CardStyled>
  )
}

/**
 * @description Describe de props of componente Cards
 * @param tittle, Tittle of card
 */
Card.propTypes = { tittle: PropTypes.string }

const CardStyled = styled.div`
  border-color: greenyellow;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  height: 40%;
  margin: 2px;
  width: 40%;
`
const Title = styled.h4`
  justify-content: center;
  flex-flow: row;
  text-align: center;
`
