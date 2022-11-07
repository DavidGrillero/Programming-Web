var resultado = 0;
var sexo = 0;

function showSelected() {
  let sexo = document.getElementById("sexo").value;
  console.log(sexo)
} 
  

const submit = () => {
  
  let nombre = document.getElementById("nombre").value; 
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let sexo = document.getElementById("sexo").value;
  console.log(sexo)

  parseInt(peso)
  parseInt(altura)

  altura = altura / 100

  let imc = peso / (altura**2)

  if (sexo == 0) {

    if (imc < 17) {
    let estado1 = "Delgadez Severa"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado1}. Cuidado ¡¡¡ 
                                                    Debes de realizar ejercicio para ganar músculo de manera inmediata.`;
    document.getElementById("image").innerHTML='<img src="./images/men.jpg" />';
  } else if (imc > 18 && imc <= 22) {
    let estado2 = "Delgadez Moderada"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado2}. Atención ¡¡¡ Debes subir de peso moderadamente.`;
    document.getElementById("image").innerHTML='<img src="./images/men.jpg" />';
    console.log(estado2)
  } else if (imc > 22 && imc <= 27) {
    let estado3 = "Nivel Normal"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado3}. 
                                                    Felicitaciones ¡¡¡ estás en adecuado índice de masa corporal. Sigue así.`;
    document.getElementById("image").innerHTML='<img src="./images/men.jpg" />';
    console.log(estado3)
  } else if (imc >= 28 && imc <= 33) {
    let estado4 = "Pre-Obesidad"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado4}. Alerta ¡¡¡, estás a punto de ser Obeso. 
                                                    Debes de empezar con una dieta estricta para reducir tu peso y ayudarte con el gimnasio.`;
    document.getElementById("image").innerHTML='<img src="./images/men.jpg" />';
    console.log(estado4)
  } else {
    let estado5 = "Sobrepeso/Obesidad"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado5}. Peligro ¡¡¡ estás corriendo riesgos cardiovasculares.
                                                    Debes consultar con tu médico y empezar un estricto régimen alimenticio incluyendo ejercicio.`;
    document.getElementById("image").innerHTML='<img src="./images/men.png" />';
    }
    
  } else {
if (imc < 16) {
    let estado1 = "Delgadez Severa"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado1}. Cuidado ¡¡¡ 
                                                    Debes de realizar ejercicio para ganar músculo de manera inmediata.`;
    document.getElementById("image").innerHTML='<img src="./images/women.jpg" />';
  } else if (imc > 16 && imc <= 19) {
    let estado2 = "Delgadez Moderada"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado2}. Atención ¡¡¡ Debes subir de peso moderadamente.`;
    document.getElementById("image").innerHTML='<img src="./images/women.jpg" />';
    console.log(estado2)
  } else if (imc > 19 && imc <= 24) {
    let estado3 = "Nivel Normal"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado3}. 
                                                    Felicitaciones ¡¡¡ estás en adecuado índice de masa corporal. Sigue así.`;
    document.getElementById("image").innerHTML='<img src="./images/women.jpg" />';
    console.log(estado3)
  } else if (imc >= 25 && imc <= 29) {
    let estado4 = "Pre-Obesidad"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado4}. Alerta ¡¡¡, estás a punto de ser Obesa. 
                                                    Debes de empezar con una dieta estricta para reducir tu peso y ayudarte con el gimnasio.`;
    document.getElementById("image").innerHTML='<img src="./images/women.jpg" />';
    console.log(estado4)
  } else {
    let estado5 = "Sobrepeso/Obesidad"
    document.getElementById("mensaje").innerHTML = `${nombre} tu Índice de masa corporal es: ${estado5}. Peligro ¡¡¡ estás corriendo riesgos cardiovasculares.
                                                    Debes consultar con tu médico y empezar un estricto régimen alimenticio incluyendo ejercicio.`;
    document.getElementById("image").innerHTML='<img src="./images/women.png" />';
    }
  }

  

  console.log(imc)
  
}





/* with open('datos.txt','w',encoding='utf-8') as f:
    while True:
        nombre = input('Ingrese su Nombre Completo: ' )
        if nombre =='':break
        peso = float(input('Ingrese su peso en kg: '))
        altura = float(input('Ingrese su talla en metros: '))
        imc = peso / (altura**2)

        for i in range(len(vValores)):
            if imc < 16.00:
                valor = vValores[i][0]
            if imc > 16.00 and imc < 16.99:
                valor = vValores[i][1]
            if imc > 16.99 and imc < 18.49:
                valor = vValores[i][2]
            if imc > 18.49 and imc < 24.99:
                valor = vValores[i][3]
            if imc >= 25.00 and imc < 29.99:
                valor = vValores[i][4]
            if imc > 29.99 and imc < 34.99:
                valor = vValores[i][5]
            if imc > 34.99 and imc < 39.99:
                valor = vValores[i][6]
            else:
                valor = vValores[i][7]               
        dat = nombre+';'+str(peso)+';'+str(altura)+';'+str(imc)+';'+str(valor)+'\n'
        f.write(dat)
        reg = imc
        vImc.append(reg)
        print(dat)
        print(vImc) */
