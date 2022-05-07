class PauseButton extends SwitchMenusButton {
    constructor(clickSound, menuShow) {
        super(clickSound, menuShow);
    }

    setPausedMenuStat(stat, location) {
        location.innerText = stat;
    }

}