import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: []
}

export const fetchCourses = createAsyncThunk(
    'fetch/courses',
    async (_, thunkAPI) => {
        try {
            const data = await fetch('http://localhost:4000/courses');
            const course = data.json();
            return course
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

const courseSlice = createSlice({
    name: 'Course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCourses.fulfilled, (state, action) => {
            state.courses = action.payload
        })
    }
})

export default courseSlice.reducer;