import React, { useState, useRef, useEffect } from 'react'
import './styles.css'

import { BsSearch } from 'react-icons/bs'
import { MdArrowDropDown } from 'react-icons/md'
import { GiUsaFlag, GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'

const NavBar: React.FC = () => {
  const [searchBarToggle, setSearchBarToggle] = useState<boolean>(false)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    window.addEventListener('click', e => {
      searchRef.current?.blur()
    })
  }, [])

  return (
    <div className='navbar'>
      <div className='navbar-belt'>
        <div className='navbar__div navbar__logo-div'>
          <img
            className='navbar__logo'
            src={require('../components/images/Amazon_Prime_Logo.png')}
            alt='Amazon_Prime_Logo'
          />
        </div>
        <div className='navbar__div navbar__delivery-div'>
          <div className='navbar__delivery-pin'>
            <FiMapPin />
          </div>
          <div>
            <div className='navbar__deliver-to'>Deliver to Brandon</div>
            <div className='navbar__delivery-div-address'>Paxton 06120</div>
          </div>
        </div>
        <div className='navbar__search-div'>
          <div
            className='navbar_search-container'
            style={
              searchBarToggle
                ? {
                    border: '3px solid orange',
                    borderRadius: '7.5px'
                  }
                : { border: '3px solid transparent' }
            }
          >
            <button className='navbar__dropdown'>
              All <MdArrowDropDown />
            </button>
            <input
              className='navbar__input'
              ref={searchRef}
              onFocus={() => setSearchBarToggle(!searchBarToggle)}
            />
            <button className='navbar__submit'>
              <BsSearch />
            </button>
          </div>
        </div>
        <div className='navbar__div navbar__language-div'>
          <GiUsaFlag />
          <MdArrowDropDown />
        </div>
        <div className='navbar__div navbar__accounts-div'>
          <div className='navbar__accounts-greeting'>Hello, Brandon</div>
          <div className='navbar__accounts-link'>
            {'Accounts & Lists'}
            <MdArrowDropDown />
          </div>
        </div>
        <div className='navbar__div navbar__returns-div'>
          <div className='navbar__accounts-returns'>Returns</div>
          <div className='navbar__accounts-orders'>{'& Orders'}</div>
        </div>
        <div className='navbar__div navbar__cart-div'>
          <AiOutlineShoppingCart />
        </div>
      </div>
      <div className='navbar-sprite'>
        <div className='sprite__options'>
          <div className='sprite__div sprite__div-hamburger'>
            <div className='sprite__div-hamburger-menu'>
              <GiHamburgerMenu />
            </div>
            <div>All</div>
          </div>
          <div className='sprite__div sprite__buy-again'>Buy Again</div>
          <div className='sprite__div sprite__shopper-toolkit'>
            Shopper Toolkit
          </div>
          <div className='sprite__div sprite__whole-foods'>Whole Foods</div>
          <div className='sprite__div sprite__health'>
            {'Health & Household'}
          </div>
          <div className='sprite__div sprite__coupons'>Coupons</div>
          <div className='sprite__div sprite__beauty'>
            Beauty & Personal Care
          </div>
          <div className='sprite__div sprite__basics'>Amazon Basics</div>
        </div>
        <div className='sprite__div sprite__div-special'>
          Save 50% on Mark.TV
        </div>
      </div>
    </div>
  )
}

export default NavBar
