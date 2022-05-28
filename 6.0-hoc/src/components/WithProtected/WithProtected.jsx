const WithProtected = Component => props => {
  const { isProtected, ...properties } = props;
  return !isProtected ? <Component {...properties} /> 
    : <span>El componente está protegido...</span>      
}

export default WithProtected;