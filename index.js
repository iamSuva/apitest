const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome suvadip");
});
app.get("/bhfl", (req, res) => {
  console.log("data",req.query);
  res.send({success:true,message:"welcome suvadip 1203"});
})
app.post("/bhfl", (req, res) => {
  const {data} = req.body;
  console.log(data);
  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  data.forEach((element) => {
    if (parseInt(element) % 2 == 0) {
      even_numbers.push(element);
    } else if (parseInt(element) % 2 == 1) {
      odd_numbers.push(element);
    } else if (element >= "a" && element <= "z") {
      console.log(element.toUpperCase());
       alphabets.push(element.toUpperCase());
    }
  });
  return res.status(200).send({
    is_success: true,
    user_id: "john_doe17091999",
    email: "john@xyz.com",
    roll_no: "ABCD123",
    even: even_numbers,
    odd: odd_numbers,
    alpha: alphabets,
  });
});

app.listen(3000, () => {
  console.log("server started");
});
