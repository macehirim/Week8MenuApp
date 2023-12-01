class Player {
    constructor(fullName, position){
        this.fullName = fullName;
        this.position = position;
    }
}

class Coach extends Player {
    constructor(fullName) {
        super(fullName);
    }
}

class Menu {
    constructor (players) {
        this.team = players;
    }
start() {
    let selection = this.mainMenu();
    while (selection !=0) {
        switch (selection) {
            case '1':
            this.playerIntro(this.team[0]); // This passes the second element of the team array into the playerIntro method
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
            this.coachIntro(coach);
            break;
            case '7':
            this.replaceSelection();
            break;
            default:
            selection = '0';
        } selection = this.mainMenu();
    } alert('Goodbye!');
}    
    
// playerIntro introduces the players that have been passed through the method via an alert
    playerIntro (player) { 
        // console.log(`Is this working`, player.fullName) - tested if selection was working
        return alert (`Starting at the ${player.position} position, introducing ${player.fullName}!`);
    }

// coachIntro introduces the coach that has been passed through the method via an alert
    coachIntro (coach) {
        // console.log(`Does this work too?`, coach.fullName, coac)
        return alert(`Your team is coached by ${coach.fullName}!`);
    }                            
    mainMenu() {
        return prompt (
        `Introducing your Los Angeles Lakers!!
            1) Point Guard
            2) Shooting Guard
            3) Small Forward
            4) Power Forward
            5) Center
            6) Coach
            7) Replace Player or Coach
            0) Exit`
        );
    }
    // replacePrompt () {
    //     return prompt (`
    //     1) Replace Point Guard 
    //     2) Replace Shooting Guard
    //     3) Replace Small Forward
    //     4) Replace Power Forward
    //     5) Replace Center
    //     6) Replace Coach
    //     0) Exit`
    //     )
    // }
    replaceMenu () {
        return prompt (`
        1) Replace Point Guard 
        2) Replace Shooting Guard
        3) Replace Small Forward
        4) Replace Power Forward
        5) Replace Center
        6) Replace Coach
        7) Go Back`
        ) 
    }
    replaceSelection () {
    let selection = this.replaceMenu();
    while (selection !=0) {
        switch (selection) {
            case '1':
                let newName1 = this.replaceNamePrompt();
                this.team[0].fullName = newName1;
                selection = 0;
                break;
            case '2':
                let newName2 = this.replaceNamePrompt();
                this.team[1].fullName = newName2;
                selection = 0;
                break;
            case '3':
                let newName3 = this.replaceNamePrompt();
                this.team[2].fullName = newName3;
                selection = 0;
                break;
            case '4':
                let newName4 = this.replaceNamePrompt();
                this.team[3].fullName = newName4;
                selection = 0;
                break;
            case '5':
                let newName5 = this.replaceNamePrompt();
                this.team[4].fullName = newName5;
                selection = 0;
                break;
            case '6':
                let newName6 = this.replaceNamePrompt();
                this.team[5].fullName = newName6;
                selection = 0;
                break;
            default:
                selection = 0;
        } alert ('Returning to Main Menu')
    }
    }
    replaceNamePrompt () {
       return prompt (`Enter Name`)
    }

}


let player1 = new Player('Magic Johnson', 'Point Guard');
let player2 = new Player('Kobe Bryant', 'Shooting Guard');
let player3 = new Player('Lebron James', 'Small Forward');
let player4 = new Player('Pau Gasol', 'Power Forward');
let player5 = new Player("Shaquille O'Neal", 'Center') // O'Neal in double quotes
let coach = new Coach('Phil Jackson');
let team = [player1, player2, player3, player4, player5, coach]
let menu = new Menu(team);
menu.start();