module.exports = {
    multipleMongooseToObj(mongooseArr) {
        return mongooseArr.map(mongoose => mongoose.toObject());
    },

    MongooseToObj(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}