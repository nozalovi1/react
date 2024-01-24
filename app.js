
//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.


function calculateYearsToPension(age) {
    if (typeof age !== 'number' || age < 0) {
        return "შეცდომა: გთხოვ მიუთითო სწორი ასოცირება და დადებითი რიცხვი.";
    }
    const pensionAge = 65;
  


    if (age >= pensionAge) {
        return "თქვენ უკვე გაქვთ პენსია !!";
    }
    const yearsToPension = pensionAge - age;
    return `თქვენ შეგიძლიათ გქონდეთ პენსია ${yearsToPension} წლის მერე.`;
}
const age = 30;
const resultt = calculateYearsToPension(age);


//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

function calculator(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof operator !== 'string') {
        return "შეცდომა: შეიყვანეთ სწორი პარამეტრები.";
    }

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "შეცდომა!";
            }
            result = num1 / num2;
            break;
        default:
            return "შეცდომა!";
    }

    return result;
}

const num1 = 67;
const num2 = 13;
const operator = '+';

const result = calculator(num1, num2, operator);
console.log(result);

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერ სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაესაბაშინ შმიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8ისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

function checkPasswordStrength(password) {
    if (typeof password !== 'string') {
        return "შეცდომა: გთხოვთ შეიყვანოთ სწორი პარამეტრი.";
    }

    if (password.length === 0) {
        return "შეიყვანეთ 1 ზე მეტი სიმბოლო !.";
    }

    let strengthMessage = "პაროლის სიძლიერე: ";

    if (password.length < 8) {
        strengthMessage += "მინიმუმ 8 სიმბოლო არის საჭირო !.";
    }
    else if (password.length > 16) {
        strengthMessage += "მაქსიმუმ 16 სიმბოლო არის შესაძლებელი.";
    }
    else {
        strengthMessage += "ძლიერია!";
    }

    return strengthMessage;
}

const password = "დსადდსად123";
const resullt = checkPasswordStrength(password);
console.log(resullt);







//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

const num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
const num2 = prompt("შეიყვანეთ მეორე რიცხვი:");
const num3 = prompt("შეიყვანეთ მესამე რიცხვი:");

const largestNumber = findLargestNumber(Number(num1), Number(num2), Number(num3));
console.log(`უდიდესი რიცხვი არის: ${largestNumber}`);
