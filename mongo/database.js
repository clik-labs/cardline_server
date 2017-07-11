var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/cardline', (err)=>{
    if(err){
        console.log('DB Error!')
        throw err
    }
    else {
        console.log('DB Connect Success')
    }
});

mongoose.Promise = global.Promise;

var commnet = mongoose.Schema({
    card_token: {type: String},
    writer_profile: {type: String},
    writer: {type: String},
    date: {type: String},
    summary: {type: String},
});

var CardSchema = mongoose.Schema({
    card_token: {type: String},
    title: {type: String},
    writer: {type: String},
    subtitle: {type: String},
    token: {type: String},
    like: {type: Number},
    date: {type: String},
});

var UsersSchema = mongoose.Schema({
    email: {type: String},
    passwd: {type: String},
    name: {type: String},
    token: {type: String},
    profile: {type: String},
    profile_img: {type: String},
    facebook_id: {type: String},
    interest: {type: String},
    liked_card: [String],
    liked_editor: [String],
    like: {type: Number},
    alert: [{
        title: {type: String},
        summary: {type: String}
    }]
});


Users = mongoose.model("users", UsersSchema);
Cards = mongoose.model("Cards", CardSchema);
exports.Users = Users;
exports.Cards = Cards;
exports.db = db;