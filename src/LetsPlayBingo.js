/*
 * Let's Play Bingo
 * App written by Karol Brennan
 * https://karol.dev
 * http://github.com/karolbrennan
 */
import React, { Component } from "react";
import _ from "underscore";
import Select from "react-select";
// Styles and Images
import logo from "./logo.svg";
import venmo from "./images/venmo.jpeg";
import paypal from "./images/paypalme.jpeg";
import buyacoffee from "./images/buyacoffee.png";
import "react-select/dist/react-select.css";
// Components
import BingoBoard from "./components/BingoBoard.js";
import Pattern from "./components/Pattern.js";
import BallDisplay from "./components/BallDisplay.js";
// Helpers
import { getLanguageText } from "./helpers.js";

const newGameState = {
	balls: {
		1: { letter: "B", number: 1, called: false, active: false },
		2: { letter: "B", number: 2, called: false, active: false },
		3: { letter: "B", number: 3, called: false, active: false },
		4: { letter: "B", number: 4, called: false, active: false },
		5: { letter: "B", number: 5, called: false, active: false },
		6: { letter: "B", number: 6, called: false, active: false },
		7: { letter: "B", number: 7, called: false, active: false },
		8: { letter: "B", number: 8, called: false, active: false },
		9: { letter: "B", number: 9, called: false, active: false },
		10: { letter: "B", number: 10, called: false, active: false },
		11: { letter: "B", number: 11, called: false, active: false },
		12: { letter: "B", number: 12, called: false, active: false },
		13: { letter: "B", number: 13, called: false, active: false },
		14: { letter: "B", number: 14, called: false, active: false },
		15: { letter: "B", number: 15, called: false, active: false },
		16: { letter: "I", number: 16, called: false, active: false },
		17: { letter: "I", number: 17, called: false, active: false },
		18: { letter: "I", number: 18, called: false, active: false },
		19: { letter: "I", number: 19, called: false, active: false },
		20: { letter: "I", number: 20, called: false, active: false },
		21: { letter: "I", number: 21, called: false, active: false },
		22: { letter: "I", number: 22, called: false, active: false },
		23: { letter: "I", number: 23, called: false, active: false },
		24: { letter: "I", number: 24, called: false, active: false },
		25: { letter: "I", number: 25, called: false, active: false },
		26: { letter: "I", number: 26, called: false, active: false },
		27: { letter: "I", number: 27, called: false, active: false },
		28: { letter: "I", number: 28, called: false, active: false },
		29: { letter: "I", number: 29, called: false, active: false },
		30: { letter: "I", number: 30, called: false, active: false },
		31: { letter: "N", number: 31, called: false, active: false },
		32: { letter: "N", number: 32, called: false, active: false },
		33: { letter: "N", number: 33, called: false, active: false },
		34: { letter: "N", number: 34, called: false, active: false },
		35: { letter: "N", number: 35, called: false, active: false },
		36: { letter: "N", number: 36, called: false, active: false },
		37: { letter: "N", number: 37, called: false, active: false },
		38: { letter: "N", number: 38, called: false, active: false },
		39: { letter: "N", number: 39, called: false, active: false },
		40: { letter: "N", number: 40, called: false, active: false },
		41: { letter: "N", number: 41, called: false, active: false },
		42: { letter: "N", number: 42, called: false, active: false },
		43: { letter: "N", number: 43, called: false, active: false },
		44: { letter: "N", number: 44, called: false, active: false },
		45: { letter: "N", number: 45, called: false, active: false },
		46: { letter: "G", number: 46, called: false, active: false },
		47: { letter: "G", number: 47, called: false, active: false },
		48: { letter: "G", number: 48, called: false, active: false },
		49: { letter: "G", number: 49, called: false, active: false },
		50: { letter: "G", number: 50, called: false, active: false },
		51: { letter: "G", number: 51, called: false, active: false },
		52: { letter: "G", number: 52, called: false, active: false },
		53: { letter: "G", number: 53, called: false, active: false },
		54: { letter: "G", number: 54, called: false, active: false },
		55: { letter: "G", number: 55, called: false, active: false },
		56: { letter: "G", number: 56, called: false, active: false },
		57: { letter: "G", number: 57, called: false, active: false },
		58: { letter: "G", number: 58, called: false, active: false },
		59: { letter: "G", number: 59, called: false, active: false },
		60: { letter: "G", number: 60, called: false, active: false },
		61: { letter: "O", number: 61, called: false, active: false },
		62: { letter: "O", number: 62, called: false, active: false },
		63: { letter: "O", number: 63, called: false, active: false },
		64: { letter: "O", number: 64, called: false, active: false },
		65: { letter: "O", number: 65, called: false, active: false },
		66: { letter: "O", number: 66, called: false, active: false },
		67: { letter: "O", number: 67, called: false, active: false },
		68: { letter: "O", number: 68, called: false, active: false },
		69: { letter: "O", number: 69, called: false, active: false },
		70: { letter: "O", number: 70, called: false, active: false },
		71: { letter: "O", number: 71, called: false, active: false },
		72: { letter: "O", number: 72, called: false, active: false },
		73: { letter: "O", number: 73, called: false, active: false },
		74: { letter: "O", number: 74, called: false, active: false },
		75: { letter: "O", number: 75, called: false, active: false },
	},
	newGame: true,
	running: false,
};

