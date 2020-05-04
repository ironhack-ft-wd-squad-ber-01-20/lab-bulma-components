import React from 'react';
import CoolButton from './CoolButton';


const Navbar=() =>{

return(
<nav className="navbar" role="navigation" aria-label="main navigation">

  <div className="navbar-brand" style={{
      marginTop:'1rem',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center'
}}>
<div style={{
    marginRight:'30rem',
    display:'flex',
    flexDirection:'row',

}}>
  <a className="navbar-item">
  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma"></img>
</a>

<a className="navbar-item">
  Home
</a>
</div>

<div className="field is-grouped" >
    <p className="control">
    <CoolButton  className="button is-rounded my-class is-small is-danger " title='Login'></CoolButton>

     </p>

    <p className="control">
    <CoolButton className='button is-small is-success' title="Signup"></CoolButton>
    </p>
  </div>

  </div>

</nav>
)
}

export default Navbar;