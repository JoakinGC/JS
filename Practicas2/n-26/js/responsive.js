const d = document;
const media = (map,video) =>{
    if((window.matchMedia("(max-width: 600px)").matches)){
        video.innerHTML = "<a target='_blank' href='https://youtu.be/16geDhp5Xmg'>Video</a>";
        map.innerHTML = "<a target='_blank' href='https://goo.gl/maps/dqY6UfgW4ZTsqR8W8'>Maps</a>";
    }else{
        video.innerHTML = '<iframe width="400" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.951143767989!2d-0.527367489026835!3d38.39637867599421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623736a20484a5%3A0xb400d1ebf6f613dd!2sSan%20Vicente!5e0!3m2!1ses-419!2ses!4v1691501411086!5m2!1ses-419!2ses" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
}


export default function videoMapaRespon (videoCla,mapCla) {

    let video = d.getElementById(videoCla),
    map = d.getElementById(mapCla);
    
    media(map,video);

    window.onresize = function () {
        media(map,video);
    };
    
        
         
}