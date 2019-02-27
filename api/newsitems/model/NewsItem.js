const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: [{ type: String, required: true }],
    storyUrl: { type: mongoose.SchemaTypes.Url, required: true },  
    created_At: { type: Number, default: new Date },  
    imageUrl: { type: mongoose.SchemaTypes.Url, required: true }    
      
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);