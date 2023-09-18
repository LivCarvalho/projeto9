$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        const novaTarefa = $("#tarefa").val();
        const novoItem = $("<li style ='display: none'></li>");
        $(`
            <a>
                ${novaTarefa}
            </a>`
        ).appendTo(novoItem);

        $(novoItem).appendTo("ul");

        $(novoItem).fadeIn(1000);
        $("#tarefa").val("");

        $("a").click(function(){
            $(this).css("text-decoration", "line-through");
        })

    })
})