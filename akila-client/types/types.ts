export interface User {
  email: string;
  password: string;
}

export interface UserInfo {
  profileImage: string;
  success: boolean;
  token: string;
  user: {
    user: any;
    birthDate: string;
    userName: string;
    city: string;
    profileImage: string;
  };
}

export interface Post {
  _id: string;
  body: string;
  photo: string;
  tags: string[];
}
