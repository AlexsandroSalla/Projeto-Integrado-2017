function showCustomer(str)
{
if (str=="")
  {
  document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (this.readyState==4 && this.status==200)
    {
    document.getElementById("txtHint").innerHTML=this.responseText;
    }
  }
xmlhttp.open("GET","getcustomer.asp?q="+str,true);
xmlhttp.send();
}


//FUN��O MONSTRA NOME DOS MUNICIPIOS

function showInfo(str1)
{
if (str1=="")
  {
  document.getElementById("txtHint1").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp1=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp1.onreadystatechange=function()
  {
  if (this.readyState==4 && this.status==200)
    {
    document.getElementById("txtHint1").innerHTML=this.responseText;
    }
  }
xmlhttp1.open("GET","getcustomer2.asp?i="+str1,true);
xmlhttp1.send();
}


//Verifica se o caracter digitado � n�mero ou ponto
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
	if(charCode == 46){ return false;	}
	else
	{
	
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		
        return false;
    }
	}
    return true;
}

//////////////////////////////////////////////////////////

function calcular(){
//vari�veis de entrada

var numFisio = $('#numFisio').val();
var numTO = $('#numTO').val();
var numPJFisio = $('#numPJFisio').val();
var numPJTO = $('#numPJTO').val();
var popResid = $('.popResid').html().val();
var NumDeFisioRecomendado = $('#NumDeFisioRecomendado').val();
var NumDeTORecomendado = $('#NumDeTORecomendado').val();

//verifica��o de divis�o por zero
//if(numFisio ~ 0 & numTO ~ 0){
//calculos

//�ndice atual - hab. Por Fisio
var IndiceAtualHabPorFsio = parseFloat(popResid) / parseFloat(numFisio);

$('#IndiceAtualHabPorFsio').val(IndiceAtualHabPorFsio.toFixed(2));


//�ndice atual - hab. Por TO
var IndiceAtualHabPorTO =  parseInt(popResid) / parseInt(numTO);

$('#IndiceAtualHabPorTO').val(IndiceAtualHabPorTO.toFixed(2));

//}

//D�ficit de Fisios
var DeficitFisi = parseFloat(NumDeFisioRecomendado) - parseFloat(numFisio);

$('#DeficitFisi').val(DeficitFisi.toFixed(0));


//D�ficit de Tos
var DeficitTO = parseFloat(NumDeTORecomendado) - parseFloat(numTO);

$('#DeficitTO').val(DeficitTO.toFixed(0));

}


