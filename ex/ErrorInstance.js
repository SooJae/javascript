function validateEmail(email){
    return email.match(/@/)?
    email:
    new Error(`invailid email: ${email}`);
}

const email = "jaindoe.com";

const validatedEmail = validateEmail(email);

if (validatedEmail instanceof Error){
    console.error(`Error : ${validatedEmail.message}`);
}else{
    console.log(`Vaild email : ${validatedEmail}`);

}

