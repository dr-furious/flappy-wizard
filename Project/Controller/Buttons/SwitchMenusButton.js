class SwitchMenusButton extends GameButton {

    constructor(clickSound, menuShow, sections) {
        super(clickSound);
        this.menuShow = menuShow;
        this.sections = sections;
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