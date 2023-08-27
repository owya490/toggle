import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface activeToggleState {
    toggleId: string;
}

const initialState: activeToggleState = {
    toggleId: "",
};

export const activeToggleSlice = createSlice({
    name: "activeToggle",
    initialState,
    reducers: {
        updateActiveToggleId: (state, action: PayloadAction<string>) => {
            state.toggleId = action.payload;
        },
    },
});

export const { updateActiveToggleId } = activeToggleSlice.actions;

export default activeToggleSlice.reducer;
