Events.on(ClientLoadEvent, () => {
    Vars.ui.settings.addCategory("@setting.mobilemapshot", Icon.effect, t => {
        t.checkPref("mobilemapshot-checkmemory", true);
    });
    
    Vars.checkScreenshotMemory = Core.settings.getBool("mobilemapshot-checkmemory", true);
    
    Vars.ui.paused.buttons.button("@mobile.takemapshot", Icon.effect, () => Vars.renderer.takeMapScreenshot()).height(64).growX();
});
