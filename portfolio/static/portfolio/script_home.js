const text = ["Programmer", "Photographer"];
const el = document.getElementById("typewriter");
let sleepTime = 100;

var idx = 0;
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const writeloop = async()=>{
    while (true)
    {
        let word = text[idx];
        console.log(word);
        await sleep(1000);
        for (let i = 0; i < word.length; i++) {
            el.innerText = word.substring(0,i+1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*10);

        for (let i = word.length; i >0; i--) {
            el.innerText = word.substring(0,i-1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime*5);
        
        if (idx == text.length-1)
        {
            idx = 0;
        }
        else
        {
            idx++;
        }
    }
}
writeloop();