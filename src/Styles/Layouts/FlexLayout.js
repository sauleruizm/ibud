import styled from 'styled-components'

/**
 * @description Represent a Section tag for
 * flex container wirh
 * flex-direction: row;
 * flex-wrap: wrap;
 * justify-content: flex-start;
 * align-items:stretch;
 * align-content: flex-start;
 */
export const FlexContainerWrap = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;
`

/**
 * @description Represent a Section tag for
 * flex container wirh
 * flex-direction: row;
 * flex-wrap: nowrap;
 * justify-content: flex-start;
 * align-items:stretch;
 * align-content: flex-start;
 */
export const FlexContainerNoWrap = styled(FlexContainerWrap)`
  flex-wrap: nowrap;
`
