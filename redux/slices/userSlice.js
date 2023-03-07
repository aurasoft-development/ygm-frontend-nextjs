import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../utils/apiCall";

// export const fetchHistory = createAsyncThunk("fetchHistory", async (token) => {
//     try {
//         const response = await apiCall(`student_history.php?token=${token}`, "get")
//         return response.data.history;
//     } catch (error) {
//         console.log("error", error.message);
//         return error;
//     }
// })

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: null
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    }
})

export default userSlice.reducer;