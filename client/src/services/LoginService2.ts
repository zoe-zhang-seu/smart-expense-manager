
import * as user_pb           from "../grpc/user_pb";
import { LoginServiceClient } from "../grpc/UserServiceClientPb";

const client = new LoginServiceClient(
  "http://localhost:5090",
  null,
  null
);

export interface LoginResult {
  success: boolean;
  userId:  string;
  error:   string;
}

export function login(
  username: string,
  password: string
): Promise<LoginResult> {
  const req = new user_pb.LoginRequest();
  req.setUsername(username);
  req.setPassword(password);

  return client.login(req, {}).then(resp => {
    const obj = resp.toObject();
    return {
      success: obj.success,
      userId:  obj.userid,
      error:   obj.error,
    };
  });
}
