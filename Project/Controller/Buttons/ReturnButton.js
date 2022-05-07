class ReturnButton extends SwitchMenusButton {
    constructor(clickSound, sections) {
        super(clickSound, sections);
        this.sections = sections;
    }

    hideLastDisplayedMenu() {
        let reversedSections = Array.from(this.sections).reverse();
        for (let i = 0; i < reversedSections.length; i++) {
            if (!reversedSections[i].hasAttribute("hidden")) {
                reversedSections[i].setAttribute("hidden", "");
                break;
            }
        }
    }


}