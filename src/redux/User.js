import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {name: "", age: 0, email: ""}

export const userSlice = createSlice({
    name: "user", //리듀서 이름
    initialState: { value: initialStateValue}, //들어갈 데이터의 초기값을 잡아줌
    reducers: { //이제 상태가 변하면 어떻게 실행될지 정하는 부분
        login: (state, action) => {
            state.value = action.payload //state는 우리가 잡아놓은 초기값의 value를 가져오는 역할을 하고 actions안에 payload랑 type 이라는 친구가 있는데 우리가 바꾸고 싶은 데이터를 원하는 곳에다가 넘겨주는 역할을 한다.
        },
        logout: (state) => {
            state.value = initialStateValue
        }
    },
})
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
//스토어가 식당이면 리듀서는 접시