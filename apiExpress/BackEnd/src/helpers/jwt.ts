const jwt = require("jsonwebtoken");

const generarJWT = (
  _id: string,
  login: string,
  expiratoken = process.env.EXPIRA_TOKEN,
  jwtSecret = process.env.JWT_SECRET
) => {
  return new Promise((resolve, reject) => {
    const payload = {
      _id,
      login,
    };
    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: expiratoken,
      },
      (error: string, token: string) => {
        if (error) {
          console.log(error);
          reject("NO se pudo generar el token");
        } else resolve(token);
      }
    );
  });
};

export default generarJWT;
