class SwitchMenusButton extends GameButton {

    constructor(button, clickSound, menuShow) {
        super(button, clickSound);
        this.menuShow = menuShow;
        this.sections = null;
    }

    onclick(sections) {
        this.sections = sections;
        super.onclick();
    }

    onclickEvent() {
        this.switchMenus(this.sections);
    }

    switchMenus() {
        this.findDisplayedSection(this.sections).setAttribute("hidden", "");
        this.menuShow.removeAttribute("hidden");
    }

    findDisplayedSection() {
        for (const sectionsKey in this.sections) {
            if (!this.sections[sectionsKey].hasAttribute("hidden")) {
                return this.sections[sectionsKey];
            }
        }
    }
}