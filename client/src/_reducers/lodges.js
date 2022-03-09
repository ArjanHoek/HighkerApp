const lodgesReducer = (lodges = [], action) => {
  switch (action.type) {
    case 'POST':
      return [...lodges, action.payload];
    case 'GET':
      return action.payload;
    case 'UPDATE':
      return lodges.map(lodge =>
        lodge._id === action.payload._id ? action.payload : lodge
      );
    case 'DELETE':
      return lodges.filter(lodge => lodge._id !== action.payload);
    default:
      return lodges;
  }
};

export default lodgesReducer;
