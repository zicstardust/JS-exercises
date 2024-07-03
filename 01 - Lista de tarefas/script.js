$(document).ready(function() {

    carregarTarefas();

    $('#addTarefaBtn').on('click', function(){
        var tarefaText = $("#tarefaInput").val();
        if (tarefaText.trim() !== '') {
            addTarefa(tarefaText)
            salvarTarefas();
            $('#tarefaInput').val('');
        }
    })

//Adicionar tarefas
function addTarefa(text){
    $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>');
};

//Marcar/desmarcar tarefas como concluida
$(document).on('click', 'li',function(){
    $(this).toggleClass('completed');
    salvarTarefas();
});


//Remover tarefas
$(document).on('click', 'span',function(e){
    e.stopPropagation(); //Evita propagacao para o elemento pai (li)
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        salvarTarefas();
    });
});


//Salvar tarefas
function salvarTarefas(){
    var tarefas = $('#tarefaList').html();
    localStorage.setItem('tarefas', tarefas);
};


//Carregar tarefas
function carregarTarefas(){
    var tarefas = localStorage.getItem('tarefas')
    if (tarefas){
        $('#tarefaList').html(tarefas);
    };
};

})