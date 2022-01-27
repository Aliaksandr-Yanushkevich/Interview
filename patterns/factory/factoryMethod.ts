interface Button {
    onClick() : void;
}

abstract class Dialog {
    doSomething() : void {
        console.log('business logic here')
    }

   public abstract createButton() : Button;
}

class AndroidButton implements Button{
    onClick() {
        console.log('Hey, I am android button!')
    }
}

class IOSButton implements Button{
    onClick() {
        console.log('Hey, I am IOS button!')
    }
}

class AndroidDialog extends Dialog{
    createButton(): Button {
        return new AndroidButton();
    }
}

class IOSDialog extends Dialog{
    createButton(): Button {
        return new IOSButton();
    }
}

class App {
    constructor(dialog : Dialog) {
        dialog.createButton()
    }
}

const IOSVersion = new App(new IOSDialog());
const AndroidVersion = new App(new AndroidDialog());
