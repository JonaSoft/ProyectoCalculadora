var calculadora={
	primerOperando:'0',
	segundoOperando:'0',
	resultado:'0',
	identificador:0,					
	ejecuta:function(){
		matrizTeclado=['on','sign','raiz','dividido','7','8','9','por','4','5','6','menos','1','2','3','0','punto','igual','mas'];
		for (var i = 0; i < matrizTeclado.length; i++) {
			posicion=matrizTeclado[i];
			document.getElementById(posicion).addEventListener('click',efectoAlPresionaTecla);
		};
	}
};
	function efectoAlPresionaTecla(){									//FUNCION DE EFECTO AL PRESIONAR LAS TECLAS
			identificador=this.id;											//CAPTURA DEL ID DE LA TECLA PRESIONADA
			tecla=document.getElementById(identificador);
			tecla.style="padding:1px;background:#BDBDBD;";
			setTimeout(function(){retornaEfectoTecla()},200);
			function retornaEfectoTecla(){
				if (identificador=='mas') {				
						tecla.style="width:90%;";
						tecla.style="height:100%;";
						tecla.style="padding:0px;";
					}else
						{
							tecla.style="width:22%;";
						}
			}
		procesamientoData(identificador);										// INVOCA A FUNCION PROCESAMIENTOPANTALLA
	}
	function procesamientoData(valorTecla){									// PARAMETRO identificador RECIBIDO POR FUNCION PROCESAMIENTODATA
		valorPantalla=document.getElementById('display');
		if(valorTecla=='on'){
			valorTecla='0';
			valorPantalla.textContent='0';
			resultado='0';
		}else if (valorTecla=='punto'){											// SI PRESIONA TECLA PUNTO
				buscaDigito=valorPantalla.textContent.indexOf('.');		//BUSCA SI EL PUNTO YA EXISTE EN PANTALLA
			if (buscaDigito==-1){
					if (valorPantalla.textContent=='') {
						valorPantalla.textContent='0';
					}
				valorPantalla.textContent+='.';
			}else{
					valorPantalla.textContent=valorPantalla.textContent;
				}
			}else if (valorTecla=='raiz'){										// SI PRESIONA TECLA RAIZ
					valorPantalla.textContent=valorPantalla.textContent;
					}else if (valorTecla=='sign'){								// SI PRESIONA TECLA SIGN
								if (valorPantalla.textContent.indexOf("-",0)==-1){
									if (valorPantalla.textContent=='0') {
										valorPantalla.textContent='0';
									}else{
										valorPantalla.textContent='-'+valorPantalla.textContent;
										valorPantalla.textContent=valorPantalla.textContent.substring(0,8);
										}
								}else{
										valorPantalla.textContent=valorPantalla.textContent.substring(1);
								 }
						   }else if (((valorTecla=='mas')|(valorTecla=='menos'))|((valorTecla=='por')|(valorTecla=='dividido'))){
									if (valorTecla=='mas'){
										operacion='+';
										}else if (valorTecla=='menos'){
												operacion='-';
												}else if (valorTecla=='por'){
														operacion='*';
														}else if(valorTecla=='dividido'){
																operacion='÷';
																}
								primerOperando=valorPantalla.textContent;			//CAPTURA PRIMER OPERANDO
								valorPantalla.textContent='';
								}else if (valorTecla=='igual'){						//SI PRESIONA TECLA IGUAL
												if (primerOperando=='0') {
													primerOperando=valorPantalla.textContent;
												}else {
														segundoOperando=valorPantalla.textContent;
												}
											primerOperando=parseFloat(primerOperando);
											segundoOperando=parseFloat(segundoOperando);
												switch (operacion) {						//EJECUTA FUNCIONES SEGUN OPERACION SELECCIONADA
														case '+':	var suma=function(num1,num2){
																		return num1+num2;
																}
															resultado=suma(primerOperando,segundoOperando);
															break;
														case '-':	var resta=function(num1,num2){
																		return num1-num2;
																}
															resultado=resta(primerOperando,segundoOperando);
															break;
														case '*':	var multiplica=function(num1,num2){
																		return num1*num2;
															}
															resultado=multiplica(primerOperando,segundoOperando);
															break;
														default:	var dividir=function(num1,num2){
																	return num1/num2;
																	}
															resultado=dividir(primerOperando,segundoOperando)
												}
											primerOperando='0'; 		//INICIALIZA PARA APLICAR OPERACION SOBRE EL RESULTADO CUANDO SOLO PRESIONA TECLA IGUAL
											valorPantalla.textContent=(resultado.toString()).substring(0,8) //ACUMULACION DE NUMEROS
											}else if(valorTecla=='0'){													 //Y VALIDACION DE 8 CARACTERES
														if (valorPantalla.textContent=='0') {
																valorPantalla.textContent='0';
															}else{
																	resultado=valorPantalla.textContent+valorTecla;
																	valorPantalla.textContent=resultado.substring(0,8);
																 }
														}else if (valorPantalla.textContent=='0'){
																		valorPantalla.textContent=valorTecla;
																}else{
																		resultado=valorPantalla.textContent+valorTecla;
																		valorPantalla.textContent=resultado.substring(0,8);
																		}
	};
calculadora.ejecuta();
