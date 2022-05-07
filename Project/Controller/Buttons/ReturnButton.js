class ReturnButton extends SwitchMenusButton {
    constructor(button, clickSound) {
        super(button, clickSound, null);
    }

    onclickEvent(sections) {
        let temp = Array.from(sections).reverse();

        for (let i = 0; i < temp.length; i++) {
            if (!temp[i].hasAttribute("hidden")) {
                temp[i].setAttribute("hidden", "");
                break;
            }
        }
    }


}