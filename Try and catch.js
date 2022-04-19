function retornaHora(data){
	if (data && !(data instanceof Date)){
	throw new typeError ("esperando instância de data.");
}
if (!data){
	data = new Date();
}
return data.toLocaleTimeString('pt-BR', {
	hour: '2-digit',
 minute: '2-digit',
 Seconds: '2-digit',
 hour12: false
});
}
try {
	const hora = retornaHora();
	console.log(hora);
}catch(e){
	console.log('tratando erro.');
}finally{
	console.log('tenha um bom dia.');
}
