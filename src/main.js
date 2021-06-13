const _isards_tools_module_name = "Isard's Tools";
let _isards_tools;
Hooks.on("canvasReady", () => {
    _isards_tools = IsardsTools.get()
});
class IsardsToolsInitializer {
    constructor() { }

    static initalize() {
    }
}

IsardsToolsInitializer.initalize();