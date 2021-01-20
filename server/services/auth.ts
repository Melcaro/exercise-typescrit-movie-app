interface IAuth {
  api_key: string;
}

export const auth: IAuth = {
  api_key: process.env.REACT_APP_API_KEY,
};
