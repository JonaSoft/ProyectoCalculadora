var calculadora={
	ejecuta:function(){
	arrayTeclado=document.querySelectorAll('div>img');
	arrayTeclado[0].setAttribute('onclick','efectoPresionaTecla(0)');
	arrayTeclado[1].setAttribute('onclick','efectoPresionaTecla(1)');
	arrayTeclado[2].setAttribute('onclick','efectoPresionaTecla(2)');
	arrayTeclado[3].setAttribute('onclick','efectoPresionaTecla(3)');
	arrayTeclado[4].setAttribute('onclick','efectoPresionaTecla(4)');
	arrayTeclado[5].setAttribute('onclick','efectoPresionaTecla(5)');
	arrayTeclado[6].setAttribute('onclick','efectoPresionaTecla(6)');
	arrayTeclado[7].setAttribute('onclick','efectoPresionaTecla(7)');
	arrayTeclado[8].setAttribute('onclick','efectoPresionaTecla(8)');
	arrayTeclado[9].setAttribute('onclick','efectoPresionaTecla(9)');
	arrayTeclado[10].setAttribute('onclick','efectoPresionaTecla(10)');
	arrayTeclado[11].setAttribute('onclick','efectoPresionaTecla(11)');
	arrayTeclado[12].setAttribute('onclick','efectoPresionaTecla(12)');
	arrayTeclado[13].setAttribute('onclick','efectoPresionaTecla(13)');
	arrayTeclado[14].setAttribute('onclick','efectoPresionaTecla(14)');
	arrayTeclado[15].setAttribute('onclick','efectoPresionaTecla(15)');
	arrayTeclado[16].setAttribute('onclick','efectoPresionaTecla(16)');
	arrayTeclado[17].setAttribute('onclick','efectoPresionaTecla(17)');
	arrayTeclado[18].setAttribute('onclick','efectoPresionaTecla(18)')
	}
};
	function efectoPresionaTecla(valor){						//FUNCION EFECTO AL PRESIONAR TECLA
		identificador=arrayTeclado[valor].getAttribute('id');	// identifica id de tecla seleccionada
		tecla=document.getElementById(identificador);			// ASIGNA ID A tecla
		tecla.style="padding:1px;background:#BDBDBD;";
		setTimeout(function(){retornaEfectoTecla()},200);
		function retornaEfectoTecla(){
			if (valor='18') {
					tecla.style="width:90%;";
					tecla.style="height:100%;";
					tecla.style="padding:0px;";
				}else
					{
						tecla.style="width:22%;";
					}
		}
		datosPantalla(identificador);
	}
	// LLAMADO A FUNCIOS DATOSPANTALLA CON TECLA COMO IDENTIFICADOR
	function datosPantalla(valorTecla){
		valorPantalla=document.getElementById('display');
		//*****APLICACION TECLAS ESPECIALES ON, PUNTO, RAIZ, SIGN
		if(valorTecla=='on'){										// SI PRESIONO TECLA ON
			valorTecla='0';
			valorPantalla.textContent='0';						// 'ON'INICICIALIZA A CERO CONTENIDO DE SPAN 'DISPLAY'
		}else if (valorTecla=='punto'){							// SI PRESIONA TECLA PUNTO
				buscaDigito=valorPantalla.textContent.indexOf('.');
			if (buscaDigito==-1) {
				valorTecla='.';
				if (valorPantalla.textContent=='0') {
					valorPantalla.textContent='0.';
					}else{
						valorPantalla.textContent+=valorTecla;
						}

			}else{
				valorTecla='';
				valorPantalla.textContent=valorPantalla.textContent;
				}
			}else if (valorTecla=='raiz'){
					valorPantalla.textContent=valorPantalla.textContent;
					}else if (valorTecla=='sign'){
							if (valorPantalla.textContent.indexOf("-",0)==-1){
								valorTecla='';
								if (valorPantalla.textContent=='0') {
									valorTecla='';
									valorPantalla.textContent=0;
								}else{
									valorPantalla.textContent='-'+valorPantalla.textContent;
									valorTecla='';
									valorPantalla.textContent=valorPantalla.textContent.substring(0,8);
									}
							}else{
									valorPantalla.textContent=valorPantalla.textContent.substring(1);
									valorTecla='';
								}
			//*****APLICACION DE TECLAS OPERADORES
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
								valorTecla=' ';
								primerOperando=valorPantalla.textContent;
								valorPantalla.textContent=' ';
					}else if (valorTecla=='igual'){
							segundoOperando=valorPantalla.textContent;
		  				 	if (operacion=='+') {
								resultado=parseFloat(primerOperando)+parseFloat(segundoOperando);
								resultado=resultado.toString();
								}else if (operacion=='-') {
										resultado=parseFloat(primerOperando)-parseFloat(segundoOperando);
										resultado=resultado.toString();
										}else if(operacion=='*'){
												resultado=parseFloat(primerOperando)*parseFloat(segundoOperando);
												resultado=resultado.toString();
												}else if (operacion=='÷'){
														resultado=parseFloat(primerOperando)/parseFloat(segundoOperando);
														resultado=resultado.toString();
														}
							valorPantalla.textContent=resultado.substring(0,8)
								}else if((valorTecla=='0')|(valorTecla=='0')){
											if (valorPantalla.textContent=='0') {
												valorPantalla.textContent='0';
												}else{
														valorPantalla.textContent=valorPantalla.textContent+valorTecla;
														resultado=valorPantalla.textContent.substring(0,8);
														valorPantalla.textContent=resultado;
													 }
										}else if (valorPantalla.textContent=='0'){
												valorPantalla.textContent=' '
												valorPantalla.textContent=valorTecla;
												}else{
														valorPantalla.textContent=valorPantalla.textContent+valorTecla;
														resultado=valorPantalla.textContent.substring(0,8);
														valorPantalla.textContent=resultado;
													}
	};
	calculadora.ejecuta();
