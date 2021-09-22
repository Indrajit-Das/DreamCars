/**
 * Created by IP DAS on 11/28/2016.
 */
document.getElementById("add_item").addEventListener('click',function(){
    var value= document.getElementById('item').value;
    if(value){
        addItemTodo(value);
        document.getElementById('item').value='';
        document.getElementById("error").innerHTML='';
    }else{
        document.getElementById("error").innerHTML="plese enter some value";

    }
});
function completeItem(){
    var item =this.parentNode.parentNode;
    var parent=item.parentNode;
    var id=parent.id;
    var target ;

    if(id === 'todo'){
        target= document.getElementById("completed");
    }else {
        target=document.getElementById("todo");
    }
    target.insertBefore(item, target.childNodes[0]);

}