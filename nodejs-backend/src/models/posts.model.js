// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'posts';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       text: { type: String, required: true },
       photo: { type: String },
       likes: { type: Array },
       comments: { type: Array },
       postedBy: { type: Schema.Types.ObjectId },

    }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };