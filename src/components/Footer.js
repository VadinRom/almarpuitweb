import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fas fa-tree' />Almar Puit

            </Link>
          </div>
          <small class='website-rights'>Almar Puit © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
            >
              <a href="https://www.facebook.com/people/Almar-Puit-O%C3%9C/100063647318694/?paipv=0&eav=Afa5b1Rf8yA4qkr64Qfg2buBKFD18e5ZM6lsxsrSz1d-BWO9ksAoJJ4iLk6nf8DMces&_rdr">
                <i class='fab fa-facebook-f' />
              </a>

            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
