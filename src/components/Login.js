import React, { useState } from "react";
import Button from "./Button";
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';



const Login = () => {

  const [ player1, setPlayer1 ] = useState("");
  const [ player2, setPlayer2 ] = useState("");
 
  const history = useHistory()

  function SubmitForm(e) {
    e.preventDefault();
    if (player1 === "" || player2 === "") {
      <Redirect to="/" />
    } else {

      history.push({
        pathname: "/game",
        state: {
          props: {
            player1: player1,
            player2: player2,
            
          }
        }
      })
    }
  }

  return (
    <div className="lo123ChoiceFormContainer">
      <form onSubmit={(e) => SubmitForm(e)} className="lo123ChoiceForm">
        <label className="lo123ChoiceFormLabel">Enter Player1:</label>
        <input
          className="lo123ChoiceFormInput"
          name='player1'
          type='text'
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
        />
        <label className="lo123ChoiceFormLabel">Enter Player2:</label>
        <input
          className="lo123ChoiceFormInput"
          name='player2'
          type='text'
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
        />

        <Button type="submit" className="lo123ChoiceSubmitBtn" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
