import mongoose from 'mongoose';

const connectToMongo = async () => {
    try {
        const MongoUri = process.env.DRIVER_LINK;
        await mongoose.connect(MongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongo;