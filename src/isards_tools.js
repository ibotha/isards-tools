class IsardsTools {
    constructor() {
        this.UI = game.user.isGM ? new IsardsToolsUI() : undefined;
        canvas["isards_layer"] = new CanvasLayer();
    }

    static get() {
        if (IsardsTools._instance == undefined)
            IsardsTools._instance = new IsardsTools();
        return IsardsTools._instance;
    }
}