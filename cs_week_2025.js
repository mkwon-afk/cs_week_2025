// Customer Service Week 2025 Interactive Features

// Date checking logic for quiz availability
function checkQuizAvailability() {
    // Get current date in multiple time zones for global coverage
    const today = new Date();
    
    // UTC time
    const utcDate = today.toISOString().split('T')[0];
    
    // APAC time zones (UTC+8 to UTC+12)
    const apacTimezones = [8, 9, 10, 11, 12]; // Beijing, Tokyo, Sydney, etc.
    const apacDates = apacTimezones.map(offset => {
        const apacTime = new Date(today.getTime() + (offset * 60 * 60 * 1000));
        return apacTime.toISOString().split('T')[0];
    });
    
    // NASA time zones (typically UTC-5 to UTC+0, covering EST to UTC)
    const nasaTimezones = [-5, -4, -3, -2, -1, 0]; // EST, EDT, etc.
    const nasaDates = nasaTimezones.map(offset => {
        const nasaTime = new Date(today.getTime() + (offset * 60 * 60 * 1000));
        return nasaTime.toISOString().split('T')[0];
    });
    
    // Get all quiz buttons
    const quizButtons = document.querySelectorAll('.quiz-btn[data-date]');
    
    quizButtons.forEach(button => {
        const quizDate = button.getAttribute('data-date');
        
        // Check if quiz is available in any of the time zones
        const isAvailableUTC = utcDate >= quizDate;
        const isAvailableAPAC = apacDates.some(date => date >= quizDate);
        const isAvailableNASA = nasaDates.some(date => date >= quizDate);
        
        // Quiz is available if it's available in any time zone
        const isAvailable = isAvailableUTC || isAvailableAPAC || isAvailableNASA;
        
        if (!isAvailable) {
            // Quiz is not yet available
            button.textContent = 'Coming Soon';
            button.classList.add('coming-soon');
            button.disabled = true;
            
            // Remove onclick for button elements
            if (button.tagName === 'BUTTON') {
                button.removeAttribute('onclick');
            }
            
            // Remove href for anchor elements
            if (button.tagName === 'A') {
                button.removeAttribute('href');
                button.style.pointerEvents = 'none';
            }
        } else {
            // Quiz is available
            button.textContent = 'Start Quiz';
            button.classList.remove('coming-soon');
            button.disabled = false;
            
            // Restore functionality for buttons
            if (button.tagName === 'BUTTON') {
                const day = quizDate.split('-')[2]; // Extract day
                const dayName = getDayName(parseInt(day));
                button.setAttribute('onclick', `startDailyQuiz('${dayName.toLowerCase()}')`);
            }
            
            // Restore href for anchor elements
            if (button.tagName === 'A') {
                button.setAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLScheemulqnax2qGcfzygXhQNFCEP_luNnFkLqN818qkddzQrA/viewform?usp=send_form');
                button.setAttribute('target', '_blank');
                button.style.pointerEvents = 'auto';
            }
        }
    });
}

// Helper function to get day name from day number
function getDayName(day) {
    const dayNames = {
        6: 'monday',
        7: 'tuesday', 
        8: 'wednesday',
        9: 'thursday',
        10: 'friday'
    };
    return dayNames[day] || 'monday';
}

// Initialize quiz availability when page loads
document.addEventListener('DOMContentLoaded', function() {
    checkQuizAvailability();
});

