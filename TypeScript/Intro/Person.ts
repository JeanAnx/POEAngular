
class Person implements ContactInterface {

    constructor(
        private firstName: string,
        private lastName: string

    ) {
        const localVariable: number = 123;
    } 

    introduce(): string { //On type également le retour de fonction
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }

    addFriend(friend: ContactInterface): void {

    }

}
