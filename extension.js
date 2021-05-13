(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: , msg: ''};
    };
    ext.change_ext = function(text) {
        ScratchExtensions.register(text, descriptor, ext);
    };
    ext.set_status = function(number, text2) {
        return {status: number, msg: text};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        [' ', 'set extension to %s,'set_ext']
        [' ', 'set status %n to %s,'set_status']
        ]
    };

    // Register the extension
    ScratchExtensions.register(' ', descriptor, ext);
})({});
