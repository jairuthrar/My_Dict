const get_word=document.getElementById("user_input1");
const  get_info=document.getElementById("info");
const  get_info1=document.getElementById("info");

const get_answer=document.getElementById("answer");
const get_title=document.getElementById("word");
const get_means=document.getElementById("means");
const sound=document.getElementById("audio") ;




  function cleartext() {
    let text_area = document.getElementById("user_input1");
    text_area.value = "";
    get_info.innerText="Type a word and hit enter";
    get_info.style.display="block";
    get_answer.style.display="none";
   
    

}
async function fetch_api(input)
{

 
  try{
         get_info.style.display="block";
         get_answer.style.display="none";
         get_info.innerText=`Searching  the meaning of "${input}"`;
         const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
         const result = await fetch(url).then((res) => res.json());
      
         if(result.title)
         {
          get_answer.style.display="block";
          get_info.style.display="none";
          get_means.innerText="N/A";
          sound.style.display="none";
          get_title.innerText=input;
         }

         else{
          get_answer.style.display="block";
          get_info.style.display="none";
          sound.style.display="inline-flex";
          get_title.innerText=input;
          get_means.innerText=result[0].meanings[0].definitions[0].definition;
          sound.src=result[0].phonetics[0].audio;

         }
        }
  catch (error) 
            {
                console.log(error);
                get_info.innerText=`An error happend try again later`; 
           }
        
}


get_word.addEventListener("keyup",(e)=>
{
  if(e.target.value && e.key=="Enter")
  {
    fetch_api(e.target.value)
  }
});



