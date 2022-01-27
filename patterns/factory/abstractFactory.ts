interface UIFactory {
    createButton() : Button,
    createCheckBox(): Checkbox
}

interface Button {
    paint() : void
}

interface Checkbox {
    paint() : void
}

class WindowsButton implements Button {
    paint() {
        console.log('windows button')
    }
}

class MacButton implements Button {
    paint() {
        console.log('mac button')
    }
}

class WindowsCheckBox implements Checkbox {
    paint() {
        console.log('windows checkbox')
    }
}

class MaxCheckBox implements Checkbox {
    paint() {
        console.log('windows checkbox')
    }
}

class WindowsFactory implements UIFactory {
    createButton() {
        return new WindowsButton()
    }

    createCheckBox(): Checkbox {
        return new WindowsCheckBox()
    }
}

class MacFactory implements UIFactory {
    createButton() {
        return new MacButton()
    }

    createCheckBox(): Checkbox {
        return new MaxCheckBox()
    }
}

class App {
    constructor(factory: UIFactory) {
        factory.createButton();
        factory.createCheckBox();
    }
}

new App(new MacFactory());
new App(new WindowsFactory());
