class Teacher{

  constructor(name, hometown){
    this.name = name;
    this.hometown = hometown;
  }
}

$(document).ready(function(){

  $('input[type="submit"]').click(function(event){
    event.preventDefault();
    
    let name = $("input[name*='name']").val()
    let hometown = $("input[name*='hometown']").val()

    teacher = new Teacher(name, hometown)

    $('.container ul').append('<li>name: ' + teacher.name + ' hometown: ' + teacher.hometown + '</li>')

    $("input[name*='name']").val('')
    $("input[name*='hometown']").val('')

  })
})

