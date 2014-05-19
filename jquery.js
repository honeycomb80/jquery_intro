$( document ).ready(function(){
  
  //add new todo
  $("input").keypress(function(e) {
     if (e.which == 13) {
       e.preventDefault();
       var text = $('input').val();
       if(!text.length) {
         return;
       }
       else {
         addTodo(text);
         $('input').val("");
       }
     }
  });
  
  $('ul').on('click', 'li', function(){
    var todo = $(this);
    if(todo.hasClass('completed')){
      todo.removeClass('completed');
    }
    else {
      todo.addClass('completed');
    }
    
  });
  
  $('ul').on('click', 'span', function(){
     $(this).parent().remove();
   });
  
  /*$('ul').on('mouseenter', 'li', function(){
    $(this).find('span').text("Delete?");
  })*/
  
  var addTodo = function(text){
    var newTodo = '<li>' + text + '<span class="delete">Delete</span></li>';
    $(newTodo).hide().appendTo('ul').fadeIn(500);    
  };
  
  $('#deleteAll').click(function(){
    $('li.completed').fadeOut(500, function(){
        $(this).remove();
      });
  });
  
  
   //create initial todos
  var seedTodos = ["Walk Dog", "Buy Milk", "Go Vegan"];
  $.each(seedTodos, function(index, item){
    addTodo(item);
  });
  
});