
const A: React.FC<{href: string}> = ({children, href}) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

export default () => {

  return (
    <>
      <h1>About</h1>
      <p>A simple boilerplate to use react with:</p>
      <ul>
        <li><A href="https://www.typescriptlang.org/">Typescript</A></li>
        <li>
          <A href="https://sass-lang.com/">Sass</A> 
          {' '}
          (<A href="https://www.npmjs.com/package/node-sass">node-sass</A>)
        </li>
        <li><A href="https://getbootstrap.com/docs/4.6/">Bootstrap 4.6</A></li>
        <li><A href="https://react-bootstrap.github.io/">ReactBootstrap</A></li>
        <li><A href="https://www.styled-components.com/">Styled Components</A></li>
      </ul>

      <p>Check out <A href="https://github.com/rehooks/awesome-react-hooks">Awesome-React-Hooks</A> for useful hooks to use on your projects!</p>
      <p>Visit <A href="https://github.com/JorgeArreolaS/Custom-Nextjs-Boilerplate">Custom-Nextjs-Boilerplate</A> if you are interested in SSR (Server Side Rendering) with a template like this</p>
    </>
  )
}