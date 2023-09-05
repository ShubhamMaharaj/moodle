$( document ).ready(function() {
    require(['core/config'], function (mdlcfg) {
        $("#page-user-profile #page-header .col-12.pt-3").removeClass("pb-3");

    var h1Element = $("<h2 class='prof_head'>My Profile</h2>");
    


    $("#page-user-profile #page-header").prepend(h1Element);

    $("#page-user-profile #page-header .card-body .d-sm-flex.align-items-center").addClass("prof_sec");

    $("#page-user-profile #page-header .card-body .prof_sec").removeClass("d-sm-flex align-items-center");
    
    var profSecText =$("<h5 class='prof_Sec_head'>Your Photo</h5><p>This Will be displayed On your profile</P>")
    $("#page-user-profile .card-body .prof_sec").prepend(profSecText);


     
     var imgElement = $(".defaultuserpic");
     console.log(mdlcfg.wwwroot)
    
     if (imgElement.length > 0) {
        imgElement.attr("src", mdlcfg.wwwroot + '/theme/boost/pix_custom/Mainuser.png');

        $("#page-user-profile .page-header-image").css("display", "block");
      
        




        
    }

    var ProfEditIcon = $('<i class="fa fa-pencil edit_Prof" aria-hidden="true"></i>');
    


    $("#page-user-profile .page-header-image .aabtn").append(ProfEditIcon);
    var ProfEditRedirection = $("#page-user-profile .page-header-image .aabtn");

    ProfEditRedirection.attr("href", mdlcfg.wwwroot + '/user/editadvanced.php?id=2&course=1&returnto=profile');

    $("#page-user-profile .page-header-image").css("display", "block");
    $('#page-user-profile .node_category.card').removeClass('d-inline-block');
    $('#page-user-profile .node_category.card:not(:first)').css("display", "none");
    $("#page-user-profile .userprofile .profile_tree").css("display", "block");

    var userDetailSec =$("<h5 class='prof_Sec_head'>Personal information</h5><p>Update your photo and persional detail</P>")
    $("#page-user-profile .node_category.card .card-body").prepend(userDetailSec);

    $("#page-user-profile  .node_category.card .card-body ul").addClass('row');
    $("#page-user-profile  .node_category.card .card-body ul li").addClass('col-lg-6 col-md-6');

    var ProfEditIcontwo = $('<a class="edit_prof_url"><i class="fa fa-pencil edit_Prof_two" aria-hidden="true"></i></a>');
    


    $("#page-user-profile  .node_category.card .card-body ").append(ProfEditIcontwo);
    var ProfEditRedirectiontwo = $("#page-user-profile  .node_category.card .card-body .edit_prof_url");

    ProfEditRedirectiontwo.attr("href", mdlcfg.wwwroot + '/user/editadvanced.php?id=2&course=1&returnto=profile');



})
});

