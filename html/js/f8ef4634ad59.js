function csrfSafeMethod(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}function hqDefine(e,t){if("undefined"!=typeof COMMCAREHQ_MODULES[e])throw new Error("The module '"+e+"' has already been defined elsewhere.");COMMCAREHQ_MODULES[e]=t()}function hqImport(e){if("undefined"==typeof COMMCAREHQ_MODULES[e])throw new Error("The module '"+e+"' has not yet been defined.\n\nDid you include <script src=\""+e+'"></script> on your html page?');return COMMCAREHQ_MODULES[e]}$.ajaxSetup({beforeSend:function(e,t){csrfSafeMethod(t.type)||this.crossDomain||($csrf_token=$.cookie("csrftoken"),e.setRequestHeader("X-CSRFToken",$csrf_token))}}),$.fn.bootstrapButton=$.fn.button,$(function(){function e(e){var t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return t.test(e)}function t(e,t){e.find("#bug-report-url").val(location.href)}function n(e,t,n){f=!0}function a(e){f=!1,s.find("button[type='submit']").bootstrapButton("success").removeClass("btn-primary btn-danger").addClass("btn-success"),r.one("hidden.bs.modal",function(){p()})}function o(e){f=!1,s.find("button[type='submit']").bootstrapButton("error").removeClass("btn-primary btn-success").addClass("btn-danger")}function i(e){e.addClass("has-error has-feedback"),e.find(".label-danger").removeClass("hide"),e.find("input").focus(function(){e.removeClass("has-error has-feedback"),e.find(".label-danger").addClass("hide")})}var r=$("#modalReportIssue"),s=$("#hqwebapp-bugReportForm"),u=$("#bug-report-cancel"),d=$("#bug-report-cc-form-group"),l=$("#bug-report-email-form-group"),c=$("#bug-report-subject-form-group"),f=!1,p=function(){s.find("button[type='submit']").bootstrapButton("reset"),s.resetForm(),u.bootstrapButton("reset"),d.removeClass("has-error has-feedback"),d.find(".label-danger").addClass("hide"),l.removeClass("has-error has-feedback"),l.find(".label-danger").addClass("hide")};r.on("shown.bs.modal",function(){$("input#bug-report-subject").focus()}),s.submit(function(){var s=!$("#bug-report-subject").val()&&!$("#bug-report-message").val();s&&i(c);var p=$(this).find("input[name='email']").val();if(p&&!e(p))return i(l),!1;var h=$(this).find("input[name='cc']").val();h=h.replace(/ /g,"").split(",");for(var g in h){var v=h[g];if(v&&!e(v))return i(d),!1}if(s)return!1;var b=$(this).find("button[type='submit']");return f||b.text()!=b.data("success-text")?f||(b.bootstrapButton("loading"),u.bootstrapButton("loading"),$(this).ajaxSubmit({type:"POST",url:$(this).attr("action"),beforeSerialize:t,beforeSubmit:n,success:a,error:o})):r.modal("hide"),!1})});var hqLayout={};hqLayout.selector={navigation:"#hq-navigation",content:"#hq-content",footer:"#hq-footer",sidebar:"#hq-sidebar",breadcrumbs:"#hq-breadcrumbs"},hqLayout.values={footerHeight:0,isFooterVisible:!0},hqLayout.utils={getCurrentScrollPosition:function(){return $(window).scrollTop()+$(window).height()},getFooterShowPosition:function(){return $(document).height()-hqLayout.values.footerHeight/3},getAvailableContentHeight:function(){var e=$(hqLayout.selector.navigation),t=$(hqLayout.selector.footer),n=$(hqLayout.selector.breadcrumbs),a=e.outerHeight()+t.outerHeight();return n.length&&(a+=n.outerHeight()),$(window).height()-a},isScrolledToFooter:function(){return hqLayout.utils.getCurrentScrollPosition()>=hqLayout.utils.getFooterShowPosition()},isScrollable:function(){return $(document).height()>$(window).height()}},hqLayout.actions={initialize:function(){hqLayout.values.footerHeight=$(hqLayout.selector.footer).innerHeight()},balanceSidebar:function(){var e=$(hqLayout.selector.sidebar),t=$(hqLayout.selector.content);if(t.length){var n=hqLayout.utils.getAvailableContentHeight(),a=t.innerHeight();if(a>n&&(t.css("padding-bottom","15px"),a=t.outerHeight()),e.length){var o=Math.max(n,a);e.css("min-height",o+"px")}}}},$(window).load(function(){hqLayout.actions.initialize(),hqLayout.actions.balanceSidebar()}),$(window).resize(function(){hqLayout.actions.balanceSidebar()}),$(window).scroll(function(){hqLayout.actions.balanceSidebar()}),$.fn.activateSubmitOnlyOnChange=function(){var e=$(this);if("FORM"===e.prop("tagName")){var t=function(t){return function(){e.find('button[type="submit"]').prop("disabled",t)}};t(!0)(),e.on("change",t(!1)).on("input",t(!1))}else console.warn("activateSubmitOnlyOnChange should only be applied to forms.")},$(function(){var e=function(e){$.ajax({url:"/announcements/clear/"+e})};$(".page-level-alert").bind("closed",function(){var t=$(".page-level-alert").find(".announcement-control").data("announcementid");t&&e(t)}),$(document).on("submit","form",function(e){var t=$(e.target);t.find(".disable-on-submit").disableButton(),t.find(".disable-on-submit-no-spinner").disableButtonNoSpinner()}),$(document).on("submit","form.disable-on-submit",function(e){$(e.target).find('[type="submit"]').disableButton()}),$(document).on("click",".add-spinner-on-click",function(e){$(e.target).addSpinnerToButton()}),$(document).on("click",".notification-close-btn",function(){var e=$(this).data("note-id"),t=$(this).data("url");$.post(t,{note_id:e}),$(this).parents(".alert").hide(150)})}),window.onerror=function(e,t,n,a,o){return $.post("/jserror/",{message:e,page:window.location.href,file:t,line:n,stack:o?o.stack:null}),!1};var oldHide=$.fn.popover.Constructor.prototype.hide;$.fn.popover.Constructor.prototype.hide=function(){if("hover"===this.options.trigger&&this.tip().is(":hover")){var e=this;return void setTimeout(function(){return e.hide.apply(e,arguments)},e.options.delay.hide)}oldHide.apply(this,arguments)},$.fn.hqHelp=function(){var e=this;e.each(function(t){var n=$(e),a=$(n.get(t)),o=a.find("a"),i={html:!0,trigger:"focus"};o.data("content")||(i.content=function(){return $("#popover_content_wrapper").html()}),o.data("title")||(i.template='<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'),o.popover(i),a.find("a").click(function(e){ga_track_event("Clicked Help Bubble",$(this).data("title"),"-"),e.preventDefault()})})},$.showMessage=function(e,t){var n=$("<div />").addClass("alert fade in alert-block alert-full page-level-alert").addClass("alert-"+t),a=$("<a />").addClass("close").attr("data-dismiss","alert");a.attr("href","#").html("&times;"),n.append(a),n.append(e),$(".hq-page-header-container").prepend(n)},$.fn.addSpinnerToButton=function(){$(this).prepend('<i class="fa fa-refresh fa-spin icon-refresh icon-spin"></i> ')},$.fn.removeSpinnerFromButton=function(){$(this).find("i").remove()},$.fn.disableButtonNoSpinner=function(){$(this).attr("disabled","disabled").addClass("disabled")},$.fn.disableButton=function(){$(this).disableButtonNoSpinner(),$(this).addSpinnerToButton()},$.fn.enableButton=function(){$(this).removeSpinnerFromButton(),$(this).removeClass("disabled").removeAttr("disabled")},$.fn.koApplyBindings=function(e){if(!this.length)throw new Error("No element passed to koApplyBindings");if(this.length>1)throw new Error("Multiple elements passed to koApplyBindings");ko.applyBindings(e,this.get(0)),this.removeClass("ko-template")};var COMMCAREHQ_MODULES={};hqDefine("hqwebapp/js/toggles.js",function(){var e=function(e,t){var n=e[t];if("undefined"==typeof n)throw new Error("Toggle "+t+"not recognized. Must be one of: \n\n"+_.keys(e).join("\n"));return n};return{toggleEnabled:function(t){return e(hqImport("#toggles").toggles,t)},previewEnabled:function(t){return e(hqImport("#toggles").previews,t)}}});var COMMCAREHQ={};COMMCAREHQ.icons={GRIP:"icon-resize-vertical icon-blue fa fa-arrows-v",ADD:"icon-plus icon-blue fa fa-plus",COPY:"icon-copy icon-blue fa fa-copy",DELETE:"icon-remove icon-blue fa fa-remove",PAPERCLIP:"icon-paper-clip fa fa-paperclip"};var eventize=function(e){"use strict";var t={};return e.on=function(n,a){return void 0===t[n]&&(t[n]=[]),t[n].push(a),e},e.fire=function(n,a){var o;if(void 0!==t[n])for(o=0;o<t[n].length;o+=1)t[n][o].apply(e,[a]);return e},e};COMMCAREHQ.makeHqHelp=function(e,t){"use strict";t=void 0===t?!0:t;var n=$('<div class="hq-help"><a href="#" tabindex="-1"><i class="fa fa-question-circle icon-question-sign"></i></a></div>');return _.each(["content","title","html","placement"],function(t){$("a",n).data(t,e[t])}),t&&n.hqHelp(),n},COMMCAREHQ.transformHelpTemplate=function(e,t){"use strict";if(e.data()){var n=COMMCAREHQ.makeHqHelp(e.data(),t);n.insertAfter(e),e.remove()}},COMMCAREHQ.initBlock=function(e){"use strict";$(".submit_on_click",e).on("click",function(e){e.preventDefault(),$(this).data("clicked")||($(this).prev("form").submit(),$(this).data("clicked","true").children("i").removeClass().addClass("icon-refresh icon-spin fa fa-refresh fa-spin"))}),$(".submit").click(function(e){var t=$(this).closest(".form, form"),n=t.my_serialize(),a=t.attr("action")||t.data("action");e.preventDefault(),$.postGo(a,$.unparam(n))}),$(".post-link").click(function(e){e.preventDefault(),$.postGo($(this).attr("href"),{})}),$(".button",e).button().wrap("<span />"),$("input[type='submit']",e).button(),$("input[type='text'], input[type='password'], textarea",e),$(".container",e).addClass("ui-widget ui-widget-content"),$(".config",e).wrap("<div />").parent().addClass("container block ui-corner-all")},COMMCAREHQ.updateDOM=function(e){"use strict";var t;for(t in e)e.hasOwnProperty(t)&&$(t).text(e[t]).val(e[t])},COMMCAREHQ.makeSaveButton=function(e,t){"use strict";var n={init:function(e){var a={$save:$("<div/>").text(n.message.SAVE).click(function(){a.fire("save")}).addClass(t),$retry:$("<div/>").text(n.message.RETRY).click(function(){a.fire("save")}).addClass(t),$saving:$("<div/>").text(n.message.SAVING).addClass("btn btn-default disabled"),$saved:$("<div/>").text(n.message.SAVED).addClass("btn btn-default disabled"),ui:$("<div/>").addClass("pull-right"),setStateWhenReady:function(e){"saving"===this.state?this.nextState=e:this.setState(e)},setState:function(e){this.state!==e&&(this.state=e,this.$save.detach(),this.$saving.detach(),this.$saved.detach(),this.$retry.detach(),"save"===e?this.ui.append(this.$save):"saving"===e?this.ui.append(this.$saving):"saved"===e?this.ui.append(this.$saved):"retry"===e&&this.ui.append(this.$retry))},ajax:function(e){var t=e.beforeSend||function(){},a=e.success||function(){},o=e.error||function(){},i=this;e.beforeSend=function(e,n){i.setState("saving"),i.nextState="saved",$.ajaxSettings.beforeSend(e,n),t.apply(this,arguments)},e.success=function(e){i.setState(i.nextState),a.apply(this,arguments)},e.error=function(e){i.nextState=null,i.setState("retry");var t=e.responseJSON&&e.responseJSON.message?e.responseJSON.message:e.responseText;t.indexOf("<head>")>-1&&(t=null),alert_user(t||n.message.ERROR_SAVING,"danger"),o.apply(this,arguments)};var r=$.ajax(e);r||i.setState("save")}};return eventize(a),a.setState("saved"),a.on("change",function(){this.setStateWhenReady("save")}),e.save&&a.on("save",e.save),$(window).bind("beforeunload",function(){var t="html"==a.ui.parents()[a.ui.parents().length-1].tagName.toLowerCase();return"saved"!==a.state&&t?e.unsavedMessage||"":void 0}),a},initForm:function(e,t){var a=e.attr("action"),o=n.init({unsavedMessage:t.unsavedMessage,save:function(){this.ajax({url:a,type:"POST",dataType:"json",data:e.serialize(),success:t.success})}}),i=function(){o.fire("change")};return _.defer(function(){e.find("*").change(i),e.find("input, textarea").bind("textchange",i)}),o},message:e};return n},COMMCAREHQ.SaveButton=COMMCAREHQ.makeSaveButton({SAVE:django.gettext("Save"),SAVING:django.gettext("Saving..."),SAVED:django.gettext("Saved"),RETRY:django.gettext("Try Again"),ERROR_SAVING:django.gettext("There was an error saving")},"btn btn-success"),COMMCAREHQ.DeleteButton=COMMCAREHQ.makeSaveButton({SAVE:django.gettext("Delete"),SAVING:django.gettext("Deleting..."),SAVED:django.gettext("Deleted"),RETRY:django.gettext("Try Again"),ERROR_SAVING:django.gettext("There was an error deleting")},"btn btn-danger"),COMMCAREHQ.beforeUnload=[],COMMCAREHQ.bindBeforeUnload=function(e){COMMCAREHQ.beforeUnload.push(e)},COMMCAREHQ.beforeUnloadCallback=function(){for(var e=0;e<COMMCAREHQ.beforeUnload.length;e++){var t=COMMCAREHQ.beforeUnload[e]();if(null!==t&&void 0!==t)return t}},$(function(){"use strict";COMMCAREHQ.initBlock($("body")),$(window).bind("beforeunload",COMMCAREHQ.beforeUnloadCallback)}),COMMCAREHQ.toggleEnabled=hqImport("hqwebapp/js/toggles.js").toggleEnabled,COMMCAREHQ.previewEnabled=hqImport("hqwebapp/js/toggles.js").previewEnabled;
//# sourceMappingURL=/static/CACHE/js/f8ef4634ad59.map.js