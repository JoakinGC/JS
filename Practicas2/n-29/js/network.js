const  d = document;

export default function conetado(id,estado){

    const $id = d.getElementById(id);

    if(estado){
        console.log("Esta conectado");
    }else{
        $id.innerHTML = `<p>NO esta conectado</p>`
    }
        
}