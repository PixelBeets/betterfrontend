/*
 * jQuery Custom Forms Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
jQuery.foundation=jQuery.foundation||{},jQuery.foundation.customForms=jQuery.foundation.customForms||{},jQuery(document).ready(function(e){e.foundation.customForms.appendCustomMarkup=function(t){function r(t,n){var r=e(n).hide(),i=r.attr("type"),s=r.next("span.custom."+i);s.length===0&&(s=e('<span class="custom '+i+'"></span>').insertAfter(r)),s.toggleClass("checked",r.is(":checked")),s.toggleClass("disabled",r.is(":disabled"))}function i(t,n){var r=e(n),i=r.next("div.custom.dropdown"),s=r.find("option"),o=r.find("option:selected"),u=0,a;if(r.hasClass("no-custom"))return;i.length===0?($customSelectSize="",e(n).hasClass("small")?$customSelectSize="small":e(n).hasClass("medium")?$customSelectSize="medium":e(n).hasClass("large")?$customSelectSize="large":e(n).hasClass("expand")&&($customSelectSize="expand"),i=e('<div class="custom dropdown '+$customSelectSize+'"><a href="#" class="selector"></a><ul></ul></div>"'),s.each(function(){a=e("<li>"+e(this).html()+"</li>"),i.find("ul").append(a)}),i.prepend('<a href="#" class="current">'+o.html()+"</a>"),r.after(i),r.hide()):(i.find("ul").html(""),s.each(function(){a=e("<li>"+e(this).html()+"</li>"),i.find("ul").append(a)})),i.toggleClass("disabled",r.is(":disabled")),s.each(function(t){this.selected&&(i.find("li").eq(t).addClass("selected"),i.find(".current").html(e(this).html()))}),i.css("width","inherit"),i.find("ul").css("width","inherit"),i.find("li").each(function(){i.addClass("open"),e(this).outerWidth()>u&&(u=e(this).outerWidth()),i.removeClass("open")}),i.is(".small, .medium, .large, .expand")||(i.css("width",u+18+"px"),i.find("ul").css("width",u+16+"px"))}var n={disable_class:"js-disable-custom"},t=e.extend(n,t);e("form.custom input:radio[data-customforms!=disabled]").each(r),e("form.custom input:checkbox[data-customforms!=disabled]").each(r),e("form.custom select[data-customforms!=disabled]").each(i)}}),function(e){function t(t){var n=0,r=t.next();$options=t.find("option"),r.find("ul").html(""),$options.each(function(){$li=e("<li>"+e(this).html()+"</li>"),r.find("ul").append($li)}),$options.each(function(t){this.selected&&(r.find("li").eq(t).addClass("selected"),r.find(".current").html(e(this).html()))}),r.removeAttr("style").find("ul").removeAttr("style"),r.find("li").each(function(){r.addClass("open"),e(this).outerWidth()>n&&(n=e(this).outerWidth()),r.removeClass("open")}),r.css("width",n+18+"px"),r.find("ul").css("width",n+16+"px")}function n(e){var t=e.prev(),n=t[0];0==t.is(":disabled")&&(n.checked=n.checked?!1:!0,e.toggleClass("checked"),t.trigger("change"))}function r(t){var n=t.prev(),r=n[0];0==n.is(":disabled")&&(e('input:radio[name="'+n.attr("name")+'"]').each(function(){e(this).next().removeClass("checked")}),r.checked=r.checked?!1:!0,t.toggleClass("checked"),n.trigger("change"))}e("form.custom span.custom.checkbox").live("click",function(t){t.preventDefault(),t.stopPropagation(),n(e(this))}),e("form.custom span.custom.radio").live("click",function(t){t.preventDefault(),t.stopPropagation(),r(e(this))}),e("form.custom select").live("change",function(n){t(e(this))}),e("form.custom label").live("click",function(t){var i=e("#"+e(this).attr("for")),s,o;i.length!==0&&(i.attr("type")==="checkbox"?(t.preventDefault(),s=e(this).find("span.custom.checkbox"),n(s)):i.attr("type")==="radio"&&(t.preventDefault(),o=e(this).find("span.custom.radio"),r(o)))}),e("form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector").live("click",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),i=r.prev();t.preventDefault(),e("div.dropdown").removeClass("open");if(0==i.is(":disabled"))return r.toggleClass("open"),r.hasClass("open")?e(document).bind("click.customdropdown",function(t){r.removeClass("open"),e(document).unbind(".customdropdown")}):e(document).unbind(".customdropdown"),!1}),e("form.custom div.custom.dropdown li").live("click",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),i=r.prev(),s=0;t.preventDefault(),t.stopPropagation(),e("div.dropdown").removeClass("open"),n.closest("ul").find("li").removeClass("selected"),n.addClass("selected"),r.removeClass("open").find("a.current").html(n.html()),n.closest("ul").find("li").each(function(e){n[0]==this&&(s=e)}),i[0].selectedIndex=s,i.trigger("change")})}(jQuery);