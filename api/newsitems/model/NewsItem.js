const mongoose = require('mongoose');
require('mongoose-type-url');
timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: [{ type: String, required: true }],
    storyUrl: { type: mongoose.SchemaTypes.Url, required: true },   
    imageUrl: { type: mongoose.SchemaTypes.Url, required: true }    
      
}, { collection: 'newsitems' });

NewsItemSchema.plugin(timestamps)

module.exports = mongoose.model('NewsItem', NewsItemSchema);