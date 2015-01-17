var express = require('express');
var router = express.Router();


/*aimlInterpreter.loadAIMLFilesIntoArray(['public/aiml/test.aiml.xml']);

var callback = function(answer, wildCardArray){
    console.log(answer + ' | ' + wildCardArray);
};

aimlInterpreter.findAnswerInLoadedAIMLFiles('What is your name?', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('My name is Ben.', callback);
aimlInterpreter.findAnswerInLoadedAIMLFiles('What is my name?', callback);*/

/* Render home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/*Render Chatbotpage*/
router.get('/chatbot', function(req, res) {
     res.send('error');
});

router.post('/action', function(req, res) {
    res.json({success: true});
});

/*Handle Chatrequest*/
router.post('/chatbot', function(req, res) {
    var question = req.body.question;
    /*res.json({
                success: true,
                message: "recieved: " + question
             })*/
    var aimlInterpreter = new AIMLInterpreter({name:'Walter', age:'42'});
    aimlInterpreter.loadAIMLFilesIntoArray(['public/aiml/Lilian.aiml.xml']);
    
    var callback = function(answer, wildCardArray){
        res.json({answer: answer});
    };
    
    aimlInterpreter.findAnswerInLoadedAIMLFiles(question, callback);
});

module.exports = router;
