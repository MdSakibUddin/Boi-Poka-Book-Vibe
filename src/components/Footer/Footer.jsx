import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 text-base-content mt-12">
      {/* 👇 This div centers the content and limits width to 11/12 */}
      <div className="w-11/12 mx-auto footer sm:footer-horizontal p-10">
        {/* Services Section */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        {/* Newsletter Section */}
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join mt-4">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#23BE0A] hover:bg-[#1fa108] text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* 👇 Optional footer bottom bar */}
      <div className="border-t border-gray-300 mt-4 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Book Vibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
