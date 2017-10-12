import React from "react";

const label = {
  display: 'inline-block',
  fontWeight: 700,
  marginBottom: 0.25
}

const input = {
  border: "1px solid",
  borderColor: 'blue',
  marginBottom: 0.25,
  resize: 'none',
  width: '100%'
}

const button ={
  fontSize: '1em',
	margin: '1em',
	padding: '0.25em 1em',
	border: '2px solid #78BE20',
  borderRadius: '3px',
  color:'white',
  cursor: 'pointer',
  background:'#78BE20'

}

export default () => (
  <div>
    <h1></h1>
    <div>
      <form >
        <label style={label}>First name</label>
        <input style={input}ype="text" value='Michael' />
        <label style={label}>Last name</label>
        <input style={input} type="text" value='Smith' />
        <label style={label}>Email</label>
        <input style={input} type="email" value='michael.smith@gmail.com' />
        <button style={button}>Upload</button>
      </form>
    </div>
    <p>Travelport Pacific 2017</p>
  </div>
);
