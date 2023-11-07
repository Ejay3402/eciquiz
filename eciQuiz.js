//variables 

const questionNumber = document.querySelector('#questionNumber');

let totalQuestions = document.querySelector('#totalQuestions');

const questionsOpt = document.querySelector('#questions');

const options = document.querySelector('#options');

const next = document.querySelector('#next');

let currQustions = 0;

let suffQues;

let score = 0;

let rateScore = document.querySelector('#rateScore');

//questions

const questions = [

    {
        q : "What is the full meaning of ECI?",
        a : [
            {
                text : 'Emotional Church International',
                correct : false 
            },
            {
                text : 'Emotional Church Interprize',
                correct : false 
            },
            {
                text : 'Evangelical Church International',
                correct : true 
            },
            {
                text : 'Effective Church International',
                correct : false 
            },
        ]
    },

    {
        q : "Where was 2023 national youth convention?",
        a : [
            {
                text : 'ECI Sokoto',
                correct : true 
            },
            {
                text : 'ECI Kaduna',
                correct : false 
            },
            {
                text : 'ECI Palldan',
                correct : false 
            },
            {
                text : 'ECI Abuja',
                correct : false 
            },
        ]
    },
    
    {
        q : "In which verse can we find the creation story in the book of Genesis?",
        a : [
            {
                text : 'Genesis 5:1-31',
                correct : false 
            },
            {
                text : 'Genesis 3:1-31',
                correct : false 
            },
            {
                text : 'Genesis 1:1-31 ',
                correct : true 
            },
            {
                text : ' Genesis 2:1-31',
                correct : false 
            },
        ]
    },
    
    {
        q : "Which verse mentions the Ten Commandments in the book of Exodus?",
        a : [
            {
                text : 'Exodus 25:1-17',
                correct : false 
            },
            {
                text : 'Exodus 1:1-17',
                correct : false 
            },
            {
                text : 'Exodus 24:1-17',
                correct : false 
            },
            {
                text : 'Exodus 20:1-17 ',
                correct : true 
            },
        ]
    },
    
    {
        q : "What is the verse in which the burning bush appears to Moses?",
        a : [
            {
                text : 'Exodus 10:1-4',
                correct : false 
            },
            {
                text : 'Exodus 3:2-4',
                correct : true 
            },
            {
                text : 'Exodus 13:2-4',
                correct : false 
            },
            {
                text : 'Exodus 1:5-2',
                correct : false 
            },
        ]
    },
    
    {
        q : `In which verse does David say, "The Lord is my shepherd, I shall not want"?`,
        a : [
            {
                text : 'Psalm 23:5',
                correct : false 
            },
            {
                text : 'Psalm 25:1',
                correct : false 
            },
            {
                text : 'Psalm 23:3',
                correct : false 
            },
            {
                text : 'Psalm 23:1',
                correct : true 
            },
        ]
    },
    
    {
        q : "Where in the Bible do we find the story of the Tower of Babel?",
        a : [
            {
                text : 'Genesis 11:1-9',
                correct : true 
            },
            {
                text : 'Genesis 13:4-9',
                correct : false 
            },
            {
                text : 'Genesis 10:1-9',
                correct : false 
            },
            {
                text : 'Genesis 15:1-9',
                correct : false 
            },
        ]
    },
    
    {
        q : "According to Genesis 22:2, which son of Abraham was asked to be sacrificed on Mount Moriah?",
        a : [
            {
                text : 'Ismael',
                correct : false 
            },
            {
                text : 'John',
                correct : false 
            },
            {
                text : 'Isaac ',
                correct : true 
            },
            {
                text : 'Moses',
                correct : false 
            },
        ]
    },
    
    {
        q : "What verse describes the departing of the Red Sea in the book of Exodus?",
        a : [
            {
                text : 'Exodus 12:21-22',
                correct : false 
            },
            {
                text : 'Exodus 17:21-22',
                correct : false 
            },
            {
                text : 'Exodus 11:21-22',
                correct : false 
            },
            {
                text : 'Exodus 14:21-22',
                correct : true 
            },
        ]
    },
    
    {
        q : "Which verse contains the prophecy about the birth of a child called Immanuel in the book of Isaiah?",
        a : [
            {
                text : 'Isaiah 3:12',
                correct : false 
            },
            {
                text : 'Isaiah 7:14',
                correct : true 
            },
            {
                text : 'Isaiah 5:14',
                correct : false 
            },
            {
                text : 'Isaiah 1:14',
                correct : false 
            },
        ]
    },
    
    {
        q : `In which verse does God reveal His name to Moses as "I AM WHO I AM"?` ,
        a : [
            {
                text : 'Exodus 5:14',
                correct : false 
            },
            {
                text : 'Exodus 1:11',
                correct : false 
            },
            {
                text : 'Exodus 13:1',
                correct : false 
            },
            {
                text : 'Exodus 3:14',
                correct : true 
            },
        ]
    },
    
    {
        q : "What verse records the birth of Jesus in the Gospel of Luke?",
        a : [
            {
                text : 'Luke 5:7',
                correct : false 
            },
            {
                text : 'Luke 2:3',
                correct : false 
            },
            {
                text : 'Luke 5:1',
                correct : false 
            },
            {
                text : 'Luke 2:7',
                correct : true 
            },
        ]
    },
    
    {
        q : `In which verse did Jesus say, "I am the way, the truth, and the life"?`,
        a : [
            {
                text : 'John 13:5',
                correct : false 
            },
            {
                text : 'John 14:6',
                correct : true 
            },
            {
                text : 'John 14:2',
                correct : false 
            },
            {
                text : 'John 17:6',
                correct : false 
            },
        ]
    },
    
    {
        q : "What is the verse that contains the Beatitudes in the Gospel of Matthew? ",
        a : [
            {
                text : 'Matthew 5:3-12',
                correct : true 
            },
            {
                text : 'Matthew 7:4-11',
                correct : false 
            },
            {
                text : 'Matthew 1:3-12',
                correct : false 
            },
            {
                text : 'Matthew 7:3-12',
                correct : false 
            },
        ]
    },
    
    {
        q : "In which verse can we find the Great Commission given by Jesus to his disciples?",
        a : [
            {
                text : 'Matthew 30:18-20 ',
                correct : false 
            },
            {
                text : 'Matthew 24:18-20 ',
                correct : false 
            },
            {
                text : 'Matthew 21:1-2 ',
                correct : false 
            },
            {
                text : 'Matthew 28:18-20 ',
                correct : true 
            },
        ]
    },
    
    {
        q : "Which verse contains the story of the multiplication of loaves and fishes by Jesus? ",
        a : [
            {
                text : 'John 3:5-13',
                correct : false 
            },
            {
                text : 'John 6:5-13',
                correct : true 
            },
            {
                text : 'John 7:5-13',
                correct : false 
            },
            {
                text : 'John 1:5-13',
                correct : false 
            },
        ]
    },
    
    {
        q : `In which verse did Jesus say, "Love your neighbor as yourself"?` ,
        a : [
            {
                text : 'Mark 13:35 ',
                correct : false 
            },
            {
                text : 'Mark 12:3',
                correct : false 
            },
            {
                text : 'Mark 12:31 ',
                correct : true 
            },
            {
                text : 'Mark 15:31 ',
                correct : false 
            },
        ]
    },
    
    {
        q : `What verse in the Bible is known as the "Golden Rule"?`,
        a : [
            {
                text : 'Matthew 5:12',
                correct : false 
            },
            {
                text : 'Matthew 2:12',
                correct : false 
            },
            {
                text : 'Matthew 4:1',
                correct : false 
            },
            {
                text : 'Matthew 7:12',
                correct : true 
            },
        ]
    },
    
    {
        q : "Which verse records the conversation between Jesus and Nicodemus about being born again? ",
        a : [
            {
                text : 'John 3:3 ',
                correct : true 
            },
            {
                text : 'John 4:9 ',
                correct : false 
            },
            {
                text : 'John 5:3 ',
                correct : false 
            },
            {
                text : 'John 3:8 ',
                correct : false 
            },
        ]
    },
    
    {
        q : `In which verse does the Apostle Paul write, "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord"? `,
        a : [
            {
                text : 'Romans 3:13',
                correct : false 
            },
            {
                text : 'Romans 6:2',
                correct : false 
            },
            {
                text : 'Romans 6:23',
                correct : true 
            },
            {
                text : 'Romans 5:23',
                correct : false 
            },
        ]
    },
    
    {
        q : "What is the shortest verse in the Bible?",
        a : [
            {
                text : 'John 12:35',
                correct : false 
            },
            {
                text : 'John 1:35',
                correct : false 
            },
            {
                text : 'John 10:3',
                correct : false 
            },
            {
                text : 'John 11:35',
                correct : true 
            },
        ]
    },
    
    {
        q : "Where in the Bible can we find the story of Jonah and the great fish?",
        a : [
            {
                text : 'Jonah 1:17 ',
                correct : true 
            },
            {
                text : 'Jonah 11:17 ',
                correct : false 
            },
            {
                text : 'Jonah 1:1 ',
                correct : false 
            },
            {
                text : 'EJonah 2:17 ',
                correct : false 
            },
        ]
    },

];

