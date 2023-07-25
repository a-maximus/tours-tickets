import React from "react";
import "./Home.css";
import TicketButton from "./ticket_button";

const Home = () => {
  return (
    <div id="main-div">
      <div className=" root-div MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-qur2lp"></div>
      <div className="root-div-two MuiBox-root css-13xp5rb"></div>
      <div className="sec-main-div MuiBox-root css-1edjk1t">
        <div
          className="thrd-main-div MuiGrid-root MuiGrid-container css-169jxjo"
          style={{ opacity: 1 }}
        >
          <div className="fourth-main-div MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-wrap-xs-nowrap css-12zwgl5">
            <div className="heding-container MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-190hwrp">
              <h1 className="page-heading MuiTypography-root MuiTypography-h3 css-657h0t">
                THE BANG MAN TOUR
              </h1>
              <a
                className="img-a-tag MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiBox-root css-1h4d67s"
                href="google.com"
                tabIndex="-1"
              >
                <div className="img-link-container-div MuiAvatar-root MuiAvatar-circular css-1esw0l9">
                  <img
                    src="fredo-bang.png"
                    alt="fredo bang"
                    className="img MuiAvatar-img css-1hy9t21"
                  ></img>
                </div>
                <div className="artist-name-div MuiBox-root css-j7qwjs">
                  <p className="artist-name-p-tag MuiTypography-root MuiTypography-body1 css-1xo4nqi">
                    FREDO BANG
                  </p>
                </div>
              </a>
            </div>
            <div className="tkt-tbl-cntr-first-div MuiGrid-root MuiGrid-container css-1cn3yto">
              <div className="tkt-tbl-cntr-scnd-div MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-rlwbc5">
                <div className="cad-fir-div MuiGrid-root MuiGrid-container css-1gfurq9">
                  <div className="cad-sec-div MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 css-19m9fpy">
                    <div className="cad-thr-div MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-g7kf87">
                      <h2 className="h2-tour-font-cad MuiTypography-root MuiTypography-body1 css-11cmq0p">
                        Choose a date
                      </h2>
                      <span className="tour-font-ybn MuiTypography-root MuiTypography-caption css-1jppy66">
                        You'll be notified when tickets and info drop
                      </span>
                    </div>
                  </div>
                </div>
                <div className="all-dates-div-contr MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-1134jlp">
                  <div className="sngle-date-venue-tkt-btn-div-contr-frst MuiGrid-root MuiGrid-container css-158fgdm">
                    <div className="sngle-date-venue-tkt-btn-div-contr-scnd">
                      <div className="sngle-date-venue-tkt-btn-div-contr-thrd MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div className="sngl-date-venue-div-one MuiGrid-root MuiGrid-item css-1wxaqej">
                          <div className="sngl-date-venue-div-two MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-g7kf87">
                            <p className="date-venue-p-tag MuiTypography-root MuiTypography-body1 css-kzo5sr">
                              8/10 - Cosmopolitan Premium Lounge
                            </p>
                            <div className="city-state-span-div MuiGrid-root MuiGrid-container css-v3z1wi">
                              <div className="svg-near-you-span-div MuiBox-root css-lba78u">
                                <span className="near-you-span MuiTypography-root MuiTypography-caption css-1jppy66">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="#ca4848"
                                    stroke="#fff"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  NEAR YOU
                                </span>
                              </div>
                              <span className="city-state-span MuiTypography-root MuiTypography-caption css-1jppy66">
                                Atlanta, Georgia
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tkt-btn-cntr MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-3otguq">
                          <div className="tkt-btn-inner-div MuiGrid-root MuiGrid-container css-kyse2m">
                            {/* <button
                              class=" btn MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-uw2i5r"
                              tabindex="0"
                              type="button"
                              id=":Ralbbanakt96:"
                            >
                              Tickets
                              <span className="tkt-btn-span MuiTouchRipple-root css-w0pj6f"></span>
                            </button> */}
                            <TicketButton target="_blank"></TicketButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sngle-date-venue-tkt-btn-div-contr-frst MuiGrid-root MuiGrid-container css-158fgdm">
                    <div className="sngle-date-venue-tkt-btn-div-contr-scnd">
                      <div className="sngle-date-venue-tkt-btn-div-contr-thrd MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div className="sngl-date-venue-div-one MuiGrid-root MuiGrid-item css-1wxaqej">
                          <div className="sngl-date-venue-div-two MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-g7kf87">
                            <p className="date-venue-p-tag MuiTypography-root MuiTypography-body1 css-kzo5sr">
                              8/3 - Amway Center
                            </p>
                            <div className="city-state-span-div MuiGrid-root MuiGrid-container css-v3z1wi">
                              <span className="city-state-span">
                                Orlando, Florida
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tkt-btn-cntr MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-3otguq">
                          <div className="tkt-btn-inner-div MuiGrid-root MuiGrid-container css-kyse2m">
                            {/* <button
                              className="btn MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-uw2i5r"
                              tabindex="0"
                              type="button"
                              id=":R5algdanakt96:"
                            >
                              Tickets
                              <span className="tkt-btn-span MuiTouchRipple-root css-w0pj6f"></span>
                            </button> */}
                            <TicketButton></TicketButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sngle-date-venue-tkt-btn-div-contr-frst MuiGrid-root MuiGrid-container css-158fgdm">
                    <div className="sngle-date-venue-tkt-btn-div-contr-scnd">
                      <div className="sngle-date-venue-tkt-btn-div-contr-thrd MuiGrid-root MuiGrid-container css-1d3bbye">
                        <div className="sngl-date-venue-div-one MuiGrid-root MuiGrid-item css-1wxaqej">
                          <div className="sngl-date-venue-div-two MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-g7kf87">
                            <p className="date-venue-p-tag MuiTypography-root MuiTypography-body1 css-kzo5sr">
                              8/3 - Amway Center
                            </p>
                            <div className="city-state-span-div MuiGrid-root MuiGrid-container css-v3z1wi">
                              <span className="city-state-span">
                                Orlando, Florida
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tkt-btn-cntr MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-3otguq">
                          <div className="tkt-btn-inner-div MuiGrid-root MuiGrid-container css-kyse2m">
                            {/* <button
                              className="btn MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-uw2i5r"
                              tabindex="0"
                              type="button"
                              id=":R5algdanakt96:"
                              onClick="gotoLink(this)"
                              value="https://www.google.com"
                            >
                              Tickets
                              <span className="tkt-btn-span MuiTouchRipple-root css-w0pj6f"></span>
                            </button>
                            <button>Click Me</button> */}
                            <TicketButton></TicketButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/****************************************************************************************************************************************************************/

<div id="main-div" className="container">
  <div className="root"></div>
  <div></div>
  <div className="container-flex">
    <div className="second-cont">
      <div className="heding-container">
        <h3>THE BANG MAN TOUR</h3>
        <div className="a-link-container">
          <a className="img-a-tag" href="google.com">
            <div className="img-link-container">
              <img src="fredo-bang.png" alt="fredo bang"></img>
            </div>
            <div className="artist-name-div">
              <p className="artist-name">FREDO BANG</p>
            </div>
          </a>
        </div>
      </div>
      <div className="tkt-tbl-cntr"></div>
      <div className="ticket-table">
        <div className="choose-a-date-main-div">
          <div className="cad-sec-div">
            <div className="cad-thrd-div">
              <p className="tour-font-cad">Choose a date</p>
              <span className="tour-font-ybn">
                You'll be notified when tickets and info drop
              </span>
            </div>
          </div>
        </div>
        <div className="dates-div-1">
          <div className="dates-div-2">
            <div className="dates-div-3">
              <div className="dates-div-4">
                <div className="dates-div-5">
                  <div className="dates-div-6">
                    <p className="date-venue-p-tag">
                      8/10 - Cosmopolitan Premium Lounge
                    </p>
                    <div className="loc-city-state-div">
                      <div className="near-you-div">
                        <span className="near-you-span">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="#ca4848"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          NEAR YOU
                        </span>
                      </div>
                      <span className="city-state-span">Atlanta, Georgia</span>
                    </div>
                  </div>
                  <div className="tkt-btn-cntr">
                    <div className="tkt-btn-inner-div">
                      <button className="btn">Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
