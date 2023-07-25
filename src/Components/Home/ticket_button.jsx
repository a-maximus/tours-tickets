import React from "react";

class TicketButton extends React.Component {
  handleClick = () => {
    window.location.href =
      "https://www.ticketmaster.com/event/15005EC52438C354";
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="btn MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation css-uw2i5r"
        tabindex="0"
        type="button"
        id=":R5algdanakt96:"
        target="blank" //Opens in new window
        aria-label="Ticket Master" // Add aria-label attribute
        rel="noopener" // Add rel attribute
      >
        Tickets
        <span className="tkt-btn-span MuiTouchRipple-root css-w0pj6f"></span>
      </button>
    );
  }
}

export default TicketButton;
