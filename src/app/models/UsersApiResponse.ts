export interface UsersAPIResponse {
  message:    string;
  usersFound: User[];
}

export interface User {
  _id:       string;
  name:      string;
  email:     string;
  roles:     string[];
  createdAt: Date;
  updatedAt: Date;
}
