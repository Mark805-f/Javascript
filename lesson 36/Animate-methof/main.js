$('growBtn').click(function() {
    $('#square').animate({
        "witdh": "200px",
        "height": "200px"
    });
});

$('#moveBtn').click(function() {
    $('.testing').animate({
        'left': '+=50px',
        'opacity': 0.25,
        'fontSize': '12px'
    },
    function() {
        console.log('animation complete')
    }
)
    
})