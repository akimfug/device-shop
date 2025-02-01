import exp from "constants";
import { makeAutoObservable } from "mobx";

export default class FilterStore {
    _filterParameters: Record<string, Record<string, boolean>>

    constructor () {
        this._filterParameters = {}
        makeAutoObservable(this)
    }

    setFilterParameters(group: string, key: string, value: boolean) {
        if (this._filterParameters[group] === undefined) {
            this._filterParameters[group] = {}
        }
        this._filterParameters[group][key] = value
    }
    getFilterParameter() {
        return this._filterParameters
    }
}

export const filterStore = new FilterStore()
// const filterParameter = {
//     brands: {
//         "1": "1",
//         "2": "2"
//     },
//     types: {
//         "1": "1",
//         "2": "2"
//     }
// };
