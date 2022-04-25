const lflDbError = (err) => {
  if(err) {
    return console.log(`An error occured while connecting to lfl database.
      Error message: ${err.messsage}`)
  } 
    else {
    console.log('Connected to lfl database')
    }
  }

module.exports = lflDbError;



