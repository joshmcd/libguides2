/*! springshare 1.5.0 */

var springSpace=springSpace||{};springSpace["public"]={},springSpace["public"]._construct=function(){function a(a){this.constant=springSpace.Util.setProp(a.constant,null),this.script_name=springSpace.Util.setProp(a.script_name,0),this.guide_id=springSpace.Util.setProp(a.guide_id,0),this.page_id=springSpace.Util.setProp(a.page_id,0),this.guide_friendly_name=springSpace.Util.setProp(a.guide_friendly_name,""),this.page_friendly_name=springSpace.Util.setProp(a.page_friendly_name,"")}a.prototype.loadHomepageList=function(a){key=springSpace.Util.setProp(a.key,0),type_id=springSpace.Util.setProp(a.type_id,0),group_id=springSpace.Util.setProp(a.group_id,0),owner_id=springSpace.Util.setProp(a.owner_id,0),type_label=springSpace.Util.setProp(a.type_label,"Guides"),num_cols=springSpace.Util.setProp(a.num_cols,""),display_sort=springSpace.Util.setProp(a.display_sort,!1),jQuery(".s-lg-index-nav-btn").removeClass("active"),jQuery("#"+a.button_id).addClass("active"),jQuery("#s-lg-guide-list-controls").hide(),jQuery("#"+a.elt_id).html('<div class="bold s-lib-color-lt-grey pad-top-med text-center">Loading...</div>'),springSpace.homepage.current_list!==a.action&&(springSpace.homepage.current_list=a.action,springSpace.homepage.current_btn_id=a.button_id,springSpace.homepage.current_num_cols=num_cols,springSpace.homepage.current_type_label=type_label||jQuery("#s-lg-index-label").html()),xhr=jQuery.ajax({url:"index_process.php",data:{action:a.action,key:key,order:a.order,type_id:type_id,owner_id:owner_id,group_id:group_id,num_cols:springSpace.homepage.current_num_cols,search:jQuery("#s-lg-guide-search").val()},type:"GET",dataType:"json",success:function(b){200==b.errCode&&(jQuery("#"+a.elt_id).html(b.data.content),jQuery("#s-lg-index-list-header").html(b.data.list_header),jQuery("#form-group-s-lg-guide-order").toggle(display_sort),jQuery("#s-lg-guide-list-controls").show(),springSpace.UI.xhrPopover())},error:function(a,b,c){alert("Oops, sorry! Something unexpected happened: "+c+" \n\nThat might not mean much to you, but it probably does to the Springy Techs...you can let them know at support@springshare.com.")}})},this.Public=a},springSpace["public"]._construct(),jQuery(document).ready(function(){jQuery(window).scroll(function(){jQuery(this).scrollTop()>220?jQuery("#s-lib-scroll-top").fadeIn(750):jQuery("#s-lib-scroll-top").fadeOut(750)}),jQuery("#s-lib-scroll-top").click(function(a){return a.preventDefault(),jQuery("html, body").animate({scrollTop:0},750),!1})});
//# sourceMappingURL=springshare.public.min.js.map