/**
 * Created by IP DAS on 12/5/2016.
 */
$(function(){
    $('form')[0].reset();
    $("#sign-form-validation").submit(function(){

        var fname=$("#first-name").val();
        var sname=$("#last-name").val();
        var mail=$("#email").val();
        var password=$("#pwd").val();
        var phn_number=$("#mobile_number").val();
        var national=$("#nationality").val();

        //here the radio btn and the selected items to get

        var check_box=$( "input:checked").val();
        var select=$("input:selected").val();

        var flag=false;
        var error_messages=[];

        if(fname=="")
        {
            flag=true;
            error_messages.push("Warning....!!!!");
            error_messages.push("Enter your First Name..!!");
        }
        if(sname=="")
        {
            flag=true;
            error_messages.push("Enter your last name..!!");
        }
       /* if (check_box!=true)
        {
            flag=true;
            error_message.push("Select your gender..!!");
        }*/
        if(mail=="")
        {
            flag=true;
            error_messages.push("Email is required..!!");
        }
        if(password=="")
        {
            flag=true;
            error_messages.push("Password required..!!");
        }
        if(national=="")
        {
            flag=true;
            error_messages.push("Select a Nationality..!!");
        }
       /* if(select!=true)
        {
        flag=true;
        error_message.push("Select a job..!!");
        }*/
        if(phn_number === "")
        {
            flag=true;
            error_messages.push("Please give your phone number..!!");
        }

        if(flag){

            var error='<div class="alert alert-danger"><h3>Fixes these errors:</h3><ul>';

            var len=error_messages.length;
            for(var i=0 ; i<len ; i++ )
            {

                error +='<li>' + error_messages[i]+'</li>';
            }
            error +='</ul></div>';
            $("#error-t").html(error);
            return false;
        }
        else
            return true;

    });


});