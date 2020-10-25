export interface IUser {
  _id: string;
  userId: string;
  name: {
    firstName: string;
    lastName: string;
  };
  contact: {
    email: string,
    phone: {
      dialCode: number,
      iso2: string,
      country: string,
      number: number
    }
  };
  password: string;
  role: string;
  isDeleted: Boolean;
  isBlocked: Boolean;
}

export interface IUserInputDTO {
  userId: string;
  name: {
    firstName: string;
    lastName: string;
  };
  contact: {
    email: string,
    phone: {
      dialCode: number,
      iso2: string,
      country: string,
      number: number
    }
  };
  password: string;
  role: string;
  isBlocked: Boolean;
}
