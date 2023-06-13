import React from "react";
import Menu from "./Menu";
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbBrandTelegram} from 'react-icons/tb'

const Base = ({
  title = "My Title",
  description = "My description",
  className =" text-dark p-4",
  children,
}) => {
  return (
    <div>
      <Menu/>
      
        <div className={className}>{children}</div>
     
      <footer class="footer bg-dark text-light">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
      <a href="#" class="social-icon">
        <HiOutlineMail/>
      </a>
        <a href="#" class="social-icon">
          <AiOutlineInstagram/>
          </a>
        <a href="#" class="social-icon">
          <TbBrandTelegram />
          </a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <p class="mb-0" dir="rtl">تمام حقوق محفوظ است.</p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Base;
