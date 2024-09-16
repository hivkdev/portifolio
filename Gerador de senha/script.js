const parameters_in_password = {
    0:['@!#$%&(){}^'],
    1:['0123456789'],
    2:['abcdefghijklmnopqrstuvwxyz'],
    3:['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
}
let pass_arr = [0,1,2,3];
let filter_pass = Object.values(parameters_in_password).join('');
const options = document.querySelectorAll(`#options-password input[type="checkbox"]`)
options.forEach((e,index)=>{
    e.addEventListener("change",(e)=>{
        const index_ = pass_arr.findIndex(p=>p == index);
      (!e.target.checked)?pass_arr.splice(index_,1):pass_arr.push(index)
      console.log(index_)
      console.log(pass_arr)

    })
})
const pass_gen_btn = document.getElementById("password-gen-btn");
pass_gen_btn.addEventListener("click",()=>{
    gen_password()
})
document.getElementById("copy_pass").addEventListener("click",()=>{
    let pass_input = document.getElementById("password");
    pass_input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(pass_input.value)
    alert("Senha copiada")
})
const gen_password = () =>{
    const new_pass = Object.values(parameters_in_password).filter((e,index)=> pass_arr.includes(index));
    filter_pass = Object.values(new_pass).join('')
    let len = document.getElementById("password_len").value;
    let final_pass = "";
    for(let i = 0;i<=len;++i){
        const random = Math.floor(Math.random()*filter_pass.length);
        final_pass += filter_pass[random];
    }
    document.getElementById("password").value = final_pass;
}
gen_password()
