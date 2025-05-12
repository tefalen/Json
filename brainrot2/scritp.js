fetch("https://api.janmotlik.dev/random-brainrot")
then(response=>response.json)    
then(data=>{
    
    const div = document.getElementById("div")
    div.append(data.name)

})