// import { Manager } from "./manager";
// import { newURL, getHashedPath } from "./url";

export type Trigger = HTMLAnchorElement | "HistoryManager" | "popstate" | "back" | "forward";
export interface ICoords {
	readonly x: number;
	readonly y: number;
}

export interface IStateData {
	scroll: ICoords;
	[key: string]: any;
}

export interface IState {
	url: string;
	index?: number;
	transition: string;
	data: IStateData;
}

/**
 * A quick snapshot of page coordinates, e.g. scroll positions
 *
 * @export
 * @param {number} [x=window.scrollX]
 * @param {number} [y=window.scrollY]
 */
export const newCoords = (x: number = window.scrollX, y: number = window.scrollY): ICoords => ({ x, y });

/**
 * Represents the current status of the page consisting of properties like: url, transition, and data
 *
 * @export
 * @param {IState} {
 *         url = new _URL(),
 *         index = 0,
 *         transition = "default",
 *         data = {
 *             scroll: new StateCoords(),
 *             trigger: "HistoryManager"
 *         }
 *     }
 * @memberof State
*/
export const newState = (state: IState = {
	url: "/",
	transition: "default",
	data: {
		scroll: newCoords(),
		trigger: "HistoryManager"
	}
}): IState => (state);


/**
 * History of the site, stores only the State class
 *
 * @export
 * @class HistoryManager
 * @extends {Manager<number, IState>}
 */
export class HistoryManager {
	public states: IState[];
	public pointer = -1;

	/**
	 * Creates an instance of the HistoryManager class, which inherits properties and methods from the Storage class.
	 *
	 * @memberof HistoryManager
	 * @constructor
	 */
	constructor() {
		this.states = [];
	}

	public get(index: number) {
		return this.states[index];
	}

	/**
	 * Sets the index of the state before adding to HistoryManager
	 *
	 * @param {IState} value
	 * @returns HistoryManager
	 */
	public add(value: IState): HistoryManager {
		let state = newState(value);
		let len = this.length;
		this.states.push({ ...state, index: len });
		this.pointer = len;
		return this;
	}

	public remove(index?: number) {
		if (index) {
			this.states.splice(index, 1);
		} else {
			this.states.pop();
		}

		this.pointer--;
		return this;
	}

	/**
	 * Set state by index.
	 */
	public set(i: number, state: IState) {
		return (this.states[i] = state);
	}

	/**
	 * Get the current state.
	 */
	get current(): IState {
		return this.get(this.pointer);
	}

	/**
	 * Get the last state (top of the history stack).
	 */
	get last(): IState {
		return this.get(this.length - 1);
	}

	/**
	 * Get the previous state.
	 */
	get previous(): IState | null {
		return this.pointer < 1 ? null : this.get(this.pointer - 1);
	}

	get length() {
		return this.states.length;
	}
}
