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
                const quizDate = button.getAttribute('data-date');
                if (quizDate === '2025-10-06') {
                    button.setAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLScheemulqnax2qGcfzygXhQNFCEP_luNnFkLqN818qkddzQrA/viewform?usp=send_form');
                } else if (quizDate === '2025-10-07') {
                    button.setAttribute('href', 'https://forms.gle/5ZgHK8sQbkJkxwVz7');
                } else if (quizDate === '2025-10-08') {
                    button.setAttribute('href', 'https://forms.gle/tcretwSf3VKDW1PP6');
                }
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
        title: "Tuesday - Customer Service Philosophy Quiz",
        questions: [
            {
                question: "What is the fundamental principle of customer service philosophy?",
                answers: ["Speed of response", "Customer-centric approach", "Cost reduction", "Process efficiency"],
                correct: 1,
                explanation: "Customer-centric approach is the fundamental principle - putting the customer at the center of all decisions and actions."
            },
            {
                question: "Which philosophy emphasizes treating customers as you would want to be treated?",
                answers: ["Golden Rule", "Platinum Rule", "Diamond Rule", "Silver Rule"],
                correct: 0,
                explanation: "The Golden Rule in customer service: 'Treat others as you would want to be treated' forms the foundation of empathetic service."
            },
            {
                question: "What does 'Customer Lifetime Value' philosophy focus on?",
                answers: ["Single transaction profit", "Long-term customer relationships", "Quick problem resolution", "Service speed"],
                correct: 1,
                explanation: "Customer Lifetime Value philosophy focuses on building long-term relationships rather than maximizing single transactions."
            },
            {
                question: "Which philosophy states that 'The customer is always right'?",
                answers: ["Always true", "Sometimes true", "Never true", "Depends on the situation"],
                correct: 3,
                explanation: "While customers' feelings and experiences are always valid, the philosophy depends on the situation and should be balanced with business needs."
            },
            {
                question: "What is the core philosophy behind 'First Call Resolution'?",
                answers: ["Speed over quality", "Quality over speed", "Resolve issues on the first contact", "Escalate quickly"],
                correct: 2,
                explanation: "First Call Resolution philosophy emphasizes resolving customer issues completely on the first contact to maximize satisfaction."
            },
            {
                question: "Which philosophy emphasizes continuous improvement in customer service?",
                answers: ["Kaizen", "Six Sigma", "Lean", "All of the above"],
                correct: 3,
                explanation: "All three philosophies (Kaizen, Six Sigma, Lean) emphasize continuous improvement and optimization of customer service processes."
            },
            {
                question: "What does the 'Moments of Truth' philosophy refer to?",
                answers: ["Critical customer touchpoints", "First impressions", "Problem resolution", "All customer interactions"],
                correct: 0,
                explanation: "Moments of Truth philosophy identifies critical touchpoints where customers form lasting impressions about service quality."
            },
            {
                question: "Which philosophy focuses on empowering frontline employees?",
                answers: ["Top-down management", "Employee empowerment", "Process standardization", "Centralized control"],
                correct: 1,
                explanation: "Employee empowerment philosophy gives frontline staff the authority and tools to make decisions that benefit customers."
            }
        ]
    },
    wednesday: {
        title: "Wednesday - Pop Culture & Movies Trivia",
        questions: [
            {
                question: "Which movie features a hotel concierge who goes above and beyond for guests, embodying perfect customer service?",
                answers: ["The Grand Budapest Hotel", "Hotel Transylvania", "The Shining", "Home Alone 2"],
                correct: 0,
                explanation: "The Grand Budapest Hotel showcases exceptional hospitality and customer service through its concierge character."
            },
            {
                question: "In which TV show does a character famously say 'The customer is always right' while working in retail?",
                answers: ["The Office", "Superstore", "Parks and Recreation", "Brooklyn Nine-Nine"],
                correct: 1,
                explanation: "Superstore features retail workers dealing with customer service challenges and this famous phrase."
            },
            {
                question: "Which pop culture icon is known for their exceptional customer service philosophy: 'Make it right'?",
                answers: ["Oprah Winfrey", "Richard Branson", "Tony Hsieh (Zappos)", "Steve Jobs"],
                correct: 2,
                explanation: "Tony Hsieh, former CEO of Zappos, was famous for his customer service philosophy and 'Make it right' approach."
            },
            {
                question: "Which movie features a character who transforms a failing business by focusing on customer satisfaction?",
                answers: ["The Pursuit of Happyness", "Jerry Maguire", "The Intern", "The Founder"],
                correct: 2,
                explanation: "The Intern shows how focusing on customer needs and service can transform a business."
            },
            {
                question: "Which TV show character is famous for saying 'How may I help you?' with exceptional enthusiasm?",
                answers: ["Leslie Knope (Parks and Rec)", "Phoebe Buffay (Friends)", "Sheldon Cooper (Big Bang)", "Dwight Schrute (The Office)"],
                correct: 0,
                explanation: "Leslie Knope from Parks and Recreation embodies enthusiastic public service and helping others."
            }
        ]
    },
    thursday: {
        title: "Thursday - Future of Jobs & Technology Trends",
        questions: [
            {
                question: "According to the Future of Jobs Report 2025, what percentage of jobs are expected to be disrupted by AI and automation?",
                answers: ["25%", "40%", "60%", "75%"],
                correct: 1,
                explanation: "The Future of Jobs Report 2025 indicates that approximately 40% of jobs will be disrupted by AI and automation, requiring significant reskilling and adaptation."
            },
            {
                question: "Which skill is predicted to be most in-demand for customer service roles by 2025?",
                answers: ["Data Analysis", "Emotional Intelligence", "Coding", "Project Management"],
                correct: 1,
                explanation: "Emotional Intelligence is increasingly crucial as AI handles routine tasks, leaving humans to focus on complex emotional interactions and relationship building."
            },
            {
                question: "What is the expected growth rate for 'green jobs' in the renewable energy sector by 2025?",
                answers: ["15%", "25%", "35%", "50%"],
                correct: 2,
                explanation: "Green jobs in renewable energy are expected to grow by approximately 35% by 2025, reflecting the global shift toward sustainability."
            },
            {
                question: "Which technology is predicted to create the most new jobs by 2025?",
                answers: ["Artificial Intelligence", "Blockchain", "Quantum Computing", "Augmented Reality"],
                correct: 0,
                explanation: "AI is expected to create more jobs than it displaces, particularly in AI training, oversight, and human-AI collaboration roles."
            },
            {
                question: "What percentage of workers will need to reskill by 2025 according to the report?",
                answers: ["30%", "50%", "70%", "90%"],
                correct: 1,
                explanation: "Approximately 50% of workers will need to reskill by 2025 to adapt to changing job requirements and new technologies."
            },
            {
                question: "Which industry is expected to see the highest job growth in customer-facing roles?",
                answers: ["Healthcare", "Education", "Retail", "Financial Services"],
                correct: 0,
                explanation: "Healthcare is expected to see the highest growth in customer-facing roles due to aging populations and increased demand for personalized care."
            },
            {
                question: "What is the predicted impact of remote work on job opportunities by 2025?",
                answers: ["Decrease by 20%", "Stay the same", "Increase by 30%", "Increase by 50%"],
                correct: 2,
                explanation: "Remote work opportunities are expected to increase by approximately 30% by 2025, expanding access to global talent pools."
            },
            {
                question: "Which soft skill is becoming increasingly important for future customer service success?",
                answers: ["Critical Thinking", "Creativity", "Adaptability", "All of the above"],
                correct: 3,
                explanation: "All three skills - Critical Thinking, Creativity, and Adaptability - are becoming increasingly important as automation handles routine tasks."
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
