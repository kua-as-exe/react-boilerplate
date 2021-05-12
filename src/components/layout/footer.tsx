import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 3rem;
  display: flex;

  background-color: #c5c5c5;

  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;

  span {
    height: 10px;
    line-height: 10px;
  }
`

const FooterComponent = () => {

  return (
    <Footer>
      <span>
        Footer
      </span>
    </Footer>
  )
}

export default FooterComponent