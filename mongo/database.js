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

var CommentSchema = mongoose.Schema({
    card_token: {type: String},
    writer_profile: {type: String},
    writer: {type: String},
    date: {type: String},
    summary: {type: String},
});

var CardSchema = mongoose.Schema({
    category : {type: String},
    token : {type: String},
    card_token: {type: String},
    title: {type: String},
    writer: {type: String},
    subtitle: {type: String},
    like: {type: Number},
    date: {type: String},
});

//liked 관심사
//favorate 좋아요 누른 카드

var UsersSchema = mongoose.Schema({
    email: {type: String},
    passwd: {type: String},
    name: {type: String},
    token: {type: String},
    profile: {type: String},
    profile_img: {type: String},
    img_name : {type:String},
    facebook_id: {type: String},
    liked: [Number],
    favorate : [String],
    view_log : [String],
    search_log: [String],
    alert: [{
        title: {type: String},
        summary: {type: String}
    }]
});

Comment = mongoose.model('Comment', CommentSchema);
Users = mongoose.model("user", UsersSchema);
Cards = mongoose.model("Card", CardSchema);
exports.Users = Users;
exports.Cards = Cards;
exports.Comment = Comment
exports.db = db;
