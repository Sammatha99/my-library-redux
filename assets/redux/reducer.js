const init = {
  cars: ["bmw", "honda"],
};

export default function reducer(state = init, action, args) {
  // reducer sau khi chạy sẽ trả ra state mới
  // gán state thông qua dispatch
  switch (action) {
    case "ADD":
      const [newCar] = args;
      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    default:
      return state;
  }
}
