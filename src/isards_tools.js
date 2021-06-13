class IsardsTools {
    constructor() {
        this.UI = game.user.isGM ? new IsardsToolsUI() : undefined;
    }

    static get() {
        if (IsardsTools._instance == undefined)
            IsardsTools._instance = new IsardsTools();
        return IsardsTools._instance;
    }
}