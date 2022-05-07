class HelpButton extends SwitchMenusButton {
    constructor(clickSound, menuShow) {
        super(clickSound, menuShow);
    }

    showHelpMenu() {
        this.menuShow.removeAttribute("hidden");
    }
}