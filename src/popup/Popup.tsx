import React, {Component} from "react";
import GitLogo from './github.svg'
import "./Popup.scss";

interface ButtonProps {
  text: string,
  callback?: VoidFunction,
  color: string,
}


class Button extends Component<ButtonProps> {
  render(){
    return(
      <div className="button" onClick={this.props.callback} style={{backgroundColor:this.props.color}}>
        <span className="buttonText">{this.props.text}</span>
      </div>
    )
  }
}

export default class Popup extends Component {
  render(){
    chrome.runtime.sendMessage({popupMonted: true})
    return (
      <div className="popupContainer">
        <section className="header">
          <span className="headerText">Quick Click</span>
        </section>
        <section className="time">
          <span className="timeHeader">Best Time</span>
          <span className="timeNum">10</span>
          <time className="timeAllTimes">See All</time>
        </section>
        <section className="buttons">
          <Button text="Start Game" color="#FFADAD" callback={() => {
            chrome.runtime.sendMessage({startGame: true}, (res)=> res.close? window.close() : null)
          }}/>
          <Button text="Help" color="#A0C4FF" callback={console.log}/>
        </section>
        <section className="footer">
          <span className="footerText">Made by a potato with a crew of monkeys</span>
          <a className="footerLink">
            <span className="linkText">See the source code on </span>
            <GitLogo className="gitLogo"/>
          </a>
        </section>
      </div>
    )
  }
}