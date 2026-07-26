const title=document.getElementById("text");

let scale=1;

setInterval(()=>{
    scale=scale===1?1.15:1;
        title.style.transform=`scale(${scale})`;
        },600);

        function createHeart(){

            const heart=document.createElement("div");

                heart.className="heart";

                    heart.innerHTML="❤";

                        heart.style.left=Math.random()*window.innerWidth+"px";

                            heart.style.top=window.innerHeight+"px";

                                heart.style.fontSize=(20+Math.random()*35)+"px";

                                    document.body.appendChild(heart);

                                        setTimeout(()=>{
                                                heart.remove();
                                                    },6000);

                                                    }

                                                    setInterval(createHeart,180);