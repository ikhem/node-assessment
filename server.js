const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./userCtrl');
const port = 3000;
const app = express()

app.use(bodyParser.json());

app.get(`/api/users`, userCtrl.getUser);
app.get(`/api/users/:userId`, userCtrl.getId);
app.get(`/api/admins`, userCtrl.getAdmins);
app.get(`/api/nonadmins`, userCtrl.getNonAdmins);
app.get(`/api/user_type/:userType`, userCtrl.getUserType);

app.put(`/api/users/:userId`, userCtrl.updateById);

app.post(`/api/users`, userCtrl.addUser);

app.delete(`/api/users/:userId`, userCtrl.removeUser);

app.listen(port, ()=>{
  console.log(`Server listening on port ${port}.`);
})