// Daily Quiz Questions for Customer Service Week 2025
const dailyQuizzes = {
    monday: {
        title: "Monday - History & Fun Facts Quiz",
        questions: [
            {
                question: "What year was Red Hat founded?",
                answers: ["1993", "1994", "1995", "1996"],
                correct: 0,
                explanation: "Red Hat was founded in 1993 by Bob Young and Marc Ewing."
            },
            {
                question: "What does 'Linux' stand for?",
                answers: ["Linux Is Not Unix", "Linux Is Not Unix", "Linux Is Not Unix", "Linux Is Not Unix"],
                correct: 0,
                explanation: "Linux stands for 'Linux Is Not Unix' - it's a recursive acronym!"
            },
            {
                question: "Which company acquired Red Hat in 2019?",
                answers: ["IBM", "Microsoft", "Oracle", "Google"],
                correct: 0,
                explanation: "IBM acquired Red Hat in 2019 for $34 billion."
            },
            {
                question: "What is the name of Red Hat's enterprise Linux distribution?",
                answers: ["Red Hat Enterprise Linux", "Red Hat Server", "Red Hat Professional", "Red Hat Business"],
                correct: 0,
                explanation: "Red Hat Enterprise Linux (RHEL) is the company's flagship product."
            },
            {
                question: "What does 'Fedora' refer to in Red Hat's ecosystem?",
                answers: ["Community Linux distribution", "Enterprise Linux", "Cloud platform", "Container platform"],
                correct: 0,
                explanation: "Fedora is Red Hat's community-driven Linux distribution."
            }
        ]
    },
    tuesday: {
        title: "Tuesday - Customer Service Leaders Challenge",
        questions: [
            {
                question: "Who said: 'The customer's perception is your reality'?",
                answers: ["Kate Zabriskie", "Tony Hsieh", "Sam Walton", "Bill Gates"],
                correct: 0,
                explanation: "Kate Zabriskie, a customer service expert, emphasized the importance of customer perception."
            },
            {
                question: "Which leader transformed Zappos' customer service culture?",
                answers: ["Tony Hsieh", "Jeff Bezos", "Elon Musk", "Steve Jobs"],
                correct: 0,
                explanation: "Tony Hsieh built Zappos around exceptional customer service culture."
            },
            {
                question: "What percentage of customers will share a positive experience?",
                answers: ["70%", "80%", "85%", "90%"],
                correct: 2,
                explanation: "85% of customers will share positive experiences with others."
            },
            {
                question: "Who said: 'Make a customer, not a sale'?",
                answers: ["Katherine Barchetti", "Tony Hsieh", "Sam Walton", "Kate Zabriskie"],
                correct: 0,
                explanation: "Katherine Barchetti emphasized building relationships over transactions."
            },
            {
                question: "What is the most important aspect of customer service?",
                answers: ["Speed", "Empathy", "Accuracy", "All of the above"],
                correct: 3,
                explanation: "Great customer service requires a balance of speed, empathy, and accuracy."
            }
        ]
    },
    wednesday: {
        title: "Wednesday - Pop Culture & Movies Trivia",
        questions: [
            {
                question: "Which movie features a character saying 'May the Force be with you'?",
                answers: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "The Matrix"],
                correct: 0,
                explanation: "This iconic phrase is from the Star Wars franchise."
            },
            {
                question: "What is the highest-grossing movie of all time?",
                answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
                correct: 0,
                explanation: "Avatar (2009) holds the record for highest-grossing movie."
            },
            {
                question: "Which streaming service was launched by Netflix in 2007?",
                answers: ["Netflix Streaming", "Netflix Instant", "Netflix Watch", "Netflix Play"],
                correct: 1,
                explanation: "Netflix launched its streaming service in 2007."
            },
            {
                question: "What social media platform was founded in 2004?",
                answers: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
                correct: 0,
                explanation: "Facebook was founded by Mark Zuckerberg in 2004."
            },
            {
                question: "Which TV show popularized the phrase 'Winter is coming'?",
                answers: ["Game of Thrones", "The Walking Dead", "Breaking Bad", "Stranger Things"],
                correct: 0,
                explanation: "This phrase is famously associated with Game of Thrones."
            }
        ]
    },
    thursday: {
        title: "Thursday - Fun Stats & Trivia Game",
        questions: [
            {
                question: "How many seconds does it take for customers to form a first impression?",
                answers: ["3 seconds", "7 seconds", "15 seconds", "30 seconds"],
                correct: 1,
                explanation: "Customers form first impressions in just 7 seconds!"
            },
            {
                question: "What percentage of customers will stop doing business after a bad experience?",
                answers: ["60%", "70%", "80%", "90%"],
                correct: 2,
                explanation: "80% of customers will stop doing business after a bad experience."
            },
            {
                question: "How much more expensive is it to acquire a new customer vs. retaining an existing one?",
                answers: ["3x", "5x", "7x", "10x"],
                correct: 1,
                explanation: "It costs 5x more to acquire a new customer than to retain an existing one."
            },
            {
                question: "What percentage of customers expect companies to respond to social media complaints within 1 hour?",
                answers: ["40%", "50%", "60%", "70%"],
                correct: 2,
                explanation: "60% of customers expect responses within 1 hour on social media."
            },
            {
                question: "How many times more likely are customers to purchase from companies that respond to complaints?",
                answers: ["2x", "3x", "4x", "5x"],
                correct: 2,
                explanation: "Customers are 4x more likely to purchase from companies that respond to complaints."
            }
        ]
    },
    friday: {
        title: "Friday - Red Hat Legends Quiz",
        questions: [
            {
                question: "What is Red Hat's mission statement?",
                answers: ["To be the catalyst in communities of customers, contributors, and partners creating better technology the open source way", "To dominate the enterprise market", "To create proprietary software", "To compete with Microsoft"],
                correct: 0,
                explanation: "Red Hat's mission focuses on open source communities and collaboration."
            },
            {
                question: "What is the name of Red Hat's annual conference?",
                answers: ["Red Hat Summit", "Red Hat Conference", "Red Hat World", "Red Hat Expo"],
                correct: 0,
                explanation: "Red Hat Summit is the company's premier annual event."
            },
            {
                question: "Which Red Hat product is used for container orchestration?",
                answers: ["OpenShift", "RHEL", "Ansible", "JBoss"],
                correct: 0,
                explanation: "OpenShift is Red Hat's Kubernetes-based container platform."
            },
            {
                question: "What does 'RHEL' stand for?",
                answers: ["Red Hat Enterprise Linux", "Red Hat Enterprise License", "Red Hat Enterprise Layer", "Red Hat Enterprise Load"],
                correct: 0,
                explanation: "RHEL stands for Red Hat Enterprise Linux."
            },
            {
                question: "Which open source automation tool does Red Hat develop?",
                answers: ["Ansible", "Puppet", "Chef", "Salt"],
                correct: 0,
                explanation: "Red Hat develops and maintains Ansible, the popular automation tool."
            }
        ]
    }
};

