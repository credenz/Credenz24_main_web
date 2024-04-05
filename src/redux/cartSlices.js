import { createSlice } from '@reduxjs/toolkit';

const storedLoginStatus = localStorage.getItem('loginStatus');
const initialState = {
	cart: [],
	totalSum: 0,
	loginStatus: storedLoginStatus === 'true',
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addtoCart: (state, action) => {
			state.cart.push(action.payload);
			state.totalSum += action.payload.cost;
		},
		removeFromCart: (state, action) => {
			const removedItem = state.cart.find((item) => item.id === action.payload);
			state.totalSum -= removedItem.cost;
			const index = state.cart.findIndex((item) => item.id === removedItem.id);
			console.log(state.cart.splice(index, 1));
		},
		emptyCart: (state) => {
			state.cart = [];
			state.totalSum = 0;
		},
		buyPass: (state, action) => {
			state.totalSum = 250;
			action.payload.map((item) => {
				if (item.id !== 111) {
					state.cart.push({
						id: item.id,
						name: item.heading,
						cost: 0,
					});
				}
			});
		},
		setLogin: (state) => {
			state.loginStatus = true;
			localStorage.setItem('loginStatus', true);
		},
		removeLogin: (state) => {
			state.loginStatus = false;
			localStorage.removeItem('loginStatus');
		},
		totalsome: (state, action) => {
			state.totalSum += action.payload;
		},
	},
});
export default cartSlice.reducer;
export const {
	addtoCart,
	removeFromCart,
	emptyCart,
	buyPass,
	totalsome,
	setLogin,
	removeLogin,
} = cartSlice.actions;
