import mongoose from 'mongoose';
 
 //config should be imported before importing any other file
 import config from './config/config';
 import app from './config/express';

 //connect to mongo db
 const mongoUri = config.mongo.host;
 mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 }}});
 mongoose.connection.on('error', () => {
     throw new Error (`unable to connect to database: ${mongoUri}`);
 });

 app.listen(config.port, () => {
     console.log(`server started on port ${config.port} (${config.env})`);
 });

 export default app;