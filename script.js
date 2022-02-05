function check(){
    var c=10;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value; 
    var result=document.getElementById('result');
    if (q1=="html") {c++}
    if (q2=="js") {c++}
    if (q3=="Yes") {c++}
    if (q4=="Python") {c++}
    if (q5=="html") {c++}
    document.write(c);
}