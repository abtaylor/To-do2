$(document).ready(function(){
 $("#add-new-to-do-button"). click(function(){
    var todoBlock = $(this).closest("#new-todo-block")
    var description = todoBlock.find("#new-todo-description")
    var pomodoroEstimate = todoBlock.find("#new-pomo-estimate")
    $("ul").append("<li><input type = 'checkbox'/>" + "<span class= 'item'>" + description.val() + "</span>" + "<span class= 'pomo'>" + pomodoroEstimate.val() + "</span></li>")
    
    
    
    
    
 })   
})