var curso =[];

function verificacion(){

        var nombreAlumno = document.getElementById('nombre').value;
        var nota1 = (document.getElementById('nota1').value);
        var nota2 = (document.getElementById('nota2').value);
        var nota3 = (document.getElementById('nota3').value);
        var nota4 = (document.getElementById('nota4').value);
        var nota5 = (document.getElementById('nota5').value);
         
        console.log(nombreAlumno);

        if(nombreAlumno == "") {
                alert('Debes ingresar un nombre');
                document.getElementById('nombre').value='';
                document.getElementById('nombre').focus();
        }else if(nota1 == "" || nota1 > 7) {
                alert('Debes ingresar un valor entre 1 y 7');
                document.getElementById('nota1').value='';
                document.getElementById('nota1').focus();
        } else if(nota2 =="" || nota2 > 7) {
                alert('Debes ingresar un valor menor que 7');
                document.getElementById('nota2').value='';
                document.getElementById('nota2').focus();
        }else if(nota3 =="" || nota3 > 7) {
                alert('Debes ingresar un valor menor que 7');
                document.getElementById('nota3').value='';
                document.getElementById('nota3').focus();
        }else if(nota4 =="" || nota4 > 7) {
                alert('Debes ingresar un valor menor que 7');
                document.getElementById('nota4').value='';
                document.getElementById('nota4').focus();
        }else if(nota5 =="" || nota5 > 7) {
                alert('Debes ingresar un valor menor que 7');
                document.getElementById('nota5').value='';
                document.getElementById('nota5').focus();
        } else{
                almacenarDatos(nombreAlumno,nota1,nota2,nota3,nota4,nota5);
        }



}

function almacenarDatos(nombreAlumno,nota1,nota2,nota3,nota4,nota5){
        var notta1=parseFloat(nota1)
        var notta2=parseFloat(nota2)
        var notta3=parseFloat(nota3)
        var notta4=parseFloat(nota4)
        var notta5=parseFloat(nota5)



        var prom = ((notta1+notta2+notta3+notta4+notta5)/5);

        nuevoAlumno = {nombre: nombreAlumno, notas: [notta1,notta2,notta3,notta4,notta5], promedio: prom}
        curso.push(nuevoAlumno);
        escribir(nombreAlumno,notta1,notta2,notta3,notta4,notta5,prom);
}

function escribir(nombreAlumno,nota1,nota2,nota3,nota4,nota5,prom){

        const tableR = document.createElement('tr');
        tableR.innerHTML = '<th>' + nombreAlumno + '</th>' + '<th>' + nota1 + '</th>'+ '<th>' + nota2 + '</th>'+'<th>' + nota3 + '</th>'+'<th>' + nota4 + '</th>'+'<th>' + nota5 + '</th>'+'<th>' + prom.toFixed(1) + '</th>'
        document.getElementById('tabla').appendChild(tableR);

        resultados(curso)
}


function resultados(curso){
        var sumaPromedios=0;
        var promedioCruso=0;

        for (let i = 0; i < curso.length; i++) {
               sumaPromedios= sumaPromedios + curso[i].promedio            
        }
        promedioCruso= sumaPromedios/curso.length;

// ordena el array curso, respecto a la nota promedio, dejando la mas alta al principio
        let resultadosOrdenados = curso.sort(function(a,b){
                return b.promedio - a.promedio;
             }  );
             
        document.getElementById('promedioCurso').innerHTML= promedioCruso.toFixed(1);
        let i = 0;
             document.getElementById("notaMasAlta").innerHTML="";
        while (i < resultadosOrdenados.length){
                if(resultadosOrdenados[0].promedio == resultadosOrdenados[i].promedio){
                  console.log(resultadosOrdenados[i].nombre)

                  const tablaMejorPromedio = document.createElement('li');
                  tablaMejorPromedio.innerHTML = resultadosOrdenados[i].nombre + " con un promedio de " + resultadosOrdenados[i].promedio.toFixed(1)
                  document.getElementById('notaMasAlta').appendChild(tablaMejorPromedio);





                }
                i++
              }

}



// ·         Cada alumno o sub-objeto podría tener 5 notas o números dentro de un arreglo como un atributo.

// ·         Crear una función que calcule la nota final de cada alumno o sub-objeto.

// ·         Crear una función que calcule la nota final del curso u Objeto padre.

// ·         Mostrar el mejor promedio (sub-objeto)
