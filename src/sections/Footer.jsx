const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="http://github.com/saxenasiddhant45">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" /></a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/siddhant-saxena-617286271//">
          <img src="/assets/linkedIn.svg" alt="linkedin" className="w-1/2 h-1/2 invert" /></a>

        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/siddhantsaxena676/">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© {new Date().getFullYear()} Siddhant Saxena. All rights reserved.</p>
    </footer>
  );
};

export default Footer;