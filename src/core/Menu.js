import React, { Fragment } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { signout, isAuthenticated } from "../auth/handle";

import {BiHomeAlt2} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {HiOutlineLogin, HiOutlineLogout} from 'react-icons/hi'
import {RxDashboard} from 'react-icons/rx'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }
  return ComponentWithRouterProp;
}

const currentTab = (navigate, path) => {
  if (navigate.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ navigate, path }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          کافه فرانت
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                <BiHomeAlt2 className="ms-1"/>
                خانه
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">
                <AiOutlineShoppingCart className='ms-1'/>
                سبد خرید
              </a>
            </li>
            {isAuthenticated() && (
              <li class="nav-item">
                <a class="nav-link" href="/user/dashboard">
                  <RxDashboard className="ms-1" />
                  داشبورد
                </a>
              </li>
            )}
            {!isAuthenticated() && (
              <>
                <li class="nav-item">
                  <a class="nav-link" href="/signup">
                    <HiOutlineLogin className="ms-1"/>
                    ورود/ثبت نام
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" href="/signin">
                    ثبت نام
                  </a>
                </li> */}
              </>
            )}
            {isAuthenticated() && (
              <li class="nav-item">
                <a
                  class="nav-link text-warning"
                  href="#"
                  onClick={() => {
                    signout(() => {
                      navigate("/");
                    });
                  }}
                >
                  <HiOutlineLogout className='ms-1' /> 
                  خروج
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Menu);
