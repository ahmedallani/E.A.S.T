const express = require("express");
var router = express.Router();
const FreeLancer = require("../Data-Base/freelancer/freelancer");

/*Login FreeLancer*/

router.post("/Login", async function(req, res, next) {
  console.log(req.body);
  try {
    result = await FreeLancer.loginFreeLancer(req.body);
    if (result.userData) {
      delete result.userData.password;
      res.send({ Login: true, userData: result.userData });
    } else {
      res.send({ Login: false, userData: result.userData });
    }
  } catch (err) {
    console.log(err);
  }
});
/*Signup FreeLancer*/

router.post("/Signup", function(req, res, next) {
  if (Object.keys(req.body).length) {
    FreeLancer.SignupFreeLancer(req.body, (result, error) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") {
          res.send({ Dup: true });
        }
      } else {
        res.send({ Signup: true });
      }
    });
  } else {
    res.send({ Signup: false });
  }
});

module.exports = router;
//{FisrtName:'alaa',LastName:'lassoued',Email:'d',Password:'0000',Gender:'hello',Age:21,City:'tunis',Adresse:"mg",Field:"designe"}
