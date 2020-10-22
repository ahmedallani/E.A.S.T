const { connection } = require("../database");
var bcrypt = require("bcryptjs");
const { get } = require("../../ServerRoutes/Client");
var salt = bcrypt.genSaltSync(10);
const sql = (str) =>
  new Promise((resolve, reject) => {
    connection.query(str, function(error, results) {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });

// _*_ {Email,Password} instand of req
const loginFreeLancer = async (req) => {
  var userData = null;
  var password = null;
  try {
    let results = await sql(
      `SELECT * from Freelancers where Email="${req.Email}"`
    );
    if (results.length) {
      userData = results[0];
      password = results[0].password;
      let rtn=bcrypt.compareSync(req.Password, password)
          ? { error: null, userData }
          : { error: "Wrong Password", userData: null };
      return rtn
    } else {
      return { error: "Email Unvalid", userData: null }
    }
  } catch (err) {
    console.log(err);
  }
};

const SignupFreeLancer = (req, callback) => {
  if (req.Password) {
    var hash = bcrypt.hashSync(req.Password, salt);
    var query = `INSERT INTO Freelancers (FirstName,LastName,Email,password,Gender,Age,City,Adresse,Field) values ('${
      req.FirstName
    }','${req.LastName}','${req.Email}','${hash}','${req.Gender}',${req.Age},'${
      req.City
    }','${req.Adresse}','${req.Field}');`;
    connection.query(query, function(error, results, fields) {
      callback(results, error);
    });
  }
  ////dont forget this
};

module.exports = {
  SignupFreeLancer,
  loginFreeLancer,
};
