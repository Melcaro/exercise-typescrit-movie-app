interface IAuth {
  api_key: string;
}

export const auth: IAuth = {
  api_key: process.env.API_KEY,
};
