import { ReaderModality } from "./readermodality.js";
/**
 * This class can be used to register keybinds for each of the different screen
 * reader modes, and to trigger corresponding callbacks based on the key pressed
 * and the current mode of the screen reader.
 *
 * It also contains utilities for getting help for all of the controls and to
 * ensure key names are properly enunciated by the screen reader.
 */
export class Keybinds {
    // construct a new instance of the Keybinds class, initializing keybinds array
    constructor() {
        this.keybinds = [];
        // I believe typescript turns enums into a 2-way dict, so need to filter out
        // numeric keys only to serve as array indices
        Object.keys(ReaderModality).forEach((key) => {
            let asIdx = Number(key);
            if (!isNaN(asIdx))
                this.keybinds[asIdx] = {};
        });
    }
    /**
     * Register a new keybind for the given mode, along with a short description
     * of what the key does and the callback that is triggered on keydown.
     *
     * @param forMode the mode for which this keybind should be listened for
     * @param keyName the exact name of the key, i.e. KeyboardEvent.key
     * @param description a short (1-5 word) description of what pressing the key
     * does, to be read out to the user if requested and to be displayed in the
     * on-screen controls
     * @param callback the callback to be triggered when the key is pressed.
     * @returns this keybind instance, for fluent-API-style chaining.
     */