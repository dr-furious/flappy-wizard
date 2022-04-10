class ReturnButton extends SwitchMenusButton {
    constructor(button, clickSound) {
        super(button, clickSound, null);
    }

    onclick(sections) {
        super.onclick(sections);
    }

    onclickEvent() {
        let temp = Array.from(this.sections).reverse();

        for (let i = 0; i < temp.length; i++) {
            if (!temp[i].hasAttribute("hidden")) {
                temp[i].setAttribute("hidden", "");
                break;
            }
        }
    }


}