// let textNumber = document.getElementById('messageTotal')
// let textCharge = document.getElementById('messageCharge')
let textAreaMessage = document.getElementById('textAreaMes')
let paragTag = document.getElementsByTagName('p')
console.log(paragTag)
textAreaMessage.addEventListener('keyup', () =>{
        let textAreaMess = Math.round((textAreaMessage.value.length)/150)
        let costOfMessage = textAreaMess*0.5
        if (textAreaMess === 0){
        paragTag[0].innerHTML = 'Number of Message: '+ 1
        paragTag[1].innerHTML = 'Cost of Message:GHC' + 0.5
        }
        else{
        paragTag[0].innerHTML = 'Number of Message: '+ textAreaMess
        paragTag[1].innerHTML = 'Cost of Message:GHC' + costOfMessage
        }
    })
textAreaMessage.value = ''


let smsParams={
    apiKey : 'cd56252ba7d02d00a6a6',
    sendId : 'Jemima',
    baseUrl : 'https://apps.mnotify.net/',
   }
   
   let   phone = document.getElementById('phone-number').value
   let   message = document.getElementById('textAreaMes').value
//    let phone = '0548316465'
//    let   message = textAreaMessage.value
   let url = `${smsParams.baseUrl}smsapi?key=${smsParams.apiKey}&to=${phone}&msg=${message}&sender_id=${smsParams.sendId}`
//    console.log(url)
   
   fetch(url).then(res => {
   res.json().then(res2 => console.log(res2))
   }).catch(err => console.log(err))
