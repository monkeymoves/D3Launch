import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/"><img
            src="/img/LogoD3_white.png"
            alt="D3"
            style={{ width: '5em', height: '5em', color: 'white' }}
          /></Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">

          <div className="column is-12 social  ">

            <a title="facebook" href="facebook.com/datadrivendecisions">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="instagram" href="https://www.instagram.com/datadrivendecisionsltd">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="linkedin" href="https://www.linkedin.com/in/kate-horsington-3b73534a/">
              <img
                src={linkedin}
                alt="linkedin"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>
          <div class="footer-copyright">
            <p>Copyright © 2019. All Rights Reserved. <a href="www.datadrivendecisionsltd.com" target="_blank">D3 Digital</a></p>
          </div>
          <br></br>

        </div>
      </footer>
    )
  }
}

export default Footer
