let userData = require('./userData.json')

module.exports = {
  getUser: function(req, res){
    if (req.query.age){
      let minAge = userData.filter(person => {
        return (person.age < req.query.age)
      })
      res.status(200).json(minAge);
    } else if (req.query.lastname) {
      let lastName = userData.filter(person =>{
        return (person.last_name === req.query.lastname)
      })
      res.status(200).json(lastName);
    } else if (req.query.email) {
      let email = userData.filter(person =>{
        return (person.email === req.query.email)
      })
      res.status(200).json(email)
    } else if (req.query.favorites){
      let favorites = userData.filter(person =>{
        return (person.favorites.includes(req.query.favorites))
      })
      res.status(200).json(favorites)
    } else {
      res.status(200).json(userData);
    }
  },
  getId: function(req, res){
    let exists = userData.filter(person =>{
      return (person.id === parseInt(req.params.userId))
    })
    
    if(exists.length){
      res.status(200).send(exists[0])
    } else {
      res.status(404).json(null)
    }
  },
  getAdmins: function(req, res){
    let admins = userData.filter(person =>{
      return person.type === 'admin'
    })
    res.status(200).json(admins)
  },
  getNonAdmins: function(req, res){
    let nonAdmins = userData.filter(person =>{
      return person.type !== 'admin'
    })
    res.status(200).json(nonAdmins)
  },
  getUserType: function(req, res){
    let userType = userData.filter(person =>{
      return person.type === req.params.userType
    })
    res.status(200).json(userType)
  },
  updateById: function(req, res){
    userData[req.params.userId - 1] = req.body;
    res.status(200).json(userData);
  },
  addUser: function(req, res){
    req.body.id = userData.length + 1;
    userData.push(req.body);
    res.status(200).json(userData);
  },
  removeUser: function(req, res){
    userData = userData.filter(person =>{
      return person.id !== parseInt(req.params.userId)
    })
    res.status(200).json(userData)
  }
}