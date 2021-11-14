import {observable} from "./core/observer.js";

export const store = {
    state: observable({
        a: 10,
        b:20
    }),

    setState (newState) {
        for(const [k, v] of Object.entries(newState)) {
            if(!this.state[k]) continue;
            this.state[k] = v;

        }
    }
}