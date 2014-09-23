/**
 * v. 1.0
 * https://github.com/psyipm/jquery-showmessage
 */

(function($) {
    var ShowMessage = function(options) {
        var defaults = {
            id: "show_msg_dialog",
            title: "Title",
            text: "Hello world!",
            width: 350,
            autoOpen: false,
            resizable: false,
            modal: true
        };
        
        this.s = $.extend(true, defaults, options);
        
        this._appendHtml = function() {
            var html = '<div id="'+this.s.id+'" title="'+this.s.title+'" style="display: none;">' +
                            '<p>'+
                                '<span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>'+
                                this.s.text+
                            '</p>'+
                       '</div>';
               
            $("body").append(html);
        };
        
        this._removeHtml = function() {
            $("#"+this.s.id).remove();
        };
        
        this._initDialog = function() {
            var that = this;
            $("#"+this.s.id).dialog({
                autoOpen: this.s.autoOpen,
                resizable: this.s.resizable,
                width: this.s.width,
                modal: this.s.modal,
                buttons: [
                    {
                        id: this.s.id+"_btn_ok",
                        text: "Ok",
                        click: function() {
                            $(this).dialog("close");
                        }
                    }
                ],
                close: function( event, ui ) {
                    that._removeHtml();
                }
            });
        };
    };
    
    ShowMessage.prototype.showMessage = function() {
        this._appendHtml();
        this._initDialog();
        $("#"+this.s.id).dialog("open");
    };
    
    $.message = function(options) {
        var sm = new ShowMessage(options);
        sm.showMessage();
    };
})(jQuery);