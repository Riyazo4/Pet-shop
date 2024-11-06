export const authenticate = (data, next)=>{
    if(typeof window !== 'undefined'){
      localStorage.setItem('jwt', JSON.stringify(data))
      next()
    }
  }


  export const isAuthenticated = () => {
    if (typeof window === 'undefined') {
      return false;
    }
  
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // Parse and return token and user if JWT exists
      const { token, user } = JSON.parse(jwt);
      return { token, user };
    } else {
      return false;
    }
  };
  