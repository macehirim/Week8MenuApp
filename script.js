class Player {
    constructor(firstName, lastName, position){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
}

class Coach extends Player {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}

class Menu {
start() {
    let selection = this.mainMenu();
    while (selection !=0) {
        switch (selection) {
            case '1':
            this.playerIntro(player1);
            break;
            case '2':
            this.playerIntro(player2);
            break;
            case '3':
            this.playerIntro(player3);
            break;
            case '4':
            this.playerIntro(player4);
            break;
            case '5':
            this.playerIntro(player5);
            break;
            case '6':
            console.log(this.coachIntro(coach));
            break;
            default:
            selection = '0';
        } selection = this.mainMenu(); 
    } alert('Goodbye!');
}    
    
    playerIntro () { 
        return `Starting at the ${this.position} position, introducing ${this.firstName} ${this.lastName}!`;
    }
    coachIntro () {
        return `Your team is coached by, ${this.firstName} ${this.lastName}!`;
    }                            
    mainMenu() {
        return prompt (
        `Introducing your Los Angeles Lakers!!
            1) Point Guard
            2) Shooting Guard
            3) Small Forward
            4) Power Forward
            5) Center
            6) Coach`
        );
    }
}

let player1 = new Player('Magic', 'Johnson');
let player2 = new Player('Kobe', 'Bryant', 'Shooting Guard');
let player3 = new Player('Lebron', 'James', 'Small Forward');
let player4 = new Player('Pau', 'Gasol');
let player5 = new Player('Shaquille', "O'neal")
let coach = new Coach('Phil', 'Jackson');
let menu = new Menu();
menu.start();