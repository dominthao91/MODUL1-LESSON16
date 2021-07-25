class Phone {
    battery;
    draft;
    inbox;
    outbox;
    status;

    constructor(battery) {
        this.battery = battery;
        this.draft = '';
        this.status = true;
        this.inbox = [];
        this.outbox = [];
    }

    checkOnOff() {
        return status;
    }

    turnOnOff() {
        this.status = !this.status;
    }

    change() {
        this.battery = 100;
    }

    compose(message) {
        this.draft = message;
        this.battery--;
    }

    sendMess(phone) {
        phone.inbox.push(this.draft);
        this.outbox.push(this.draft);
        this.battery--;
        this.draft = '';
    }

    getInbox() {
        return this.inbox;
    }

    getOutbox() {
        return this.outbox
    }
}