totalQuestions.textContent = questions.length;

//resetQues 

const resetQues = () => {

    next.style.display = 'none';

    while (options.firstChild) {
        options.removeChild(options.firstChild);
    }

};

//start quiz

const startQuiz = () => {

    currQustions = 0;

    score = 0;

    suffQues = questions.sort(() => Math.random() - .5);

    next.innerHTML = 'next';

    loadQuestions();

};

//load questions  

const loadQuestions = () => {
    resetQues();
    let currQ = questions[currQustions];
    let quesNo = currQustions +1;

    questionNumber.innerHTML = quesNo;
    questionsOpt.innerHTML = currQ.q;

    currQ.a.forEach(answer => {

        const button = document.createElement('button');

        button.innerHTML = answer.text;
        options.append(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };

        button.addEventListener("click", (e) => {

            const selectedQues = e.target;

            const isCorrect = selectedQues.dataset.correct === 'true';

            if (isCorrect) {
                score++;
                rateScore.innerHTML = score++;
                selectedQues.style.color = '#fff';
                selectedQues.style.background = '#1d5b1d';
                selectedQues.style.border = 'none';
                if (score++) {
                    rateScore.style.color = 'green';
                } 
            } else {
                selectedQues.style.color = '#fff';
                selectedQues.style.background = '#8d0505';
                selectedQues.style.border = 'none';
            }

            Array.from(options.children).forEach(btn => {
                
                if(btn.dataset.correct === "true") {
                    btn.style.color = '#fff';
                    btn.style.background = '#1d5b1d';
                    btn.style.border = 'none';
                } 

                btn.disabled = true;

            });

            next.style.display = 'block';

        });

    });

};

let h3 = document.querySelector('#h3');

let result = document.querySelector('#result');

const showScore = () => {

    resetQues();

    questionsOpt.innerHTML = `You scored ${score} out of ${questions.length}`;
    next.innerHTML = 'Restart Quiz';
    next.style.display = 'block'; 
};

const handleQues = () => {

    currQustions++;

    if (currQustions < questions.length) {
        loadQuestions();
    } else {
        showScore();
    }
0
};

next.addEventListener("click", () => {

    if (currQustions < questions.length) {
        handleQues();
    } else {
        startQuiz();
    }

});

startQuiz();
