import Link from "next/link";

const GuestHeader = () => {
  return (
    <header className="site-header header-style-1 mobile-sider-drawer-menu header-full-width">
      <div className="sticky-header main-bar-wraper  navbar-expand-lg">
        <div className="main-bar">
          <div className="container clearfix">
            {/*Logo section start*/}
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <Link href="/">
                  <img
                    src="images/logo-light.png"
                    alt=""
                    className="site-logo-has"
                  />
                  <img
                    src="images/logo-dark.png"
                    alt=""
                    className="site-logo-sticky"
                  />
                </Link>
              </div>
            </div>
            {/*Logo section End*/}
            {/* NAV Toggle Button */}
            <button
              id="mobile-side-drawer"
              data-target=".header-nav"
              data-toggle="collapse"
              type="button"
              className="navbar-toggler collapsed"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first" />
              <span className="icon-bar icon-bar-two" />
              <span className="icon-bar icon-bar-three" />
            </button>
            {/* MAIN Vav */}
            <div className="nav-animation header-nav navbar-collapse d-flex justify-content-start">
              <ul className=" nav navbar-nav">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About US</Link>
                </li>

                <li>
                  <Link href="/how-it-works">How It Works</Link>
                </li>

                <li>
                  <Link href="/categories">Categories</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Header Right Section*/}
            <div className="extra-nav header-2-nav">
              <div className="extra-cell">
                {/*Login*/}
                <button
                  type="button"
                  className="site-button aon-btn-login"
                  data-toggle="modal"
                  data-target="#login-signup-model"
                >
                  <i className="fa fa-user" /> Login
                </button>
                {/*Sign up*/}
                <a
                  href="mc-profile.html"
                  className="site-button aon-btn-signup m-l20"
                >
                  <i className="fa fa-plus" /> Add Listing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;
