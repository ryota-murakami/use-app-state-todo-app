import { Component } from 'react'
import styled from 'styled-components'

/**
 * This file showing "TypeScirpt can use with JavaScript" for beginners
 */
class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null,
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { error } = this.state
    if (error) {
      return <ErrorBoundaryFallbackComponent />
    }
    return this.props.children
  }
}

export default ErrorBoundary

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Message = styled.div`
  padding: 40px;
  border: 2px #78909c solid;
  border-radius: 5px;
  font-size: 24px;
  color: #78909c;
`

const ErrorBoundaryFallbackComponent = () => (
  <Container>
    <Message>
      Something Error Ooccurring
      <span role="img" aria-label="face-emoji">
        😞
      </span>
    </Message>
  </Container>
)
