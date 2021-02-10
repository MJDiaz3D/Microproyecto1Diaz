const skills =[
    {
        name: "Maya",
        ranking: "75/100"
    },
    {
        name: "Modelado 3D",
        ranking: "80/100"
    },
    {
        name: "Java",
        ranking: "70/100"
    },
    {
        name: "Animacion",
        ranking: "70/100"
    }
]




window.addEventListener('load', function(){
    
    console.log('el contenido ha cargado')
    
    var imagenes = []
    var tiempo = 1000

    imagenes[0]='slider/imagen1.jpg'
    imagenes[1]='slider/imagen2.jpg'
    imagenes[2]='slider/imagen3.jpg'

    function cambiar(){

        var i = 0
        document.slider.src = imagenes[i]

        if(i<2){
            i++;
        }else{
            i=0
        }
    }
    window.setInterval(cambiar(), tiempo)
})


