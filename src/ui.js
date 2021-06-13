class IsardsToolsUI {
    constructor() {

    }

}

Hooks.on("getSceneControlButtons", (controls, b, c) => {
    if (game.user.isGM) {
        let isardsTools = [
            {
                name: "hi",
                title: game.i18n.localize("isards_tools.controls.hi.name"),
                icon: "fas fa-layer-group",
                button: true,
                onClick: () => {
                    console.log("Isard's Tools click");
                },
            }
        ]
        let isardsToolGroup = {
            name: "isardsTools",
            layer: "isards_layer",
            title: game.i18n.localize("isards_tools.controls.isardsTools.name"),
            icon: "fas fa-layer-group",
            tools: isardsTools,
        }
        controls.push(isardsToolGroup);
    }
});