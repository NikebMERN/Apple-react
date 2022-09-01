import React from 'react'
import { Link } from "react-router-dom";

// Importing css basic
import "../../css/bootstrap.css";
import "../../css/body.css";

// Importing header css
import "../../css/Header/Apple-header.css";

// Importing images
import logo_sm from '../../images/icons/logo-sm.png';
import search_sm from '../../images/icons/search-icon-sm.png';
import cart_sm from '../../images/icons/cart-sm.png';

const Apple_header = () => {
  return (
    <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <Link className="navbar-brand mr-5 my-auto" to="/"><img src={logo_sm} alt="" /></Link>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/mac/">Mac</Link></li>
						<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/iphone/">iphone</Link></li>
						<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/ipad/">ipad</Link></li>
						<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/watch/">watch</Link></li>
						<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/tv/">tv</Link></li>
						<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/music/">Music</Link></li>
						<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/support/">Support</Link></li>
						<li className="nav-item" ><Link className="nav-link js-scroll-trigger" to="/search/"><img src={search_sm} alt="" /></Link></li>
						<li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/cart/"><img src={cart_sm} alt="" /></Link></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
  )
}

// Exporting arrow function
export default Apple_header;