class LetsPlayBingo extends Component {
	/*
	 * Constructor
	 * State Variables
	 * balls: balls object, holds letter, number, called and active statues
	 * running: determines if the game is presently running
	 * interval & delay: how often the balls are generated
	 */
	constructor(props) {
		super(props);

		this.state = {
			showAlert: false,
			showBackdrop: false,
			balls: {
				1: { letter: "B", number: 1, called: false, active: false },
				2: { letter: "B", number: 2, called: false, active: false },
				3: { letter: "B", number: 3, called: false, active: false },
				4: { letter: "B", number: 4, called: false, active: false },
				5: { letter: "B", number: 5, called: false, active: false },
				6: { letter: "B", number: 6, called: false, active: false },
				7: { letter: "B", number: 7, called: false, active: false },
				8: { letter: "B", number: 8, called: false, active: false },
				9: { letter: "B", number: 9, called: false, active: false },
				10: { letter: "B", number: 10, called: false, active: false },
				11: { letter: "B", number: 11, called: false, active: false },
				12: { letter: "B", number: 12, called: false, active: false },
				13: { letter: "B", number: 13, called: false, active: false },
				14: { letter: "B", number: 14, called: false, active: false },
				15: { letter: "B", number: 15, called: false, active: false },
				16: { letter: "I", number: 16, called: false, active: false },
				17: { letter: "I", number: 17, called: false, active: false },
				18: { letter: "I", number: 18, called: false, active: false },
				19: { letter: "I", number: 19, called: false, active: false },
				20: { letter: "I", number: 20, called: false, active: false },
				21: { letter: "I", number: 21, called: false, active: false },
				22: { letter: "I", number: 22, called: false, active: false },
				23: { letter: "I", number: 23, called: false, active: false },
				24: { letter: "I", number: 24, called: false, active: false },
				25: { letter: "I", number: 25, called: false, active: false },
				26: { letter: "I", number: 26, called: false, active: false },
				27: { letter: "I", number: 27, called: false, active: false },
				28: { letter: "I", number: 28, called: false, active: false },
				29: { letter: "I", number: 29, called: false, active: false },
				30: { letter: "I", number: 30, called: false, active: false },
				31: { letter: "N", number: 31, called: false, active: false },
				32: { letter: "N", number: 32, called: false, active: false },
				33: { letter: "N", number: 33, called: false, active: false },
				34: { letter: "N", number: 34, called: false, active: false },
				35: { letter: "N", number: 35, called: false, active: false },
				36: { letter: "N", number: 36, called: false, active: false },
				37: { letter: "N", number: 37, called: false, active: false },
				38: { letter: "N", number: 38, called: false, active: false },
				39: { letter: "N", number: 39, called: false, active: false },
				40: { letter: "N", number: 40, called: false, active: false },
				41: { letter: "N", number: 41, called: false, active: false },
				42: { letter: "N", number: 42, called: false, active: false },
				43: { letter: "N", number: 43, called: false, active: false },
				44: { letter: "N", number: 44, called: false, active: false },
				45: { letter: "N", number: 45, called: false, active: false },
				46: { letter: "G", number: 46, called: false, active: false },
				47: { letter: "G", number: 47, called: false, active: false },
				48: { letter: "G", number: 48, called: false, active: false },
				49: { letter: "G", number: 49, called: false, active: false },
				50: { letter: "G", number: 50, called: false, active: false },
				51: { letter: "G", number: 51, called: false, active: false },
				52: { letter: "G", number: 52, called: false, active: false },
				53: { letter: "G", number: 53, called: false, active: false },
				54: { letter: "G", number: 54, called: false, active: false },
				55: { letter: "G", number: 55, called: false, active: false },
				56: { letter: "G", number: 56, called: false, active: false },
				57: { letter: "G", number: 57, called: false, active: false },
				58: { letter: "G", number: 58, called: false, active: false },
				59: { letter: "G", number: 59, called: false, active: false },
				60: { letter: "G", number: 60, called: false, active: false },
				61: { letter: "O", number: 61, called: false, active: false },
				62: { letter: "O", number: 62, called: false, active: false },
				63: { letter: "O", number: 63, called: false, active: false },
				64: { letter: "O", number: 64, called: false, active: false },
				65: { letter: "O", number: 65, called: false, active: false },
				66: { letter: "O", number: 66, called: false, active: false },
				67: { letter: "O", number: 67, called: false, active: false },
				68: { letter: "O", number: 68, called: false, active: false },
				69: { letter: "O", number: 69, called: false, active: false },
				70: { letter: "O", number: 70, called: false, active: false },
				71: { letter: "O", number: 71, called: false, active: false },
				72: { letter: "O", number: 72, called: false, active: false },
				73: { letter: "O", number: 73, called: false, active: false },
				74: { letter: "O", number: 74, called: false, active: false },
				75: { letter: "O", number: 75, called: false, active: false },
			},
			newGame: true,
			running: false,
			interval: 0,
			delay: 10000,
			selectedCaller: null,
			speechEnabled: window.hasOwnProperty("speechSynthesis"),
			synth: window.speechSynthesis,
			voices: [],
		};
		// if speech is enabled, set up a method to load voices if they change
		if (this.state.speechEnabled) {
			this.state.synth.onvoiceschanged = this.loadVoices;
		}
		const cache = JSON.parse(localStorage.getItem("lpbclassic"));
		if (cache) {
			if (Object.keys(cache).length > 0) {
				// there's a cache available, apply to this.state
				const ignoredKeys = ["showAlert", "showBackdrop", "running", "speechEnabled", "synth", "voices"];
				Object.keys(cache).forEach((key) => {
					if (!ignoredKeys.includes(key)) {
						// If the key is not ignored, update this.state with the cached value
						this.state[key] = cache[key];
					}
				});
				this.state.running = false;
			}
		}
		let now = new Date();
		now = now.getTime();
		let unloadTime = localStorage.getItem("lpb-unloadtime");
		if (unloadTime) {
			unloadTime = new Date(JSON.parse(unloadTime));
			unloadTime = unloadTime.getTime();
			const timeDiff = now - unloadTime;

			if (timeDiff < 500) {
				// this is a reload event. reload the game.
				Object.keys(newGameState).forEach((key) => {
					this.state[key] = newGameState[key];
				});
			}
		}

		const isOnIOS = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i);
		const eventName = isOnIOS ? "pagehide" : "beforeunload";

