

function mediaPlayer(config)
{
    this.midia = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

mediaPlayer.prototype._initPlugins = function()
{
    this.plugins.forEach(plugin => {
        plugin.run(this)
        
    });
}

mediaPlayer.prototype.play = function()
{
    this.midia.play();
}

mediaPlayer.prototype.pausa = function()
{
    this.midia.pause();
}

mediaPlayer.prototype.togglePlay = function()
{
    if(this.midia.paused){
        this.play();
    }else{
        this.pausa();
    }
}

mediaPlayer.prototype.mute = function()
{
    this.midia.muted = true;
}

mediaPlayer.prototype.unmute = function()
{
    this.midia.muted = false;
}

export default mediaPlayer;