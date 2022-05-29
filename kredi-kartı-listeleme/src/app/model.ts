export class Model {
    user;
    items;

    constructor() {
        this.user = "Metin";
        this.items = [
            new TodoItem("Metin", "12345678910"),
            new TodoItem("Ahmet", "12345678911"),
            new TodoItem("Ekrem", "12345678912"),
            new TodoItem("Barkın", "12345678913"),
        ];
    }
}

export class TodoItem {
    description: string;
    action: string;

    constructor(description: string, action: string) {
        this.description = description;
        this.action = action;
    };
}
