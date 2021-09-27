class SingleTone {
    private static instance: SingleTone

    private constructor() {
    }

    public static getInstance() {
        if (!SingleTone.instance) {
            SingleTone.instance = new SingleTone()
        }
        return SingleTone.instance
    }
}

const obj1 = SingleTone.getInstance();
const obj2 = SingleTone.getInstance();

console.log(obj1 === obj2);