		window.addEventListener(eventName, function () {
			let unloadingTime = new Date();
			unloadingTime = unloadingTime.getTime();
			localStorage.setItem("lpb-unloadtime", JSON.stringify(unloadingTime));
		});
	}

	componentDidUpdate() {
		let stateCopy = { ...this.state };
		delete stateCopy.showAlert;
		delete stateCopy.showBackdrop;
		delete stateCopy.speechEnabled;
		delete stateCopy.synth;
		delete stateCopy.voices;
		localStorage.setItem("lpbclassic", JSON.stringify(stateCopy));
	}

	/*
	 *  Load Voices Function
	 *  Will load voices as they change within the browser
	 */
	loadVoices = () => {
		const voices = this.state.synth.getVoices();
		const currentValue = this.state.selectedCaller;
		let selectedCaller = null;
		if (currentValue && currentValue.hasOwnProperty("value") && !currentValue.hasOwnProperty("name")) {
			voices.map((voice, index) => {
				voice.value = index;
				if (index === currentValue.value) {
					selectedCaller = voice;
				}
				return voice;
			});
		}
		this.setState({ voices, selectedCaller });
	};

	/*
	 *  Say Function
	 *  Will speak any string that is passed in
	 */
	say = (text) => {
		if (this.state.speechEnabled) {
			// Create a new instance of SpeechSynthesisUtterance.
			let msg = new SpeechSynthesisUtterance();
			msg.text = text;
			if (this.state.selectedCaller && this.state.selectedCaller.hasOwnProperty("value")) {
				msg.voice = this.state.selectedCaller;
			}
			this.cancelSpeech();
			this.state.synth.speak(msg);
		}
	};

	cancelSpeech = () => {
		if (window.speechSynthesis.speaking) {
			window.speechSynthesis.cancel();
		}
	};

	/*
	 *  Reset Game Function
	 *  Map out the original balls array and update
	 *  active and called statuses to false
	 */
	resetGame = () => {
		this.cancelSpeech();
		if (this.state.running === true) {
			clearInterval(this.state.interval);
		}
		let resetBalls = this.state.balls;
		_.map(resetBalls, (ball, index) => {
			resetBalls[index].active = false;
			resetBalls[index].called = false;
		});
		if (this.state.showAlert === true) {
			this.closeAlert();
		}
		this.setState({ balls: resetBalls, newGame: true, running: false });
	};

	startGame = () => {
		if (this.state.newGame) {
			this.say("Let's Play Bingo!");
		}
		setTimeout(this.toggleGame, 1500);
	};

	/*
	 *  Toggle Game Function
	 *  Check the opposite of the current running state, this will determine our new state
	 *  If the game is now running, call a number right away then set a new interval
	 *  Otherwise, clear the interval
	 *  Set the current running state
	 */
	toggleGame = () => {
		if (!this.state.running === true) {
			this.callNumber();
			this.setState({ interval: setInterval(this.callNumber, this.state.delay) });
		} else {
			clearInterval(this.state.interval);
		}
		this.setState({ newGame: false, running: !this.state.running });
	};

	/*
	 *  Set Delay Function
	 *  Fires when the user uses the delay slider
	 *  If the game is running it'll clear the existing interval and set a new one
	 *  Otherwise it will just update the delay
	 */
	setDelay = (e) => {
		if (this.state.running) {
			clearInterval(this.state.interval);
			this.setState({ delay: e.target.value, interval: setInterval(this.callNumber, e.target.value) });
		} else {
			this.setState({ delay: e.target.value });
		}
	};

	/*
	 *  Choose Caller Function
	 */
	chooseCaller = (e) => {
		if (e === null) {
			// default
			this.setState({ selectedCaller: this.state.voices[0] });
		} else {
			let voice = this.state.voices[e.value];
			voice.value = e.value;
			this.setState({ selectedCaller: voice });
		}
	};

	/*
	 *  Call Number Function
	 *  Will get all of the balls, find the active one and reset it
	 *  Grabs uncalled balls and determines if there are still uncalled balls
	 *  Otherwise, it'll generate a random ball, set it to called and active
	 */
	callNumber = () => {
		// get all balls
		let balls = this.state.balls;
		// get active bll and reset
		let active = _.where(balls, { active: true });
		active.forEach((ball) => {
			ball.active = false;
		});
		// get all uncalled balls
		let uncalled = _.where(balls, { called: false });
		if (uncalled.length === 0) {
			this.openAlert();
		} else {
			// choose a random ball
			let randomball = uncalled[Math.floor(Math.random() * uncalled.length)];
			let newBall = balls[randomball.number];
			// set status of ball as called and active
			newBall.called = true;
			newBall.active = true;
			// call the new ball, first call it all together, then call each character individually
			let ballstring = newBall.number.toString();
			this.say([
				newBall.letter,
				newBall.number,
				" ",
				" ",
				newBall.letter,
				" ",
				ballstring.length === 2 ? [ballstring.charAt(0), " ", ballstring.charAt(1)] : newBall.number,
			]);
			// update the state to re-render the board
			this.setState({ balls: balls });
		}
	};

	openAlert = () => {
		window.scrollTo(0, 0);
		document.body.classList.add("backdrop-visible");
		this.setState({ showAlert: true, showBackdrop: true });
	};

	closeAlert = () => {
		document.body.classList.remove("backdrop-visible");
		this.setState({ showAlert: false, showBackdrop: false });
	};

	get backdropClasses() {
		return this.state.showBackdrop ? "show" : "hide";
	}
	get alertClasses() {
		return this.state.showBackdrop ? "show text-center" : "hide";
	}

	get year() {
		return new Date().getFullYear();
	}

	/*
	 *  Render Method
	 *  Displays the bingo page
	 */
	render() {
		return (
			<div>
				<div id="backdrop" className={this.backdropClasses}></div>
				<div id="disclaimer" className={this.alertClasses}>
					<h4 className="no-margin">Bingo!</h4>
					<p className="small-text">All of the bingo balls have been called!</p>
					<p>
						<button onClick={this.resetGame}>Reset</button> | <button onClick={this.closeAlert}>Close</button>
					</p>
				</div>

				<header>
					<div className="row">
						<div className="col c50">
							<div className="logo-block">
								<img className="logo" src={logo} alt="Let's Play Bingo Logo" />
								<span className="logo-title">Classic Edition</span>
							</div>
						</div>
						<div className="col c50 text-right">
							<div id="google_translate_element"></div>
						</div>
					</div>
				</header>

				<section id="board">
					<div className="row flex">
						<div className="col c85">
							<BingoBoard balls={this.state.balls} />
						</div>
						<div className="col c15 padding">
							<BallDisplay balls={this.state.balls} />
						</div>
					</div>
				</section>

				<section id="buttons">
					<div className="row">
						<div className="col c40">
							<button onClick={this.state.newGame ? this.startGame : this.toggleGame}>
								{this.state.newGame ? "Start" : this.state.running ? "Pause" : "Resume"}
							</button>
							<button onClick={this.callNumber} disabled={this.state.running ? "disabled" : ""}>
								Next Number
							</button>
							<button onClick={this.resetGame}>Reset</button>
						</div>
						<div className="col c40 text-center">
							<div id="speed">
								<span>Slow</span>
								<input onChange={(e) => this.setDelay(e)} type="range" value={this.state.delay} min="5000" max="16000" step="1000" />
								<span>Fast</span>
							</div>
						</div>
						<div className="col c20 text-right">
							{this.state.speechEnabled ? (
								<Select
									name="voiceselect"
									placeholder="Choose Caller"
									searchable
									onBlurResetsInput={true}
									value={this.state.selectedCaller ? this.state.selectedCaller.value : ""}
									onChange={this.chooseCaller}
									options={_.map(this.state.voices, (voice, index) => ({
										value: index,
										label: voice.name + " / " + getLanguageText(voice.lang),
									}))}
								/>
							) : (
								<span className="small-text single-line-height">
									Sorry, your browser doesn't support our vocal caller! Try Chrome!
								</span>
							)}
						</div>
					</div>
				</section>

				<section>
					<div className="row">
						<div className="col c25 padding">
							<Pattern />
						</div>
						<div className="col c75 padding">
							<p className="medium-text">
								Use this free bingo caller to host your own bingo games at home! You provide the cards, we generate the bingo numbers!
								No downloads, no ads, and <strong>completely free</strong>!
							</p>
							<p className="small-text">
								Thank you to those who have reached out to me to tell me how much they enjoy my bingo caller. I created this site in
								honor of my late grandmother, we used to play bingo together using a little electronic bingo caller. Grandma Jo - this
								is for you. &hearts; - Karol
							</p>
							<p className="small-text no-margin">
								<strong>Note:</strong> The classic edition is very rarely worked on, generally only for fixing issues as people bring
								them to my attention. For the most up to date version please check out{" "}
								<a href="https://letsplaybingo.io" className="notranslate">
									LetsPlayBingo.io
								</a>
								. You can also try{" "}
								<a href="https://90ball.letsplaybingo.io" className="notranslate">
									90 Ball
								</a>{" "}
								or the{" "}
								<a href="https://beta.letsplaybingo.io" className="notranslate">
									beta edition
								</a>{" "}
								for a sneak peek at some of the new features I'm working on.
							</p>
						</div>
					</div>
				</section>

				<section className="bg-gray">
					<div className="row vertical-top">
						<div className="col c50 padding">
							<h5 className="no-margin">Recent Updates</h5>
							<p className="small-text">
								<span className="notranslate">Let's Play Bingo! Classic</span> edition was last updated on 1/7/2024.
							</p>
							<ul className="small-text">
								{/* <li>Made app available for download.</li> */}
								{/* <li>Made fixes to CSS classses.</li> */}
							</ul>
							<p className="small-text">
								<strong>Known Issue:</strong> In the Safari browser on Mac, some versions in the last year or two have bugs where no
								voices will load using the SpeechSynthesis capabilities of the browser. If you are having this issue and Choose Caller
								shows "No results found" try downloading{" "}
								<a href="https://www.google.com/chrome/" rel="noopener noreferrer" target="_blank">
									Google Chrome
								</a>{" "}
								and using that browser for gameplay. Otherwise, try the <a href="https://letsplaybingo.io">latest edition</a> which
								has an mp3 caller option.
							</p>
							<p className="small-text">
								Found a Bug? Let me know! Send an email to{" "}
								<a href="mailto:hello@letsplaybingo.io?subject=Let's Play Bingo Classic!">hello@letsplaybingo.io</a>.
								<br />
								Check out this project on <a href="https://github.com/karolbrennan/letsplaybingo.classic">GitHub</a>.
							</p>
						</div>
						<div className="col c50 padding small-text">
							<h3>Love the app? Want to show your support?</h3>
							<p>
								<span className="notranslate">Let's Play Bingo</span> is completely <strong>ad free</strong> and is run by a single
								developer. If you'd like to contribute toward the costs associated with running a website like this, or want to tip
								the developer just to say thanks, I am accepting donations via Buy Me A Coffee, Paypal, or Venmo!
							</p>
							<p>
								<a href="https://www.buymeacoffee.com/letsplaybingo" target="_blank" rel="noopener noreferrer">
									<img className="qr-code" src={buyacoffee} alt="buy a coffee" />
								</a>
								<a href="https://venmo.com/karolbrennan" target="_blank" rel="noopener noreferrer">
									<img className="qr-code" src={venmo} alt="venmo" />
								</a>
								<a href="https://paypal.me/karolbrennan" target="_blank" rel="noopener noreferrer">
									<img className="qr-code" src={paypal} alt="paypal" />
								</a>
							</p>
							<p>
								<strong>Buy Me a Coffee</strong> allows you to make a donation using a credit/debit card processed securely through{" "}
								<a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
									Stripe
								</a>{" "}
								with no need to log in or create an account!
							</p>
							<p>
								<strong>Paypal</strong> allows you to donate automatically on a weekly or monthly basis!
							</p>
						</div>
					</div>
				</section>

				<footer>
					<div className="row">
						<div className="col c30 text-left">For entertainment purposes only.</div>
						<div className="col c40 text-center">
							<p>
								© 2017-{this.year}{" "}
								<a href="https://letsplaybingo.io" className="notranslate">
									Let's Play Bingo!
								</a>
							</p>
						</div>
						<div className="col c30 text-right">
							<a href="https://letsplaybingo.io/terms">Terms of Use</a> |{" "}
							<a href="https://letsplaybingo.io/privacy">Cookies &amp; Privacy Policy</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default LetsPlayBingo;