// Quiz functionality
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;

function startDailyQuiz(day) {
    if (!dailyQuizzes[day]) {
        alert('Quiz not available for this day!');
        return;
    }
    
    currentQuiz = dailyQuizzes[day];
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('triviaTitle').textContent = currentQuiz.title;
    showQuestion();
    document.getElementById('triviaModal').style.display = 'block';
}

function showQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const questionDiv = document.getElementById('triviaQuestion');
    const answersDiv = document.getElementById('triviaAnswers');
    
    questionDiv.innerHTML = `<h3>Question ${currentQuestionIndex + 1}: ${question.question}</h3>`;
    
    answersDiv.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.className = 'answer-btn';
        button.onclick = () => selectAnswer(index);
        answersDiv.appendChild(button);
    });
    
    document.getElementById('triviaScore').textContent = `Score: ${score}`;
}

function selectAnswer(selectedIndex) {
    const question = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    if (isCorrect) {
        score += 10;
        showFeedback('Correct! 🎉', 'green');
    } else {
        showFeedback(`Incorrect! The correct answer was: ${question.answers[question.correct]}`, 'red');
    }
    
    // Show explanation
    setTimeout(() => {
        showExplanation(question.explanation);
    }, 1500);
}

function showFeedback(message, color) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.color = color;
    feedback.style.fontWeight = 'bold';
    feedback.style.marginTop = '10px';
    feedback.style.padding = '10px';
    feedback.style.borderRadius = '5px';
    feedback.style.backgroundColor = color === 'green' ? '#d4edda' : '#f8d7da';
    
    document.getElementById('triviaAnswers').appendChild(feedback);
    
    // Disable all answer buttons
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);
}

function showExplanation(explanation) {
    const explanationDiv = document.createElement('div');
    explanationDiv.innerHTML = `<p><strong>Explanation:</strong> ${explanation}</p>`;
    explanationDiv.style.marginTop = '15px';
    explanationDiv.style.padding = '15px';
    explanationDiv.style.backgroundColor = '#e3f2fd';
    explanationDiv.style.borderRadius = '5px';
    explanationDiv.style.borderLeft = '4px solid #2196f3';
    
    document.getElementById('triviaAnswers').appendChild(explanationDiv);
    
    // Add next button
    setTimeout(() => {
        const nextButton = document.createElement('button');
        nextButton.textContent = currentQuestionIndex < currentQuiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz';
        nextButton.className = 'next-btn';
        nextButton.style.marginTop = '15px';
        nextButton.style.padding = '10px 20px';
        nextButton.style.backgroundColor = '#dc2626';
        nextButton.style.color = 'white';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '5px';
        nextButton.style.cursor = 'pointer';
        nextButton.onclick = nextQuestion;
        
        document.getElementById('triviaAnswers').appendChild(nextButton);
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((score / (totalQuestions * 10)) * 100);
    
    let message = `Quiz Complete! 🎉\n\nYour Score: ${score}/${totalQuestions * 10} (${percentage}%)\n\n`;
    
    if (percentage >= 80) {
        message += "Excellent work! You're a Customer Service Week champion! 🏆";
    } else if (percentage >= 60) {
        message += "Good job! You're well on your way to customer service excellence! 👍";
    } else {
        message += "Keep learning! Customer service excellence is a journey! 📚";
    }
    
    alert(message);
    closeModal('triviaModal');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
