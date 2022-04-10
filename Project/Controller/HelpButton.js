class HelpButton extends SwitchMenusButton {
    constructor(button, clickSound, menuShow) {
        super(button, clickSound, menuShow);
    }

    onclick(sections) {
        super.onclick(sections);
    }

    onclickEvent() {
        this.menuShow.removeAttribute("hidden");
    }

}