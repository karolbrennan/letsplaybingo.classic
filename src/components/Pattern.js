/*
 *  Pattern Class
 *  Karol Brennan
 *  5.12.2018
 *  This class is used to display and control the game pattern.
 */
import React from "react";
import _ from "underscore";
import Select from "react-select";

class Pattern extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			pattern: {
				B: [false, false, false, false, false],
				I: [false, false, false, false, false],
				N: [false, false, false, false, false],
				G: [false, false, false, false, false],
				O: [false, false, false, false, false],
			},
			presets: {
				Custom: {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [false, false, false, false, false],
					O: [false, false, false, false, false],
				},
				"6 Pack As Shown": {
					B: [true, true, false, false, false],
					I: [true, true, false, false, false],
					N: [true, true, false, false, false],
					G: [false, false, false, false, false],
					O: [false, false, false, false, false],
				},
				"6 Pack Anywhere": {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [false, true, true, true, false],
					O: [false, true, true, true, false],
				},
				"8 Pack As Shown": {
					B: [false, false, false, true, true],
					I: [false, false, false, true, true],
					N: [false, false, false, true, true],
					G: [false, false, false, true, true],
					O: [false, false, false, false, false],
				},
				"8 Pack Anywhere": {
					B: [true, true, false, false, false],
					I: [true, true, false, false, false],
					N: [true, true, false, false, false],
					G: [true, true, false, false, false],
					O: [false, false, false, false, false],
				},
				"9 Pack As Shown": {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [false, false, true, true, true],
					G: [false, false, true, true, true],
					O: [false, false, true, true, true],
				},
				"9 Pack Anywhere": {
					B: [false, false, false, false, false],
					I: [true, true, true, false, false],
					N: [true, true, true, false, false],
					G: [true, true, true, false, false],
					O: [false, false, false, false, false],
				},
				"Add Subtract": {
					B: [false, false, false, false, false],
					I: [false, true, false, false, true],
					N: [true, true, true, false, true],
					G: [false, true, false, false, true],
					O: [false, false, false, false, false],
				},
				Airplane: {
					B: [false, true, true, true, false],
					I: [false, false, true, false, false],
					N: [false, false, true, false, false],
					G: [true, true, true, true, true],
					O: [false, false, true, false, false],
				},
				Anchor: {
					B: [false, false, false, true, true],
					I: [true, false, false, false, true],
					N: [true, true, true, true, true],
					G: [true, false, false, false, true],
					O: [false, false, false, true, true],
				},
				Arrowhead: {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [true, false, false, false, false],
					G: [true, true, false, false, false],
					O: [true, true, true, false, false],
				},
				Blackout: {
					B: [true, true, true, true, true],
					I: [true, true, true, true, true],
					N: [true, true, true, true, true],
					G: [true, true, true, true, true],
					O: [true, true, true, true, true],
				},
				BO: {
					B: [true, true, true, true, true],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [false, false, false, false, false],
					O: [true, true, true, true, true],
				},
				"Bow Tie": {
					B: [true, true, true, true, true],
					I: [false, true, true, true, false],
					N: [false, false, true, false, false],
					G: [false, true, true, true, false],
					O: [true, true, true, true, true],
				},
				Brackets: {
					B: [true, true, false, true, true],
					I: [true, false, false, false, true],
					N: [false, false, false, false, false],
					G: [true, false, false, false, true],
					O: [true, true, false, true, true],
				},
				"Broken Frame": {
					B: [true, false, true, false, true],
					I: [false, false, false, false, false],
					N: [true, false, false, false, true],
					G: [false, false, false, false, false],
					O: [true, false, true, false, true],
				},
				Candlestick: {
					B: [true, true, true, false, false],
					I: [false, false, true, false, true],
					N: [true, true, true, true, true],
					G: [false, false, true, false, true],
					O: [true, true, true, false, false],
				},
				"Cent Sign": {
					B: [false, false, false, false, false],
					I: [false, true, true, true, false],
					N: [true, true, false, true, true],
					G: [false, true, false, true, false],
					O: [false, false, false, false, false],
				},
				Checkerboard: {
					B: [true, false, true, false, true],
					I: [false, true, false, true, false],
					N: [true, false, true, false, true],
					G: [false, true, false, true, false],
					O: [true, false, true, false, true],
				},
				Clover: {
					B: [false, true, true, true, false],
					I: [true, true, false, true, false],
					N: [true, false, true, true, true],
					G: [true, true, false, true, false],
					O: [false, true, true, true, false],
				},
				"Clover Leaf": {
					B: [true, true, false, true, true],
					I: [true, true, false, true, true],
					N: [false, false, false, false, false],
					G: [true, true, false, true, true],
					O: [true, true, false, true, true],
				},
				"Champagne Glass": {
					B: [true, false, false, false, false],
					I: [true, true, false, false, true],
					N: [true, true, true, true, true],
					G: [true, true, false, false, true],
					O: [true, false, false, false, false],
				},
				Checkmark: {
					B: [false, false, true, true, true],
					I: [false, false, false, true, false],
					N: [false, false, true, false, false],
					G: [false, true, false, false, false],
					O: [true, false, false, false, false],
				},
				Coverall: {
					B: [true, true, true, true, true],
					I: [true, true, true, true, true],
					N: [true, true, true, true, true],
					G: [true, true, true, true, true],
					O: [true, true, true, true, true],
				},
				"Crazy Arrow": {
					B: [false, false, false, false, true],
					I: [false, false, false, true, false],
					N: [true, false, true, false, false],
					G: [true, true, false, false, false],
					O: [true, true, true, false, false],
				},
				"Crazy Arrowhead": {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [true, false, false, false, false],
					G: [true, true, false, false, false],
					O: [true, true, true, false, false],
				},
				"Crazy Kite": {
					B: [false, false, false, true, true],
					I: [false, false, false, true, true],
					N: [false, false, true, false, false],
					G: [false, true, false, false, false],
					O: [true, false, false, false, false],
				},
				"Crazy L": {
					B: [false, false, false, false, true],
					I: [false, false, false, false, true],
					N: [false, false, false, false, true],
					G: [false, false, false, false, true],
					O: [true, true, true, true, true],
				},
				"Crazy T": {
					B: [true, true, true, true, true],
					I: [false, false, true, false, false],
					N: [false, false, true, false, false],
					G: [false, false, true, false, false],
					O: [false, false, true, false, false],
				},
				Cross: {
					B: [false, true, false, false, false],
					I: [false, true, false, false, false],
					N: [true, true, true, true, true],
					G: [false, true, false, false, false],
					O: [false, true, false, false, false],
				},
				Diamond: {
					B: [false, false, true, false, false],
					I: [false, true, false, true, false],
					N: [true, false, false, false, true],
					G: [false, true, false, true, false],
					O: [false, false, true, false, false],
				},
				"Diamond Filled": {
					B: [false, false, true, false, false],
					I: [false, true, true, true, false],
					N: [true, true, true, true, true],
					G: [false, true, true, true, false],
					O: [false, false, true, false, false],
				},
				"Diamond Inside": {
					B: [false, false, false, false, false],
					I: [false, false, true, false, false],
					N: [false, true, true, true, false],
					G: [false, false, true, false, false],
					O: [false, false, false, false, false],
				},
				"Dog Bone": {
					B: [false, true, true, true, false],
					I: [false, false, true, false, false],
					N: [false, false, true, false, false],
					G: [false, false, true, false, false],
					O: [false, true, true, true, false],
				},
				"Double Bingo": {
					B: [false, false, true, false, false],
					I: [true, true, true, true, true],
					N: [false, false, true, false, false],
					G: [false, false, true, false, false],
					O: [false, false, true, false, false],
				},
				"Double Chevron": {
					B: [false, false, true, false, true],
					I: [false, true, false, true, false],
					N: [true, false, true, false, false],
					G: [false, true, false, true, false],
					O: [false, false, true, false, true],
				},
				"Double X": {
					B: [true, false, true, false, false],
					I: [false, true, false, false, false],
					N: [true, false, true, false, true],
					G: [false, false, false, true, false],
					O: [false, false, true, false, true],
				},
				"Field Goal": {
					B: [true, true, true, false, false],
					I: [false, false, true, false, false],
					N: [true, false, true, true, true],
					G: [false, false, true, false, false],
					O: [true, true, true, false, false],
				},
				Flag: {
					B: [true, true, true, true, true],
					I: [true, true, true, false, false],
					N: [true, true, true, false, false],
					G: [true, true, true, false, false],
					O: [true, true, true, false, false],
				},
				"Four Corners": {
					B: [true, false, false, false, true],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [false, false, false, false, false],
					O: [true, false, false, false, true],
				},
				"Four Corners Small": {
					B: [false, false, false, false, false],
					I: [false, true, false, true, false],
					N: [false, false, false, false, false],
					G: [false, true, false, true, false],
					O: [false, false, false, false, false],
				},
				GO: {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [true, true, true, true, true],
					O: [true, true, true, true, true],
				},
				Hardway: {
					B: [false, true, false, false, false],
					I: [false, true, false, false, false],
					N: [false, true, false, false, false],
					G: [false, true, false, false, false],
					O: [false, true, false, false, false],
				},
				Heart: {
					B: [false, true, true, false, false],
					I: [true, true, true, true, false],
					N: [false, true, true, true, true],
					G: [true, true, true, true, false],
					O: [false, true, true, false, false],
				},
				Hourglass: {
					B: [true, false, false, false, true],
					I: [true, true, false, true, true],
					N: [true, false, true, false, true],
					G: [true, true, false, true, true],
					O: [true, false, false, false, true],
				},
				"ING Game": {
					B: [false, false, false, false, false],
					I: [true, true, true, true, true],
					N: [true, true, true, true, true],
					G: [true, true, true, true, true],
					O: [false, false, false, false, false],
				},
				Ladder: {
					B: [false, false, false, false, false],
					I: [true, true, true, true, true],
					N: [false, true, false, true, false],
					G: [true, true, true, true, true],
					O: [false, false, false, false, false],
				},
				"Large Frame": {
					B: [true, true, true, true, true],
					I: [true, false, false, false, true],
					N: [true, false, false, false, true],
					G: [true, false, false, false, true],
					O: [true, true, true, true, true],
				},
				"Layer Cake": {
					B: [true, false, true, false, true],
					I: [true, false, true, false, true],
					N: [true, false, true, false, true],
					G: [true, false, true, false, true],
					O: [true, false, true, false, true],
				},
				"Letter X": {
					B: [true, false, false, false, true],
					I: [false, true, false, true, false],
					N: [false, false, true, false, false],
					G: [false, true, false, true, false],
					O: [true, false, false, false, true],
				},
				"Love Letter": {
					B: [true, true, true, true, true],
					I: [false, false, false, false, true],
					N: [false, false, false, false, true],
					G: [true, true, false, false, true],
					O: [true, true, false, false, true],
				},
				"Lucky 7": {
					B: [true, false, false, false, true],
					I: [true, false, false, true, false],
					N: [true, false, true, false, false],
					G: [true, true, false, false, false],
					O: [true, false, false, false, false],
				},
				"Number Sign": {
					B: [false, true, false, true, false],
					I: [true, true, true, true, true],
					N: [false, true, false, true, false],
					G: [true, true, true, true, true],
					O: [false, true, false, true, false],
				},
				"One Away": {
					B: [true, true, true, true, true],
					I: [true, true, true, true, true],
					N: [true, true, true, true, true],
					G: [true, true, true, false, true],
					O: [true, true, true, true, true],
				},
				"Percent Sign": {
					B: [true, true, false, false, true],
					I: [true, true, false, true, false],
					N: [false, false, true, false, false],
					G: [false, true, false, true, true],
					O: [true, false, false, true, true],
				},
				"Picnic Table": {
					B: [true, false, false, false, true],
					I: [true, true, false, true, false],
					N: [true, false, true, false, false],
					G: [true, true, false, true, false],
					O: [true, false, false, false, true],
				},
				"Plus Sign": {
					B: [false, false, true, false, false],
					I: [false, false, true, false, false],
					N: [true, true, true, true, true],
					G: [false, false, true, false, false],
					O: [false, false, true, false, false],
				},
				"Postage Stamps": {
					B: [true, true, false, false, false],
					I: [true, true, false, false, false],
					N: [false, false, false, false, false],
					G: [false, false, false, true, true],
					O: [false, false, false, true, true],
				},
				Pyramid: {
					B: [false, false, false, false, true],
					I: [false, false, false, true, true],
					N: [false, false, true, true, true],
					G: [false, false, false, true, true],
					O: [false, false, false, false, true],
				},
				"Railroad Tracks": {
					B: [false, false, false, false, false],
					I: [true, true, true, true, true],
					N: [false, false, false, false, false],
					G: [true, true, true, true, true],
					O: [false, false, false, false, false],
				},
				"Regular or 4 Corners": {
					B: [true, false, false, false, true],
					I: [false, true, false, false, false],
					N: [false, false, true, false, false],
					G: [false, false, false, true, false],
					O: [true, false, false, false, true],
				},
				"Small Frame": {
					B: [false, false, false, false, false],
					I: [false, true, true, true, false],
					N: [false, true, false, true, false],
					G: [false, true, true, true, false],
					O: [false, false, false, false, false],
				},
				Smile: {
					B: [false, false, false, true, false],
					I: [false, true, false, false, true],
					N: [false, false, true, false, true],
					G: [false, true, false, false, true],
					O: [false, false, false, true, false],
				},
				Sputnik: {
					B: [true, false, false, false, true],
					I: [false, true, true, true, false],
					N: [false, true, true, true, false],
					G: [false, true, true, true, false],
					O: [true, false, false, false, true],
				},
				Staircase: {
					B: [false, false, false, false, true],
					I: [false, false, false, true, true],
					N: [false, false, true, true, true],
					G: [false, true, true, true, true],
					O: [true, true, true, true, true],
				},
				"Stamp and 4 Corners": {
					B: [true, false, false, false, true],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [true, true, false, false, false],
					O: [true, true, false, false, true],
				},
				"Stamp and Line": {
					B: [true, true, false, false, true],
					I: [true, true, false, true, false],
					N: [false, false, true, false, false],
					G: [false, true, false, false, false],
					O: [true, false, false, false, false],
				},
				Starburst: {
					B: [true, false, true, false, true],
					I: [false, true, true, true, false],
					N: [true, true, true, true, true],
					G: [false, true, true, true, false],
					O: [true, false, true, false, true],
				},
				"Top and Bottom": {
					B: [true, false, false, false, true],
					I: [true, false, false, false, true],
					N: [true, false, false, false, true],
					G: [true, false, false, false, true],
					O: [true, false, false, false, true],
				},
				"Top Hat": {
					B: [false, false, false, false, true],
					I: [false, true, true, true, true],
					N: [false, true, true, true, true],
					G: [false, true, true, true, true],
					O: [false, false, false, false, true],
				},
				Tree: {
					B: [false, false, false, true, false],
					I: [false, true, true, true, false],
					N: [true, true, true, true, true],
					G: [false, true, true, true, false],
					O: [false, false, false, true, false],
				},
				"Triangle Game": {
					B: [true, true, true, true, true],
					I: [true, true, true, true, false],
					N: [true, true, true, false, false],
					G: [true, true, false, false, false],
					O: [true, false, false, false, false],
				},
				Turtle: {
					B: [false, true, false, false, true],
					I: [false, true, true, true, false],
					N: [true, true, true, true, false],
					G: [false, true, true, true, false],
					O: [false, true, false, false, true],
				},
				"Two Brackets": {
					B: [true, true, false, false, false],
					I: [true, false, false, false, false],
					N: [false, false, false, false, false],
					G: [false, false, false, false, true],
					O: [false, false, false, true, true],
				},
				Umbrella: {
					B: [false, true, true, false, false],
					I: [true, true, false, false, true],
					N: [true, true, true, true, true],
					G: [true, true, false, false, false],
					O: [false, true, true, false, false],
				},
				// Template
				// "": {
				//   B: [false, false, false, false, false],
				//   I: [false, false, false, false, false],
				//   N: [false, false, false, false, false],
				//   G: [false, false, false, false, false],
				//   O: [false, false, false, false, false]
				// },
			},
		};

		const cache = JSON.parse(localStorage.getItem("lpbclassicpattern"));
		if (cache) {
			if (Object.keys(cache).length > 0) {
				Object.keys(cache).forEach((key) => {
					if (key !== "presets") {
						this.state[key] = cache[key];
					}
				});
			}
		}
	}

	componentDidUpdate() {
		localStorage.setItem("lpbclassicpattern", JSON.stringify(this.state));
	}

	/*
	 *  Choose Pattern Function
	 *  This sets the selected pattern
	 *  Sets to default if no pattern is selected or selection is cleared.
	 */
	choosePattern = (e) => {
		if (e === null) {
			this.setState({
				selected: null,
				pattern: {
					B: [false, false, false, false, false],
					I: [false, false, false, false, false],
					N: [false, false, false, false, false],
					G: [false, false, false, false, false],
					O: [false, false, false, false, false],
				},
			});
		} else {
			this.setState({
				selected: e.value,
				pattern: this.state.presets[e.value],
			});
		}
	};

	/*
	 *  Update Pattern Function
	 *  As user clicks on slots for the pattern, update the pattern in the state
	 */
	updatePattern = (letter, index, slot) => {
		let pattern = this.state.pattern;
		pattern[letter][index] = !slot;
		this.setState({ selected: "Custom", pattern: pattern });
	};

	/*
	 *  Render Pattern Function
	 *  This will display a bingo card where the user can create their own pattern
	 *  Or choose a pattern from the searchable drop down
	 */
	render() {
		let pattern = this.state.pattern;
		let patternArray = [_.map(this.state.presets, (preset, value) => ({ value: value, label: value }))];

		return (
			<div id="bingopattern" className="notranslate">
				{_.map(pattern, (column, letter) => (
					<div key={letter} className="pattern-col">
						<div className="pattern-letter">{letter}</div>
						{_.map(column, (slot, index) => (
							<div
								key={letter + index}
								className={slot ? "selected pattern-slot" : "pattern-slot"}
								onClick={(e) => this.updatePattern(letter, index, slot)}>
								&nbsp;
							</div>
						))}
					</div>
				))}
				<Select
					name="patternselect"
					placeholder="Choose Pattern"
					value={this.state.selected}
					searchable
					onBlurResetsInput={true}
					clearable
					onChange={this.choosePattern}
					options={patternArray[0]}
				/>
			</div>
		);
	}
}

export default Pattern;
