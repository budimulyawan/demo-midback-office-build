import React from "react";

const label = {
  display: "inline-block",
  fontWeight: 700,
  marginBottom: 0.25
};

const input = {
  border: "1px solid",
  borderColor: "blue",
  marginBottom: 0.25,
  resize: "none",
  width: "100%"
};

const button = {
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid #78BE20",
  borderRadius: "3px",
  color: "white",
  cursor: "pointer",
  background: "#78BE20"
};

class Profile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: "Michael",
      lastName: "Smith",
      email: "michael.smith@gmail.com",
      notepad: 'This booking has been paid',
    };
  }

  upload() {
    if (webBrowser) {
      webBrowser.sendTerminalCommand('N.' + this.state.lastName + '/' + this.state.firstName);
      webBrowser.sendTerminalCommand('MT.' + this.state.email);
      webBrowser.sendTerminalCommand('NP.' + this.state.notepad);
      alert('Profile has been moved, please close window and refresh Smartpoint(*R)');
    }
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <label style={label}>First name</label>
          <input style={input} type="text" value={this.state.firstName} />
          <label style={label}>Last name</label>
          <input style={input} type="text" value={this.state.lastName} />
          <label style={label}>Email</label>
          <input style={input} type="email" value={this.state.email} />
          <label style={label}>Notepad</label>
          <input style={input} type="text" value={this.state.notepad} />
          <button style={button} onClick={this.upload.bind(this)}>
            Upload
          </button>
        </div>
        <p>Travelport Pacific 2017</p>
      </div>
    );
  }
}

export default Profile;
