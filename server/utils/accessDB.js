const { MongoClient } = require('mongodb')

const accessDB = async (func) => {
	const { DB_URI, DB_PASSWORD } = process.env
	const URI = DB_URI.replace('%_DB_PASSWORD_%', DB_PASSWORD)

	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}

	const client = new MongoClient(URI, options)

	try {
		await client.connect()
		const db = client.db('patch_diver')
		const results = await func(db)
		console.log('Success!')
		client.close()
		return results
	} catch (err) {
		console.log('Error!')
		console.log(err.stack)
		client.close()
	}
}

module.exports = { accessDB }

/********************************************** 

//* CREATE ------------------------------------

const user = await accessDB((db) =>
  db
    .collection('users')
    .insertOne({ fullName, email, seatBooked: seatId })
)

//* CREATE MANY--------------------------------

const user = await accessDB((db) =>
  db
    .collection('seats')
    .insertMany([...seats])
)

//* READ ONE ----------------------------------

const seat = await accessDB((db) =>
  db
    .collection('seats')
    .findOne({ _id: seatId })
) 

//* READ MANY ---------------------------------

const seats = await accessDB((db) => 
  db
    .collection('seats')
    .find()
    .toArray())

//* UPDATE ------------------------------------

const result = await accessDB((db) =>
  db
    .collection('seats')
    .updateOne({ _id: seatId }, { $set: { isBooked:true } })
)

//* DELETE ------------------------------------

const userDeletion = await accessDB((db) => {
  db
    .collection('users')
    .deleteOne({ _id: ObjectID(user._id) })
})

**********************************************/
