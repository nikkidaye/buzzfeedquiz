let readlineSync = require('readline-sync');

let good = 0;
let needsImprovement = 0;
let poor = 0;


// Q U E S T I O N    O N E //
function questionOne() {
  questionOne1 = readlineSync.question( "How do you usually start your day on average?\n (a) With enthusiasm and a bit of excitement for a new day\n (b) Not wanting to get up, usually not in a good mood and/or need caffeine or drugs to function\n (c) Wishing I could sleep forever because nothing about my life is motivating enough to get up\n Type a, b, or c.");
  if (questionOne1 === "a") {
    good += 1;
    console.log("Time to start thinking about what needs to change in your life to get you excited about living again. Remember how we start our day determines how the rest of it goes!\n");
  }

  else if (questionOne1 === "b") {
    needsImprovement += 1;
    console.log("That’s great! Keep starting your day like that and what the amazing things that manifest from putting that good energy into the universe!\n");
}
  else if (questionOne1 === "c") {
    poor += 1;
    console.log("Sounds like a depressive state of mind, time to start looking into ways to get excited about life again.  Keep going with this quiz to find out how.\n");
}
  else {
      questionOne1();
}
}

// Q U E S T I O N    T W O //
function questionTwo() {
  questionTwo2 = readlineSync.question( "How well do you usually sleep?\n (a) I usually go to sleep easily and/or I sleep well mostly\n (b) Not too well, usually takes a lot for me to go to sleep because there’s so much on my mind\n (c) What is sleep? #teamNOsleep\n Type a, b, or c.");
  if (questionTwo2 === "a") {
    return good += 1;
  }

  else if (questionTwo2 === "b") {
    return needsImprovement += 1;
 }
  else if (questionTwo2 === "c") {
    return poor += 1;
 }
  else {
    questionTwo2();
}
}
// Q U E S T I O N    T H R E E  //
function questionThree() {
  questionThree3 = readlineSync.question("Think about all the people close to you, what would you say is the status of your relationships on average?\n (a) Healthy, mutually beneficial relationships, usually enjoy each others’ company  and can be productive around each other\n (b) Mostly on good terms with the close people in my life, usually dealing with some type of drama more than I’d like.\n (c) I have no close people in my life because I’m usually by myself.\n Type a, b, or c.");
  if (questionThree3 === "a") {
    return good += 1;
  }

  else if (questionThree3 === "b") {
    return needsImprovement += 1;
 }
  else if (questionThree3 === "c") {
    return poor += 1;
 }
  else {
      questionThree3();
}
}
// Q U E S T I O N    F O U R //
function questionFour() {
  questionFour4 = readlineSync.question( "What are your thoughts about your future?\n (a) I have so many great things ahead of me that I am working toward every day, My future is bright AF!\n (b)  I try to be optimistic toward my future, I do see possibilities but I struggle with getting too excited about it because I have so many fears and doubts.\n (c) I don’t even think about the future, honestly. It’s hard enough getting through each day.\n Type a, b, or c.");
  if (questionFour4 === "a") {
    return good += 1;
  }

  else if (questionFour4 === "b") {
    return needsImprovement += 1;
 }
  else if (questionFour4 === "c") {
    return poor += 1;
 }
  else {
      questionFour4();
}
}
// Q U E S T I O N    F O U R //
function questionFive() {
  questionFive5 = readlineSync.question( "How do you typically deal with rejection or failure in life?\n (a)I usually look at rejection and failure as an opportunity to learn and grow from the experience. I’m focused on what lesson I should be learning and how to find the solution to my problem.\n (b)It takes me longer than I would like to get past rejection and failure. I usually overcome it but it’s really difficult for me to get past it and not let it ruin my day. \n (c) I take it so hard.  I usually feel really down about myself and/or have to find unhealthy ways to cope. It’s so hard to handle my emotions during these hard times.\n Type a, b, or c.");
  if (questionFive5 === "a") {
    return good += 1;
  }
  else if (questionFive5 === "b") {
    return needsImprovement += 1;
 }
  else if (questionFive5 === "c") {
    return poor += 1;
 }
  else {
      questionFive5();
}
}

function totalScore() {
if ((good > needsImprovement) && (good > poor)) {
  console.log("Good Mental Health: You seem to be in a good mental space where you handle adversity with grace and maintain a healthy attitude towards life. There are definitely hard days but your mental strength allows you to overcome anything with a growth mindset. You have figured out healthy ways to perceive life so that you enjoy everything you do.  You live with a life of purpose and you do it with enthusiasm.\n Click here for local events and resources you could use to maintain and grow further in your mental health journey.");
}
else if ((needsImprovement > good) && (needsImprovement > poor)) {
  console.log("Mental Health Needs Improvement: You are in a decent mental space but could use improvement in how you perceive the world around you.  You might need assistance in overcoming adversities and dealing with obstacles in a healthy way.\n This is a good time for you to check out our Self-Care Tips and apply some of them to your daily life.  You got this!");
}
else if ((poor > good) && (poor > needsImprovement)) {
  console.log("Poor Mental Health: You seem to be really struggling with everyday life.  There are adversities and obstacles in your life that you have allowed to take over how you view the world and have pulled you away from your true self.  There is much healing work that needs to be done in order for you to reach a healthier mental state.  Fortunately, you are in the right place.  We have a variety of Healing Tools for you to use to start your journey to self-healing and holistic health.");
 }
};


console.log("Welcome to the COH Mental Health Check Quiz");
let name = readlineSync.question("What is your name?")
console.log(`Hi ${name}.  Try your best to answer the following questions as honestly as possible by choosing the best response that aligns with how you've been feeling for the past 6 months to a year.\n`);

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
totalScore();
