import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = "";

export const themeSlice = createSlice({
    name: "theme", //리듀서 이름
    initialState: { value: initialStateValue}, //들어갈 데이터의 초기값을 잡아줌
    reducers: { //이제 상태가 변하면 어떻게 실행될지 정하는 부분
        changeColor: ( state, action) => {
            state.value = action.payload
        }
    },
})
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
//스토어가 식당이면 리듀서는 접시