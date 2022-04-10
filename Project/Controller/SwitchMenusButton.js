class SwitchMenusButton extends GameButton {
    constructor(button, clickSound, menuHide, menuShow) {
        super(button, clickSound);
        this.menuHide = menuHide;
        this.menuShow = menuShow;
    }

    onclick() {
        super.onclick();
    }

    onclickEvent() {
        this.switchMenus();
    }

    switchMenus() {
        this.menuHide.setAttribute("hidden", "");
        this.menuShow.removeAttribute("hidden");
    }
}